import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateUserInput } from './dto/admin-create-user.input'
import { AdminListUserInput } from './dto/admin-list-user.input'
import { AdminUpdateUserInput } from './dto/admin-update-user.input'

@Injectable()
export class ApiUserDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['firstName', 'lastName', 'email']
  private where(input: AdminListUserInput): Prisma.UserWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

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

  adminUsers(info: GraphQLResolveInfo, adminId: string, input?: AdminListUserInput) {
    const select = new PrismaSelect(info).value
    return this.data.user.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountUsers(adminId: string, input?: AdminListUserInput): Promise<CorePaging> {
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

  adminUser(info: GraphQLResolveInfo, adminId: string, userId) {
    const select = new PrismaSelect(info).value
    return this.data.user.findUnique({ where: { id: userId }, ...select })
  }

  adminCreateUser(info: GraphQLResolveInfo, adminId: string, input: AdminCreateUserInput) {
    const select = new PrismaSelect(info).value
    return this.data.user.create({
      data: { ...input },
      ...select,
    })
  }

  adminUpdateUser(info: GraphQLResolveInfo, adminId: string, userId, input: AdminUpdateUserInput) {
    const select = new PrismaSelect(info).value
    return this.data.user.update({
      where: { id: userId },
      data: { ...input },
      ...select,
    })
  }

  adminDeleteUser(info: GraphQLResolveInfo, adminId: string, userId) {
    return this.data.user.delete({ where: { id: userId } })
  }
}
