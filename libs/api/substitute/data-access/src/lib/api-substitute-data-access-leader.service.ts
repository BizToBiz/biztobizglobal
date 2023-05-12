import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateSubstituteInput } from './dto/admin-create-substitute.input'
import { AdminListSubstituteInput } from './dto/admin-list-substitute.input'
import { AdminUpdateSubstituteInput } from './dto/admin-update-substitute.input'

@Injectable()
export class ApiSubstituteDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: AdminListSubstituteInput): Prisma.SubstituteWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for substitute
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

  leaderSubstitutes(info: GraphQLResolveInfo, leaderId: string, input?: AdminListSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountSubstitutes(leaderId: string, input?: AdminListSubstituteInput): Promise<CorePaging> {
    const total = await this.data.substitute.count()
    const count = await this.data.substitute.count({ where: this.where(input) })
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

  leaderSubstitute(info: GraphQLResolveInfo, leaderId: string, substituteId) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.findUnique({ where: { id: substituteId }, ...select })
  }

  leaderCreateSubstitute(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateSubstitute(info: GraphQLResolveInfo, leaderId: string, substituteId, input: AdminUpdateSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.update({
      where: { id: substituteId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteSubstitute(info: GraphQLResolveInfo, leaderId: string, substituteId) {
    return this.data.substitute.delete({ where: { id: substituteId } })
  }
}
