import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { UserCreatePowerHourInput } from './dto/user-create-power-hour.input'
import { UserListPowerHourInput } from './dto/user-list-power-hour.input'
import { UserUpdatePowerHourInput } from './dto/user-update-power-hour.input'

@Injectable()
export class ApiPowerHourDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userPowerHours(info: GraphQLResolveInfo, userId: string, input?: UserListPowerHourInput) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountPowerHours(userId: string, input?: UserListPowerHourInput): Promise<CorePaging> {
    const total = await this.data.powerHour.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  userPowerHour(info: GraphQLResolveInfo, userId: string, powerHourId) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.findUnique({ where: { id: powerHourId }, ...select })
  }

  userCreatePowerHour(info: GraphQLResolveInfo, userId: string, input: UserCreatePowerHourInput) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.create({
      data: { name: input.name },
      ...select,
    })
  }

  userUpdatePowerHour(info: GraphQLResolveInfo, userId: string, powerHourId, input: UserUpdatePowerHourInput) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.update({
      where: { id: powerHourId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeletePowerHour(info: GraphQLResolveInfo, userId: string, powerHourId) {
    return this.data.powerHour.delete({ where: { id: powerHourId } })
  }
}
