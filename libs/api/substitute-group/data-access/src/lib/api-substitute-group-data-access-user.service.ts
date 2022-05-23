import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { UserCreateSubstituteGroupInput } from './dto/user-create-substitute-group.input'
import { UserListSubstituteGroupInput } from './dto/user-list-substitute-group.input'
import { UserUpdateSubstituteGroupInput } from './dto/user-update-substitute-group.input'

@Injectable()
export class ApiSubstituteGroupDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userSubstituteGroups(info: GraphQLResolveInfo, userId: string, input?: UserListSubstituteGroupInput) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountSubstituteGroups(userId: string, input?: UserListSubstituteGroupInput): Promise<CorePaging> {
    const total = await this.data.substituteGroup.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  userSubstituteGroup(info: GraphQLResolveInfo, userId: string, substituteGroupId) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.findUnique({ where: { id: substituteGroupId }, ...select })
  }

  userCreateSubstituteGroup(info: GraphQLResolveInfo, userId: string, input: UserCreateSubstituteGroupInput) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.create({
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateSubstituteGroup(
    info: GraphQLResolveInfo,
    userId: string,
    substituteGroupId,
    input: UserUpdateSubstituteGroupInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.update({
      where: { id: substituteGroupId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteSubstituteGroup(info: GraphQLResolveInfo, userId: string, substituteGroupId) {
    return this.data.substituteGroup.delete({ where: { id: substituteGroupId } })
  }
}
