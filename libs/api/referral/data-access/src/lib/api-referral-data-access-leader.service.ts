import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'
import { AdminListReferralInput } from './dto/admin-list-referral.input'
import { LeaderReferralInput } from './dto/leader-referral.input'

@Injectable()
export class ApiReferralDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['firstName', 'lastName', 'email']
  private where(input: AdminListReferralInput): Prisma.ReferralWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for referral
      // if (input?.regionId) {
      //   return { regionId: input.regionId }
      // }
      // if (input?.memberId) {
      //   return { members: { some: { id: input.memberId } } }
      // }
      return null
    }
    return {
      AND: [
        relationalSearch(),
        ...terms.map((term) => ({
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

  leaderReferrals(info: GraphQLResolveInfo, leaderId: string, input?: AdminListReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountReferrals(leaderId: string, input?: AdminListReferralInput): Promise<CorePaging> {
    const total = await this.data.referral.count()
    const count = await this.data.referral.count({ where: this.where(input) })
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

    console.log(fromChapterId, toChapterId)

    const select = new PrismaSelect(info).value

    return this.data.referral.update({
      where: {
        id: referralId,
      },
      data: {
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
