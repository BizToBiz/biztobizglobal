import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateTerritoryInput } from './dto/admin-create-territory.input'
import { AdminListTerritoryInput } from './dto/admin-list-territory.input'
import { AdminUpdateTerritoryInput } from './dto/admin-update-territory.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ApiTerritoryDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: AdminListTerritoryInput): Prisma.TerritoryWhereInput {
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

  adminTerritories(info: GraphQLResolveInfo, adminId: string, input?: AdminListTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountTerritories(adminId: string, input?: AdminListTerritoryInput): Promise<CorePaging> {
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

  adminTerritory(info: GraphQLResolveInfo, adminId: string, territoryId) {
    const select = new PrismaSelect(info).value
    return this.data.territory.findUnique({ where: { id: territoryId }, ...select })
  }

  adminCreateTerritory(info: GraphQLResolveInfo, adminId: string, input: AdminCreateTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.create({
      data: { ...input, regions: { connect: input.regions } },
      ...select,
    })
  }

  adminUpdateTerritory(info: GraphQLResolveInfo, adminId: string, territoryId, input: AdminUpdateTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.update({
      where: { id: territoryId },
      data: {
        ...input,
        regions: { set: input.regions },
      },
      ...select,
    })
  }

  adminDeleteTerritory(info: GraphQLResolveInfo, adminId: string, territoryId) {
    return this.data.territory.delete({ where: { id: territoryId } })
  }
}
