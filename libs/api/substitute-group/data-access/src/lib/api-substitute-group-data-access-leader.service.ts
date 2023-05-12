import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateSubstituteGroupInput } from './dto/admin-create-substitute-group.input'
import { AdminListSubstituteGroupInput } from './dto/admin-list-substitute-group.input'
import { AdminUpdateSubstituteGroupInput } from './dto/admin-update-substitute-group.input'

@Injectable()
export class ApiSubstituteGroupDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: AdminListSubstituteGroupInput): Prisma.SubstituteGroupWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for substitute-group
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

  leaderSubstituteGroups(info: GraphQLResolveInfo, leaderId: string, input?: AdminListSubstituteGroupInput) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountSubstituteGroups(leaderId: string, input?: AdminListSubstituteGroupInput): Promise<CorePaging> {
    const total = await this.data.substituteGroup.count()
    const count = await this.data.substituteGroup.count({ where: this.where(input) })
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

  leaderSubstituteGroup(info: GraphQLResolveInfo, leaderId: string, substituteGroupId) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.findUnique({ where: { id: substituteGroupId }, ...select })
  }

  leaderCreateSubstituteGroup(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateSubstituteGroupInput) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateSubstituteGroup(
    info: GraphQLResolveInfo,
    leaderId: string,
    substituteGroupId,
    input: AdminUpdateSubstituteGroupInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.update({
      where: { id: substituteGroupId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteSubstituteGroup(info: GraphQLResolveInfo, leaderId: string, substituteGroupId) {
    return this.data.substituteGroup.delete({ where: { id: substituteGroupId } })
  }
}
