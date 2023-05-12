import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateRegionInput } from './dto/user-create-region.input'
import { UserListRegionInput } from './dto/user-list-region.input'
import { UserUpdateRegionInput } from './dto/user-update-region.input'

@Injectable()
export class ApiRegionDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: UserListRegionInput): Prisma.RegionWhereInput {
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

  userRegions(info: GraphQLResolveInfo, userId: string, input?: UserListRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountRegions(userId: string, input?: UserListRegionInput): Promise<CorePaging> {
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

  userRegion(info: GraphQLResolveInfo, userId: string, regionId) {
    const select = new PrismaSelect(info).value
    return this.data.region.findUnique({ where: { id: regionId }, ...select })
  }

  userCreateRegion(info: GraphQLResolveInfo, userId: string, input: UserCreateRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateRegion(info: GraphQLResolveInfo, userId: string, regionId, input: UserUpdateRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.update({
      where: { id: regionId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteRegion(info: GraphQLResolveInfo, userId: string, regionId) {
    return this.data.region.delete({ where: { id: regionId } })
  }
}
