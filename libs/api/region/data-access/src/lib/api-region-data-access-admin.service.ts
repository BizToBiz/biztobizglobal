import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { AdminCreateRegionInput } from './dto/admin-create-region.input'
import { AdminListRegionInput } from './dto/admin-list-region.input'
import { AdminUpdateRegionInput } from './dto/admin-update-region.input'

@Injectable()
export class ApiRegionDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminRegions(info: GraphQLResolveInfo, adminId: string, input?: AdminListRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountRegions(adminId: string, input?: AdminListRegionInput): Promise<CorePaging> {
    const total = await this.data.region.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  adminRegion(info: GraphQLResolveInfo, adminId: string, regionId) {
    const select = new PrismaSelect(info).value
    return this.data.region.findUnique({ where: { id: regionId }, ...select })
  }

  adminCreateRegion(info: GraphQLResolveInfo, adminId: string, input: AdminCreateRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.create({
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateRegion(info: GraphQLResolveInfo, adminId: string, regionId, input: AdminUpdateRegionInput) {
    const select = new PrismaSelect(info).value
    return this.data.region.update({
      where: { id: regionId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteRegion(info: GraphQLResolveInfo, adminId: string, regionId) {
    return this.data.region.delete({ where: { id: regionId } })
  }
}
