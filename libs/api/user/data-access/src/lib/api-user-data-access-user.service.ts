import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateUserInput } from './dto/user-create-user.input'
import { UserListUserInput } from './dto/user-list-user.input'
import { UserUpdateUserInput } from './dto/user-update-user.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ApiUserDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['firstName', 'lastName', 'email']
  private where(input: UserListUserInput): Prisma.UserWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for user
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

  userUsers(info: GraphQLResolveInfo, userId: string, input?: UserListUserInput) {
    const select = new PrismaSelect(info).value
    return this.data.user.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountUsers(input?: UserListUserInput): Promise<CorePaging> {
    const total = await this.data.user.count()
    const count = await this.data.user.count({ where: this.where(input) })
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

  userUser(info: GraphQLResolveInfo, userId: string) {
    const select = new PrismaSelect(info).value
    return this.data.user.findUnique({ where: { id: userId }, ...select })
  }

  userCreateUser(info: GraphQLResolveInfo, input: UserCreateUserInput) {
    const select = new PrismaSelect(info).value
    return this.data.user.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateUser(info: GraphQLResolveInfo, userId: string, input: UserUpdateUserInput) {
    const select = new PrismaSelect(info).value
    return this.data.user.update({
      where: { id: userId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteUser(info: GraphQLResolveInfo, userId: string) {
    return this.data.user.delete({ where: { id: userId } })
  }
}
