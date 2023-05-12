import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateReferralInput } from './dto/admin-create-referral.input'
import { AdminListReferralInput } from './dto/admin-list-referral.input'
import { AdminUpdateReferralInput } from './dto/admin-update-referral.input'

@Injectable()
export class ApiReferralDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private where(input: AdminListReferralInput): Prisma.ReferralWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

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
          OR: [
            { firstName: { contains: term, mode: Prisma.QueryMode.insensitive } },
            { lastName: { contains: term, mode: Prisma.QueryMode.insensitive } },
            { from: { firstName: { contains: term, mode: Prisma.QueryMode.insensitive } } },
            { from: { lastName: { contains: term, mode: Prisma.QueryMode.insensitive } } },
            { to: { firstName: { contains: term, mode: Prisma.QueryMode.insensitive } } },
            { to: { lastName: { contains: term, mode: Prisma.QueryMode.insensitive } } },
          ],
        })),
      ],
    }
  }

  adminReferrals(info: GraphQLResolveInfo, adminId: string, input?: AdminListReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.findMany({
      take: input?.take ?? 10,
      skip: input?.skip ?? 0,
      where: this.where(input),
      orderBy: { createdAt: 'desc' },
      ...select,
    })
  }

  async adminCountReferrals(adminId: string, input?: AdminListReferralInput): Promise<CorePaging> {
    const total = await this.data.referral.count()
    const count = await this.data.referral.count({ where: this.where(input) })
    const take = input?.take ?? 10
    const skip = input?.skip ?? 0
    const page = Math.floor(skip / take)
    return {
      take,
      skip,
      page,
      count,
      total,
    }
  }

  adminReferral(info: GraphQLResolveInfo, adminId: string, referralId) {
    const select = new PrismaSelect(info).value
    return this.data.referral.findUnique({ where: { id: referralId }, ...select })
  }

  async adminCreateReferral(info: GraphQLResolveInfo, adminId: string, input: AdminCreateReferralInput) {
    const user = await this.data.user.findUnique({
      where: { id: adminId },
      select: { id: true, role: true, chapter: { select: { id: true } } },
    })

    const isLeader = await this.data.ensureChapterLeader(adminId, user?.chapter?.id)

    if (input.fromId && input.toId !== adminId && user.role !== 'Admin' && !isLeader) {
      throw new UnauthorizedException(`You need elevated permissions to do this.`)
    }

    const fromId = input.fromId ? input.fromId : adminId
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
        referralDate: input?.referralDate || new Date(),
        from: { connect: { id: fromId } },
        fromChapter: { connect: { id: fromChapterId } },
        sentBy: { connect: { id: adminId } },
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

  async adminUpdateReferral(info: GraphQLResolveInfo, adminId: string, referralId, input: AdminUpdateReferralInput) {
    const user = await this.data.user.findUnique({
      where: { id: adminId },
      select: { id: true, role: true, chapter: { select: { id: true } } },
    })

    const isLeader = await this.data.ensureChapterLeader(adminId, user?.chapter?.id)

    if (input.fromId && input.toId !== adminId && user.role !== 'Admin' && !isLeader) {
      throw new UnauthorizedException(`You need elevated permissions to do this.`)
    }

    const fromId = input.fromId ? input.fromId : adminId
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
        referralDate: input?.referralDate || new Date(),
        from: { connect: { id: fromId } },
        fromChapter: { connect: { id: fromChapterId } },
        sentBy: { connect: { id: adminId } },
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

  adminDeleteReferral(info: GraphQLResolveInfo, adminId: string, referralId) {
    return this.data.referral.delete({ where: { id: referralId } })
  }
}
