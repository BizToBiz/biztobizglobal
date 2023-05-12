import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateCompanyMemberInput } from './dto/user-create-company-member.input'
import { UserListCompanyMemberInput } from './dto/user-list-company-member.input'
import { UserUpdateCompanyMemberInput } from './dto/user-update-company-member.input'

@Injectable()
export class ApiCompanyMemberDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['location']
  private where(input: UserListCompanyMemberInput): Prisma.CompanyMemberWhereInput {
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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: Prisma.QueryMode.insensitive } })),
        })),
      ],
    }
  }

  userCompanyMembers(info: GraphQLResolveInfo, userId: string, input?: UserListCompanyMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.companyMember.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountCompanyMembers(userId: string, input?: UserListCompanyMemberInput): Promise<CorePaging> {
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

  userCompanyMember(info: GraphQLResolveInfo, userId: string, companyMemberId) {
    const select = new PrismaSelect(info).value
    return this.data.companyMember.findUnique({ where: { id: companyMemberId }, ...select })
  }

  userCreateCompanyMember(info: GraphQLResolveInfo, userId: string, input: UserCreateCompanyMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.companyMember.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateCompanyMember(
    info: GraphQLResolveInfo,
    userId: string,
    companyMemberId,
    input: UserUpdateCompanyMemberInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.companyMember.update({
      where: { id: companyMemberId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteCompanyMember(info: GraphQLResolveInfo, userId: string, companyMemberId) {
    return this.data.companyMember.delete({ where: { companyId_memberId: companyMemberId } })
  }
}
