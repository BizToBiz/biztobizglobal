import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateRegionInput } from './dto/admin-create-region.input'
import { AdminListRegionInput } from './dto/admin-list-region.input'
import { AdminUpdateRegionInput } from './dto/admin-update-region.input'

@Injectable()
export class ApiRegionDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: AdminListRegionInput): Prisma.RegionWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for region
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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: Prisma.QueryMode.insensitive } })),
        })),
      ],
    }
  }

  leaderRegions(info: GraphQLResolveInfo, leaderId: string, input?: AdminListRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountRegions(leaderId: string, input?: AdminListRegionInput): Promise<CorePaging> {
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

  leaderRegion(info: GraphQLResolveInfo, leaderId: string, regionId) {
    const select = new PrismaSelect(info).value
    return this.data.region.findUnique({ where: { id: regionId }, ...select })
  }

  leaderCreateRegion(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateRegion(info: GraphQLResolveInfo, leaderId: string, regionId, input: AdminUpdateRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.update({
      where: { id: regionId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteRegion(info: GraphQLResolveInfo, leaderId: string, regionId) {
    return this.data.region.delete({ where: { id: regionId } })
  }
}
