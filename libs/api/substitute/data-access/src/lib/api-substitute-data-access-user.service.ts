import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateSubstituteInput } from './dto/user-create-substitute.input'
import { UserListSubstituteInput } from './dto/user-list-substitute.input'
import { UserUpdateSubstituteInput } from './dto/user-update-substitute.input'

@Injectable()
export class ApiSubstituteDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: UserListSubstituteInput): Prisma.SubstituteWhereInput {
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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

  userSubstitutes(info: GraphQLResolveInfo, userId: string, input?: UserListSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountSubstitutes(userId: string, input?: UserListSubstituteInput): Promise<CorePaging> {
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

  userSubstitute(info: GraphQLResolveInfo, userId: string, substituteId) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.findUnique({ where: { id: substituteId }, ...select })
  }

  userCreateSubstitute(info: GraphQLResolveInfo, userId: string, input: UserCreateSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateSubstitute(info: GraphQLResolveInfo, userId: string, substituteId, input: UserUpdateSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.update({
      where: { id: substituteId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteSubstitute(info: GraphQLResolveInfo, userId: string, substituteId) {
    return this.data.substitute.delete({ where: { id: substituteId } })
  }
}
