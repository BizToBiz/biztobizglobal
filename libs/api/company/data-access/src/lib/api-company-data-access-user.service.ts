import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateCompanyInput } from './dto/user-create-company.input'
import { UserListCompanyInput } from './dto/user-list-company.input'
import { UserUpdateCompanyInput } from './dto/user-update-company.input'

@Injectable()
export class ApiCompanyDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: UserListCompanyInput): Prisma.CompanyWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for company
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

  userCompanies(info: GraphQLResolveInfo, userId: string, input?: UserListCompanyInput) {
    const select = new PrismaSelect(info).value
    return this.data.company.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountCompanies(userId: string, input?: UserListCompanyInput): Promise<CorePaging> {
    const total = await this.data.company.count()
    const count = await this.data.company.count({ where: this.where(input) })
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

  userCompany(info: GraphQLResolveInfo, userId: string, companyId) {
    const select = new PrismaSelect(info).value
    return this.data.company.findUnique({ where: { id: companyId }, ...select })
  }

  userCreateCompany(info: GraphQLResolveInfo, userId: string, input: UserCreateCompanyInput) {
    const select = new PrismaSelect(info).value
    return this.data.company.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateCompany(info: GraphQLResolveInfo, userId: string, companyId, input: UserUpdateCompanyInput) {
    const select = new PrismaSelect(info).value
    return this.data.company.update({
      where: { id: companyId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteCompany(info: GraphQLResolveInfo, userId: string, companyId) {
    return this.data.company.delete({ where: { id: companyId } })
  }
}
