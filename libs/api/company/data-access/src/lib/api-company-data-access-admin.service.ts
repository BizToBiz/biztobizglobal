import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateCompanyInput } from './dto/admin-create-company.input'
import { AdminListCompanyInput } from './dto/admin-list-company.input'
import { AdminUpdateCompanyInput } from './dto/admin-update-company.input'

@Injectable()
export class ApiCompanyDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminCompanys(info: GraphQLResolveInfo, adminId: string, input?: AdminListCompanyInput) {
    const select = new PrismaSelect(info).value
    return this.data.company.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountCompanys(adminId: string, input?: AdminListCompanyInput): Promise<CorePaging> {
    const total = await this.data.company.count()
    return {
      take: input?.take,
      skip: input?.skip,
      total,
    }
  }

  adminCompany(info: GraphQLResolveInfo, adminId: string, companyId) {
    const select = new PrismaSelect(info).value
    return this.data.company.findUnique({ where: { id: companyId }, ...select })
  }

  adminCreateCompany(info: GraphQLResolveInfo, adminId: string, input: AdminCreateCompanyInput) {
    const select = new PrismaSelect(info).value
    return this.data.company.create({
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateCompany(info: GraphQLResolveInfo, adminId: string, companyId, input: AdminUpdateCompanyInput) {
    const select = new PrismaSelect(info).value
    return this.data.company.update({
      where: { id: companyId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteCompany(info: GraphQLResolveInfo, adminId: string, companyId) {
    return this.data.company.delete({ where: { id: companyId } })
  }
}
