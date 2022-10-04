import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateCompanyMemberInput } from './dto/admin-create-company-member.input'
import { AdminListCompanyMemberInput } from './dto/admin-list-company-member.input'
import { AdminUpdateCompanyMemberInput } from './dto/admin-update-company-member.input'

@Injectable()
export class ApiCompanyMemberDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['location']
  private where(input: AdminListCompanyMemberInput): Prisma.CompanyMemberWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for company-member
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

  leaderCompanyMembers(info: GraphQLResolveInfo, leaderId: string, input?: AdminListCompanyMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.companyMember.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountCompanyMembers(leaderId: string, input?: AdminListCompanyMemberInput): Promise<CorePaging> {
    const total = await this.data.companyMember.count()
    const count = await this.data.companyMember.count({ where: this.where(input) })
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

  leaderCompanyMember(info: GraphQLResolveInfo, leaderId: string, companyMemberId) {
    const select = new PrismaSelect(info).value
    return this.data.companyMember.findUnique({ where: { id: companyMemberId }, ...select })
  }

  leaderCreateCompanyMember(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateCompanyMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.companyMember.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateCompanyMember(
    info: GraphQLResolveInfo,
    leaderId: string,
    companyMemberId,
    input: AdminUpdateCompanyMemberInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.companyMember.update({
      where: { id: companyMemberId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteCompanyMember(info: GraphQLResolveInfo, leaderId: string, companyMemberId) {
    return this.data.companyMember.delete({ where: { companyId_memberId: companyMemberId } })
  }
}
