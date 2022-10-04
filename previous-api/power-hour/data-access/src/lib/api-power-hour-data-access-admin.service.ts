import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreatePowerHourInput } from './dto/admin-create-power-hour.input'
import { AdminListPowerHourInput } from './dto/admin-list-power-hour.input'
import { AdminUpdatePowerHourInput } from './dto/admin-update-power-hour.input'

@Injectable()
export class ApiPowerHourDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminPowerHours(info: GraphQLResolveInfo, adminId: string, input?: AdminListPowerHourInput) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountPowerHours(adminId: string, input?: AdminListPowerHourInput): Promise<CorePaging> {
    const total = await this.data.powerHour.count()
    return {
      take: input?.take,
      skip: input?.skip,
      total,
    }
  }

  adminPowerHour(info: GraphQLResolveInfo, adminId: string, powerHourId) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.findUnique({ where: { id: powerHourId }, ...select })
  }

  adminCreatePowerHour(info: GraphQLResolveInfo, adminId: string, input: AdminCreatePowerHourInput) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.create({
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdatePowerHour(info: GraphQLResolveInfo, adminId: string, powerHourId, input: AdminUpdatePowerHourInput) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.update({
      where: { id: powerHourId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeletePowerHour(info: GraphQLResolveInfo, adminId: string, powerHourId) {
    return this.data.powerHour.delete({ where: { id: powerHourId } })
  }
}
