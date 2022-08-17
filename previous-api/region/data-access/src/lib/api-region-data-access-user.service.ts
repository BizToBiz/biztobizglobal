import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateRegionInput } from './dto/user-create-region.input'
import { UserListRegionInput } from './dto/user-list-region.input'
import { UserUpdateRegionInput } from './dto/user-update-region.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ApiRegionDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(query = ''): Prisma.RegionWhereInput {
    query = query?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]
    return {
      AND: terms.map((term) => ({
        OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
      })),
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
    const count = await this.data.region.count({ where: this.where(input?.search) })
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
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateRegion(info: GraphQLResolveInfo, userId: string, regionId, input: UserUpdateRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.update({
      where: { id: regionId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteRegion(info: GraphQLResolveInfo, userId: string, regionId) {
    return this.data.region.delete({ where: { id: regionId } })
  }
}
