import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'
import { ListReferralInput } from './dto/list-referral.input'
import { LeaderReferralInput } from './dto/leader-referral.input'
import { ChapterMemberRole, UserStatus } from '@biztobiz/api/enums/data-access'

@Injectable()
export class ApiReferralDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private async leaderChapters(leaderId: string): Promise<string[]> {
    const chapters = await this.data.chapter.findMany({
      where: {
        OR: [
          {
            members: {
              some: {
                OR: [
                  { memberId: leaderId, role: ChapterMemberRole.President },
                  { memberId: leaderId, role: ChapterMemberRole.VicePresident },
                  { memberId: leaderId, role: ChapterMemberRole.Chairman },
                ],
              },
            },
          },
          {
            region: { manager: { id: leaderId } },
          },
          {
            region: { territory: { manager: { id: leaderId } } },
          },
        ],
      },
    })
    return chapters.map((chapter) => chapter.id)
  }
  private readonly searchFields = ['firstName', 'lastName', 'email']
  private async where(input: ListReferralInput, leaderId?: string): Promise<Prisma.ReferralWhereInput> {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]
    const leaderChapters = leaderId ? await this.leaderChapters(leaderId) : null

    function leaderSearch() {
      return {
        AND: [{ fromChapterId: { in: leaderChapters } }, { from: { status: UserStatus.Active } }],
      }
    }

    function relationalSearch() {
      if (input?.fromId) {
        return { fromId: input.fromId }
      }
      if (input?.toId) {
        return { toId: input.toId }
      }
      return null
    }

    function dateSearch(): Prisma.ReferralWhereInput {
      if (input?.startDate && input?.endDate) {
        return {
          AND: [{ referralDate: { gte: input.startDate } }, { referralDate: { lte: input.endDate } }],
        }
      } else if (input?.startDate) {
        return {
          referralDate: { gte: input.startDate },
        }
      } else if (input?.endDate) {
        return {
          referralDate: { lte: input.endDate },
        }
      }
      return null
    }

    return {
      AND: [
        relationalSearch(),
        leaderId ? leaderSearch() : null,
        dateSearch(),
        ...terms.map((term) => ({
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: Prisma.QueryMode.insensitive } })),
        })),
      ],
    }
  }

  async leaderReferrals(info: GraphQLResolveInfo, leaderId: string, input?: ListReferralInput) {
    const select = new PrismaSelect(info).value
    const where = await this.where(input, leaderId)
    return this.data.referral.findMany({
      take: input?.take ?? 10,
      skip: input?.skip ?? 0,
      where: where,
      orderBy: { createdAt: 'desc' },
      ...select,
    })
  }

  async leaderCountReferrals(leaderId: string, input?: ListReferralInput): Promise<CorePaging> {
    const total = await this.data.referral.count()
    const count = await this.data.referral.count({ where: await this.where(input, leaderId) })
    const take = input?.take || 10
    const skip = input?.skip || 0
    const page = Math.floor(skip / take)
    return {
      take,
      skip,
      page,
      count,
      total,
    }
  }

  leaderReferral(info: GraphQLResolveInfo, leaderId: string, referralId) {
    const select = new PrismaSelect(info).value
    return this.data.referral.findUnique({ where: { id: referralId }, ...select })
  }

  async leaderCreateReferral(info: GraphQLResolveInfo, leaderId: string, input: LeaderReferralInput) {
    const user = await this.data.user.findUnique({
      where: { id: leaderId },
      select: { id: true, role: true, chapter: { select: { id: true } } },
    })

    const isLeader = await this.data.ensureChapterLeader(leaderId, user?.chapter?.id)

    if (input.fromId && input.toId !== leaderId && user.role !== 'Admin' && !isLeader) {
      throw new UnauthorizedException(`You need elevated permissions to do this.`)
    }

    const fromId = input.fromId ? input.fromId : leaderId
    const toId = input.toId

    const fromUser = await this.data.user.findUnique({
      where: { id: fromId },
      select: { id: true, industry: true, chapter: { select: { chapterId: true } } },
    })
    const toUser = await this.data.user.findUnique({
      where: { id: toId },
      select: { id: true, industry: true, chapter: { select: { chapterId: true } } },
    })

    if (!fromUser?.chapter?.chapterId) {
      throw new Error(`Member ${fromId} has no chapter`)
    }

    if (!toUser?.chapter?.chapterId) {
      throw new Error(`Member ${toId} has no chapter`)
    }

    const fromChapterId = fromUser?.chapter?.chapterId
    const toChapterId = toUser?.chapter?.chapterId

    const select = new PrismaSelect(info).value

    return this.data.referral.create({
      data: {
        referralDate: input.referralDate || new Date(),
        from: { connect: { id: fromId } },
        fromChapter: { connect: { id: fromChapterId } },
        sentBy: { connect: { id: leaderId } },
        to: { connect: { id: input.toId } },
        toChapter: { connect: { id: toChapterId } },
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        notes: input.notes,
        phone: input.phone,
        rating: input.rating,
        fromIndustry: fromUser.industry,
        toIndustry: toUser.industry,
      },
      ...select,
    })

    // await this.notifications.sendNotification(NotificationType.ReferralReceived, input.toId, {
    //   actorUserId: userId,
    //   referenceId: created.id,
    //   referenceType: NotificationReferenceType.Referral,
    // })
    // return created
  }

  async leaderUpdateReferral(info: GraphQLResolveInfo, leaderId: string, referralId, input: LeaderReferralInput) {
    const user = await this.data.user.findUnique({
      where: { id: leaderId },
      select: { id: true, role: true, chapter: { select: { id: true } } },
    })

    const isLeader = await this.data.ensureChapterLeader(leaderId, user?.chapter?.id)

    if (input.fromId && input.toId !== leaderId && user.role !== 'Admin' && !isLeader) {
      throw new UnauthorizedException(`You need elevated permissions to do this.`)
    }

    const fromId = input.fromId ? input.fromId : leaderId
    const toId = input.toId

    const fromUser = await this.data.user.findUnique({
      where: { id: fromId },
      select: { id: true, industry: true, chapter: { select: { chapterId: true } } },
    })
    const toUser = await this.data.user.findUnique({
      where: { id: toId },
      select: { id: true, industry: true, chapter: { select: { chapterId: true } } },
    })

    if (!fromUser?.chapter?.chapterId) {
      throw new Error(`Member ${fromId} has no chapter`)
    }

    if (!toUser?.chapter?.chapterId) {
      throw new Error(`Member ${toId} has no chapter`)
    }

    const fromChapterId = fromUser?.chapter?.chapterId
    const toChapterId = toUser?.chapter?.chapterId

    const select = new PrismaSelect(info).value

    return this.data.referral.update({
      where: {
        id: referralId,
      },
      data: {
        referralDate: input.referralDate || new Date(),
        from: { connect: { id: fromId } },
        fromChapter: { connect: { id: fromChapterId } },
        sentBy: { connect: { id: leaderId } },
        to: { connect: { id: input.toId } },
        toChapter: { connect: { id: toChapterId } },
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        notes: input.notes,
        phone: input.phone,
        rating: input.rating,
        fromIndustry: fromUser.industry,
        toIndustry: toUser.industry,
      },
      ...select,
    })
  }

  leaderDeleteReferral(info: GraphQLResolveInfo, leaderId: string, referralId) {
    return this.data.referral.delete({ where: { id: referralId } })
  }
}
