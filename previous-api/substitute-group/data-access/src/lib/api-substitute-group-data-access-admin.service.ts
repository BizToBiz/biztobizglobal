import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateSubstituteGroupInput } from './dto/admin-create-substitute-group.input'
import { AdminListSubstituteGroupInput } from './dto/admin-list-substitute-group.input'
import { AdminUpdateSubstituteGroupInput } from './dto/admin-update-substitute-group.input'

@Injectable()
export class ApiSubstituteGroupDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminSubstituteGroups(info: GraphQLResolveInfo, adminId: string, input?: AdminListSubstituteGroupInput) {
    const select = new PrismaSelect(info).value
    return this.data.substituteGroup.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountSubstituteGroups(adminId: string, input?: AdminListSubstituteGroupInput): Promise<CorePaging> {
    const total = await this.data.substituteGroup.count()
    return {
      take: input?.take,
      skip: input?.skip,
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
      data: { name: input.name },
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
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteSubstituteGroup(info: GraphQLResolveInfo, adminId: string, substituteGroupId) {
    return this.data.substituteGroup.delete({ where: { id: substituteGroupId } })
  }
}
