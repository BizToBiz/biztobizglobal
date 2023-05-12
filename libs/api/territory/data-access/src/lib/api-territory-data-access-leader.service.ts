import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateTerritoryInput } from './dto/admin-create-territory.input'
import { AdminListTerritoryInput } from './dto/admin-list-territory.input'
import { AdminUpdateTerritoryInput } from './dto/admin-update-territory.input'

@Injectable()
export class ApiTerritoryDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: AdminListTerritoryInput): Prisma.TerritoryWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for territory
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

  leaderTerritories(info: GraphQLResolveInfo, leaderId: string, input?: AdminListTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountTerritories(leaderId: string, input?: AdminListTerritoryInput): Promise<CorePaging> {
    const total = await this.data.territory.count()
    const count = await this.data.territory.count({ where: this.where(input) })
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

  leaderTerritory(info: GraphQLResolveInfo, leaderId: string, territoryId) {
    const select = new PrismaSelect(info).value
    return this.data.territory.findUnique({ where: { id: territoryId }, ...select })
  }

  leaderCreateTerritory(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateTerritory(info: GraphQLResolveInfo, leaderId: string, territoryId, input: AdminUpdateTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.update({
      where: { id: territoryId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteTerritory(info: GraphQLResolveInfo, leaderId: string, territoryId) {
    return this.data.territory.delete({ where: { id: territoryId } })
  }
}
