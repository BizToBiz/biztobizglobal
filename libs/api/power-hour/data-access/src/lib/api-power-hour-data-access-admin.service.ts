import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreatePowerHourInput } from './dto/admin-create-power-hour.input'
import { AdminListPowerHourInput } from './dto/admin-list-power-hour.input'
import { AdminUpdatePowerHourInput } from './dto/admin-update-power-hour.input'

@Injectable()
export class ApiPowerHourDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['details']
  private where(input: AdminListPowerHourInput): Prisma.PowerHourWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    function relationalSearch() {
      // TODO: implement relational search for power-hour
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
    const count = await this.data.powerHour.count({ where: this.where(input) })
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

  adminPowerHour(info: GraphQLResolveInfo, adminId: string, powerHourId) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.findUnique({ where: { id: powerHourId }, ...select })
  }

  adminCreatePowerHour(info: GraphQLResolveInfo, adminId: string, input: AdminCreatePowerHourInput) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.create({
      data: { ...input },
      ...select,
    })
  }

  adminUpdatePowerHour(info: GraphQLResolveInfo, adminId: string, powerHourId, input: AdminUpdatePowerHourInput) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.update({
      where: { id: powerHourId },
      data: { ...input },
      ...select,
    })
  }

  adminDeletePowerHour(info: GraphQLResolveInfo, adminId: string, powerHourId) {
    return this.data.powerHour.delete({ where: { id: powerHourId } })
  }
}
