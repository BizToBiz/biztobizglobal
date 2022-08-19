import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateSubstituteInput } from './dto/admin-create-substitute.input'
import { AdminListSubstituteInput } from './dto/admin-list-substitute.input'
import { AdminUpdateSubstituteInput } from './dto/admin-update-substitute.input'

@Injectable()
export class ApiSubstituteDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminSubstitutes(info: GraphQLResolveInfo, adminId: string, input?: AdminListSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountSubstitutes(adminId: string, input?: AdminListSubstituteInput): Promise<CorePaging> {
    const total = await this.data.substitute.count()
    return {
      take: input?.take,
      skip: input?.skip,
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
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateSubstitute(info: GraphQLResolveInfo, adminId: string, substituteId, input: AdminUpdateSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.update({
      where: { id: substituteId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteSubstitute(info: GraphQLResolveInfo, adminId: string, substituteId) {
    return this.data.substitute.delete({ where: { id: substituteId } })
  }
}
