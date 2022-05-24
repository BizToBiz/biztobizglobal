import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateTerritoryInput } from './dto/admin-create-territory.input'
import { AdminListTerritoryInput } from './dto/admin-list-territory.input'
import { AdminUpdateTerritoryInput } from './dto/admin-update-territory.input'

@Injectable()
export class ApiTerritoryDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminTerritories(info: GraphQLResolveInfo, adminId: string, input?: AdminListTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountTerritories(adminId: string, input?: AdminListTerritoryInput): Promise<CorePaging> {
    const total = await this.data.territory.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
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
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateTerritory(info: GraphQLResolveInfo, adminId: string, territoryId, input: AdminUpdateTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.update({
      where: { id: territoryId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteTerritory(info: GraphQLResolveInfo, adminId: string, territoryId) {
    return this.data.territory.delete({ where: { id: territoryId } })
  }
}
