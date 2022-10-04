import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateReferralInput } from './dto/admin-create-referral.input'
import { AdminListReferralInput } from './dto/admin-list-referral.input'
import { AdminUpdateReferralInput } from './dto/admin-update-referral.input'
import { AdminListRegionInput } from '@biztobiz/api/region/data-access'
import { Prisma } from '@prisma/client'

@Injectable()
export class ApiReferralDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['firstName', 'lastName', 'email', 'phone']
  private where(input: AdminListRegionInput): Prisma.RegionWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // function relationalSearch() {
    //   if (input?.regionId) {
    //     return { regionId: input.regionId }
    //   }
    //   if (input?.substituteGroupId) {
    //     return { substituteGroupId: input.substituteGroupId }
    //   }
    //   if (input?.memberId) {
    //     return { members: { some: { id: input.memberId } } }
    //   }
    //   return null
    // }
    return {
      AND: [
        // relationalSearch(),
        ...terms.map((term) => ({
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

  adminReferrals(info: GraphQLResolveInfo, adminId: string, input?: AdminListReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountReferrals(adminId: string, input?: AdminListReferralInput): Promise<CorePaging> {
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

  adminReferral(info: GraphQLResolveInfo, adminId: string, referralId) {
    const select = new PrismaSelect(info).value
    return this.data.referral.findUnique({ where: { id: referralId }, ...select })
  }

  adminCreateReferral(info: GraphQLResolveInfo, adminId: string, input: AdminCreateReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.create({
      data: { ...input },
      ...select,
    })
  }

  adminUpdateReferral(info: GraphQLResolveInfo, adminId: string, referralId, input: AdminUpdateReferralInput) {
    const select = new PrismaSelect(info).value
    return this.data.referral.update({
      where: { id: referralId },
      data: { ...input },
      ...select,
    })
  }

  adminDeleteReferral(info: GraphQLResolveInfo, adminId: string, referralId) {
    return this.data.referral.delete({ where: { id: referralId } })
  }
}
