import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateIndustryInput } from './dto/admin-create-industry.input'
import { AdminListIndustryInput } from './dto/admin-list-industry.input'
import { AdminUpdateIndustryInput } from './dto/admin-update-industry.input'

@Injectable()
export class ApiIndustryDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: AdminListIndustryInput): Prisma.IndustryWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

  adminIndustries(info: GraphQLResolveInfo, adminId: string, input?: AdminListIndustryInput) {
    const select = new PrismaSelect(info).value
    return this.data.industry.findMany({
      take: input?.take,
      skip: input?.skip,
      where: this.where(input),
      ...select,
    })
  }

  async adminCountIndustries(adminId: string, input?: AdminListIndustryInput): Promise<CorePaging> {
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

  adminIndustry(info: GraphQLResolveInfo, adminId: string, industryId) {
    const select = new PrismaSelect(info).value
    return this.data.industry.findUnique({ where: { id: industryId }, ...select })
  }

  adminCreateIndustry(info: GraphQLResolveInfo, adminId: string, input: AdminCreateIndustryInput) {
    const select = new PrismaSelect(info).value
    return this.data.industry.create({
      data: { ...input },
      ...select,
    })
  }

  adminUpdateIndustry(info: GraphQLResolveInfo, adminId: string, industryId, input: AdminUpdateIndustryInput) {
    const select = new PrismaSelect(info).value
    return this.data.industry.update({
      where: { id: industryId },
      data: { ...input },
      ...select,
    })
  }

  adminDeleteIndustry(info: GraphQLResolveInfo, adminId: string, industryId) {
    return this.data.industry.delete({ where: { id: industryId } })
  }
}
