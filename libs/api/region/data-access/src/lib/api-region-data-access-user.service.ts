import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateRegionInput } from './dto/user-create-region.input'
import { UserListRegionInput } from './dto/user-list-region.input'
import { UserUpdateRegionInput } from './dto/user-update-region.input'

@Injectable()
export class ApiRegionDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

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
    return {
      take: input?.take,
      skip: input?.skip,
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
