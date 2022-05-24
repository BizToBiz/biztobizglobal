import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { UserCreateCompanyInput } from './dto/user-create-company.input'
import { UserListCompanyInput } from './dto/user-list-company.input'
import { UserUpdateCompanyInput } from './dto/user-update-company.input'

@Injectable()
export class ApiCompanyDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userCompanys(info: GraphQLResolveInfo, userId: string, input?: UserListCompanyInput) {
    const select = new PrismaSelect(info).value
    return this.data.company.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountCompanys(userId: string, input?: UserListCompanyInput): Promise<CorePaging> {
    const total = await this.data.company.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
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
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateCompany(info: GraphQLResolveInfo, userId: string, companyId, input: UserUpdateCompanyInput) {
    const select = new PrismaSelect(info).value
    return this.data.company.update({
      where: { id: companyId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteCompany(info: GraphQLResolveInfo, userId: string, companyId) {
    return this.data.company.delete({ where: { id: companyId } })
  }
}
