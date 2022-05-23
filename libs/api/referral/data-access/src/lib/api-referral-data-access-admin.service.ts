import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { AdminCreateReferralInput } from './dto/admin-create-referral.input'
import { AdminListReferralInput } from './dto/admin-list-referral.input'
import { AdminUpdateReferralInput } from './dto/admin-update-referral.input'

@Injectable()
export class ApiReferralDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminReferrals(info: GraphQLResolveInfo, adminId: string, input?: AdminListReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountReferrals(adminId: string, input?: AdminListReferralInput): Promise<CorePaging> {
    const total = await this.data.referral.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  adminReferral(info: GraphQLResolveInfo, adminId: string, referralId) {
    const select = new PrismaSelect(info).value
    return this.data.referral.findUnique({ where: { id: referralId }, ...select })
  }

  adminCreateReferral(info: GraphQLResolveInfo, adminId: string, input: AdminCreateReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.create({
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateReferral(info: GraphQLResolveInfo, adminId: string, referralId, input: AdminUpdateReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.update({
      where: { id: referralId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteReferral(info: GraphQLResolveInfo, adminId: string, referralId) {
    return this.data.referral.delete({ where: { id: referralId } })
  }
}
