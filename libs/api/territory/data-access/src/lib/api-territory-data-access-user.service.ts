import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateTerritoryInput } from './dto/user-create-territory.input'
import { UserListTerritoryInput } from './dto/user-list-territory.input'
import { UserUpdateTerritoryInput } from './dto/user-update-territory.input'

@Injectable()
export class ApiTerritoryDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userTerritories(info: GraphQLResolveInfo, userId: string, input?: UserListTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountTerritories(userId: string, input?: UserListTerritoryInput): Promise<CorePaging> {
    const total = await this.data.territory.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  userTerritory(info: GraphQLResolveInfo, userId: string, territoryId) {
    const select = new PrismaSelect(info).value
    return this.data.territory.findUnique({ where: { id: territoryId }, ...select })
  }

  userCreateTerritory(info: GraphQLResolveInfo, userId: string, input: UserCreateTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.create({
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateTerritory(info: GraphQLResolveInfo, userId: string, territoryId, input: UserUpdateTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.update({
      where: { id: territoryId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteTerritory(info: GraphQLResolveInfo, userId: string, territoryId) {
    return this.data.territory.delete({ where: { id: territoryId } })
  }
}
