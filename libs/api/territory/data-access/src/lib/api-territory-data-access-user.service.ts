import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateTerritoryInput } from './dto/user-create-territory.input'
import { UserListTerritoryInput } from './dto/user-list-territory.input'
import { UserUpdateTerritoryInput } from './dto/user-update-territory.input'

@Injectable()
export class ApiTerritoryDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: UserListTerritoryInput): Prisma.TerritoryWhereInput {
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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

  userTerritories(info: GraphQLResolveInfo, userId: string, input?: UserListTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountTerritories(userId: string, input?: UserListTerritoryInput): Promise<CorePaging> {
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

  userTerritory(info: GraphQLResolveInfo, userId: string, territoryId) {
    const select = new PrismaSelect(info).value
    return this.data.territory.findUnique({ where: { id: territoryId }, ...select })
  }

  userCreateTerritory(info: GraphQLResolveInfo, userId: string, input: UserCreateTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateTerritory(info: GraphQLResolveInfo, userId: string, territoryId, input: UserUpdateTerritoryInput) {
    const select = new PrismaSelect(info).value
    return this.data.territory.update({
      where: { id: territoryId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteTerritory(info: GraphQLResolveInfo, userId: string, territoryId) {
    return this.data.territory.delete({ where: { id: territoryId } })
  }
}
