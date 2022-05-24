import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { UserCreateReferralInput } from './dto/user-create-referral.input'
import { UserListReferralInput } from './dto/user-list-referral.input'
import { UserUpdateReferralInput } from './dto/user-update-referral.input'

@Injectable()
export class ApiReferralDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userReferrals(info: GraphQLResolveInfo, userId: string, input?: UserListReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountReferrals(userId: string, input?: UserListReferralInput): Promise<CorePaging> {
    const total = await this.data.referral.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
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
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateReferral(info: GraphQLResolveInfo, userId: string, referralId, input: UserUpdateReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.update({
      where: { id: referralId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteReferral(info: GraphQLResolveInfo, userId: string, referralId) {
    return this.data.referral.delete({ where: { id: referralId } })
  }
}
