import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateReferralInput } from './dto/user-create-referral.input'
import { UserListReferralInput } from './dto/user-list-referral.input'
import { UserUpdateReferralInput } from './dto/user-update-referral.input'

@Injectable()
export class ApiReferralDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['firstName', 'lastName', 'email']
  private where(input: UserListReferralInput): Prisma.ReferralWhereInput {
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

  userReferrals(info: GraphQLResolveInfo, userId: string, input?: UserListReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountReferrals(userId: string, input?: UserListReferralInput): Promise<CorePaging> {
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

  userReferral(info: GraphQLResolveInfo, userId: string, referralId) {
    const select = new PrismaSelect(info).value
    return this.data.referral.findUnique({ where: { id: referralId }, ...select })
  }

  userCreateReferral(info: GraphQLResolveInfo, userId: string, input: UserCreateReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateReferral(info: GraphQLResolveInfo, userId: string, referralId, input: UserUpdateReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.update({
      where: { id: referralId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteReferral(info: GraphQLResolveInfo, userId: string, referralId) {
    return this.data.referral.delete({ where: { id: referralId } })
  }
}
