import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateRegionInput } from './dto/admin-create-region.input'
import { AdminListRegionInput } from './dto/admin-list-region.input'
import { AdminUpdateRegionInput } from './dto/admin-update-region.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ApiRegionDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
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

  adminRegions(info: GraphQLResolveInfo, adminId: string, input?: AdminListRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountRegions(adminId: string, input?: AdminListRegionInput): Promise<CorePaging> {
    const total = await this.data.region.count()
    const count = await this.data.region.count({ where: this.where(input) })
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

  adminRegion(info: GraphQLResolveInfo, adminId: string, regionId) {
    const select = new PrismaSelect(info).value
    return this.data.region.findUnique({ where: { id: regionId }, ...select })
  }

  adminCreateRegion(info: GraphQLResolveInfo, adminId: string, input: AdminCreateRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.create({
      data: { ...input },
      ...select,
    })
  }

  adminUpdateRegion(info: GraphQLResolveInfo, adminId: string, regionId, input: AdminUpdateRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.update({
      where: { id: regionId },
      data: { ...input },
      ...select,
    })
  }

  adminDeleteRegion(info: GraphQLResolveInfo, adminId: string, regionId) {
    return this.data.region.delete({ where: { id: regionId } })
  }
}
