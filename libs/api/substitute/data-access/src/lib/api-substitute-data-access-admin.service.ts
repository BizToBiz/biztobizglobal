import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateSubstituteInput } from './dto/admin-create-substitute.input'
import { AdminListSubstituteInput } from './dto/admin-list-substitute.input'
import { AdminUpdateSubstituteInput } from './dto/admin-update-substitute.input'

@Injectable()
export class ApiSubstituteDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['id']
  private where(input: AdminListSubstituteInput): Prisma.SubstituteWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

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

  adminSubstitutes(info: GraphQLResolveInfo, adminId: string, input?: AdminListSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.findMany({
      take: input?.take,
      skip: input?.skip,
      where: this.where(input),
      ...select,
    })
  }

  async adminCountSubstitutes(adminId: string, input?: AdminListSubstituteInput): Promise<CorePaging> {
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

  adminSubstitute(info: GraphQLResolveInfo, adminId: string, substituteId) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.findUnique({ where: { id: substituteId }, ...select })
  }

  adminCreateSubstitute(info: GraphQLResolveInfo, adminId: string, input: AdminCreateSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.create({
      data: { ...input, invited: { connect: input.invited } },
      ...select,
    })
  }

  adminUpdateSubstitute(info: GraphQLResolveInfo, adminId: string, substituteId, input: AdminUpdateSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.update({
      where: { id: substituteId },
      data: { ...input, invited: { set: input.invited } },
      ...select,
    })
  }

  adminDeleteSubstitute(info: GraphQLResolveInfo, adminId: string, substituteId) {
    return this.data.substitute.delete({ where: { id: substituteId } })
  }
}
