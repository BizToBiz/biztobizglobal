import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateIndustryInput } from './dto/user-create-industry.input'
import { UserListIndustryInput } from './dto/user-list-industry.input'
import { UserUpdateIndustryInput } from './dto/user-update-industry.input'

@Injectable()
export class ApiIndustryDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: UserListIndustryInput): Prisma.IndustryWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for industry
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

  userIndustries(info: GraphQLResolveInfo, userId: string, input?: UserListIndustryInput) {
    const select = new PrismaSelect(info).value
    return this.data.industry.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountIndustries(userId: string, input?: UserListIndustryInput): Promise<CorePaging> {
    const total = await this.data.industry.count()
    const count = await this.data.industry.count({ where: this.where(input) })
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

  userIndustry(info: GraphQLResolveInfo, userId: string, industryId) {
    const select = new PrismaSelect(info).value
    return this.data.industry.findUnique({ where: { id: industryId }, ...select })
  }

  userCreateIndustry(info: GraphQLResolveInfo, userId: string, input: UserCreateIndustryInput) {
    const select = new PrismaSelect(info).value
    return this.data.industry.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateIndustry(info: GraphQLResolveInfo, userId: string, industryId, input: UserUpdateIndustryInput) {
    const select = new PrismaSelect(info).value
    return this.data.industry.update({
      where: { id: industryId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteIndustry(info: GraphQLResolveInfo, userId: string, industryId) {
    return this.data.industry.delete({ where: { id: industryId } })
  }
}
