import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateSubstituteGroupInput } from './dto/user-create-substitute-group.input'
import { UserListSubstituteGroupInput } from './dto/user-list-substitute-group.input'
import { UserUpdateSubstituteGroupInput } from './dto/user-update-substitute-group.input'

@Injectable()
export class ApiSubstituteGroupDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: UserListSubstituteGroupInput): Prisma.SubstituteGroupWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for substitute-group
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

  userSubstituteGroups(info: GraphQLResolveInfo, userId: string, input?: UserListSubstituteGroupInput) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountSubstituteGroups(userId: string, input?: UserListSubstituteGroupInput): Promise<CorePaging> {
    const total = await this.data.substituteGroup.count()
    const count = await this.data.substituteGroup.count({ where: this.where(input) })
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

  userSubstituteGroup(info: GraphQLResolveInfo, userId: string, substituteGroupId) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.findUnique({ where: { id: substituteGroupId }, ...select })
  }

  userCreateSubstituteGroup(info: GraphQLResolveInfo, userId: string, input: UserCreateSubstituteGroupInput) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.create({
      data: { ...input },
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
      data: { ...input },
      ...select,
    })
  }

  userDeleteSubstituteGroup(info: GraphQLResolveInfo, userId: string, substituteGroupId) {
    return this.data.substituteGroup.delete({ where: { id: substituteGroupId } })
  }
}
