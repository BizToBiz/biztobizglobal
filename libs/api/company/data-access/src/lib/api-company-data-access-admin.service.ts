import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateCompanyInput } from './dto/admin-create-company.input'
import { AdminListCompanyInput } from './dto/admin-list-company.input'
import { AdminUpdateCompanyInput } from './dto/admin-update-company.input'

@Injectable()
export class ApiCompanyDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: AdminListCompanyInput): Prisma.CompanyWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

  adminCompanies(info: GraphQLResolveInfo, adminId: string, input?: AdminListCompanyInput) {
    const select = new PrismaSelect(info).value
    return this.data.company.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountCompanies(adminId: string, input?: AdminListCompanyInput): Promise<CorePaging> {
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

  adminCompany(info: GraphQLResolveInfo, adminId: string, companyId) {
    const select = new PrismaSelect(info).value
    return this.data.company.findUnique({ where: { id: companyId }, ...select })
  }

  adminCreateCompany(info: GraphQLResolveInfo, adminId: string, input: AdminCreateCompanyInput) {
    const select = new PrismaSelect(info).value
    return this.data.company.create({
      data: { ...input },
      ...select,
    })
  }

  adminUpdateCompany(info: GraphQLResolveInfo, adminId: string, companyId, input: AdminUpdateCompanyInput) {
    const select = new PrismaSelect(info).value
    return this.data.company.update({
      where: { id: companyId },
      data: { ...input },
      ...select,
    })
  }

  adminDeleteCompany(info: GraphQLResolveInfo, adminId: string, companyId) {
    return this.data.company.delete({ where: { id: companyId } })
  }
}
