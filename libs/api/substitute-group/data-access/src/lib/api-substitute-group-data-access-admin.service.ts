import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateSubstituteGroupInput } from './dto/admin-create-substitute-group.input'
import { AdminListSubstituteGroupInput } from './dto/admin-list-substitute-group.input'
import { AdminUpdateSubstituteGroupInput } from './dto/admin-update-substitute-group.input'

@Injectable()
export class ApiSubstituteGroupDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: AdminListSubstituteGroupInput): Prisma.SubstituteGroupWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

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

  adminSubstituteGroups(info: GraphQLResolveInfo, adminId: string, input?: AdminListSubstituteGroupInput) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.findMany({
      take: input?.take,
      skip: input?.skip,
      where: this.where(input),
      ...select,
    })
  }

  async adminCountSubstituteGroups(adminId: string, input?: AdminListSubstituteGroupInput): Promise<CorePaging> {
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

  adminSubstituteGroup(info: GraphQLResolveInfo, adminId: string, substituteGroupId) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.findUnique({ where: { id: substituteGroupId }, ...select })
  }

  adminCreateSubstituteGroup(info: GraphQLResolveInfo, adminId: string, input: AdminCreateSubstituteGroupInput) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.create({
      data: { ...input, chapters: { connect: input.chapters } },
      ...select,
    })
  }

  adminUpdateSubstituteGroup(
    info: GraphQLResolveInfo,
    adminId: string,
    substituteGroupId,
    input: AdminUpdateSubstituteGroupInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.update({
      where: { id: substituteGroupId },
      data: { ...input, chapters: { set: input.chapters } },
      ...select,
    })
  }

  adminDeleteSubstituteGroup(info: GraphQLResolveInfo, adminId: string, substituteGroupId) {
    return this.data.substituteGroup.delete({ where: { id: substituteGroupId } })
  }
}
