import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreatePowerHourInput } from './dto/user-create-power-hour.input'
import { UserListPowerHourInput } from './dto/user-list-power-hour.input'
import { UserUpdatePowerHourInput } from './dto/user-update-power-hour.input'

@Injectable()
export class ApiPowerHourDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['details']
  private where(input: UserListPowerHourInput): Prisma.PowerHourWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: Prisma.QueryMode.insensitive } })),
        })),
      ],
    }
  }

  userPowerHours(info: GraphQLResolveInfo, userId: string, input?: UserListPowerHourInput) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountPowerHours(userId: string, input?: UserListPowerHourInput): Promise<CorePaging> {
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

  userPowerHour(info: GraphQLResolveInfo, userId: string, powerHourId) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.findUnique({ where: { id: powerHourId }, ...select })
  }

  userCreatePowerHour(info: GraphQLResolveInfo, userId: string, input: UserCreatePowerHourInput) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdatePowerHour(info: GraphQLResolveInfo, userId: string, powerHourId, input: UserUpdatePowerHourInput) {
    const select = new PrismaSelect(info).value
    return this.data.powerHour.update({
      where: { id: powerHourId },
      data: { ...input },
      ...select,
    })
  }

  userDeletePowerHour(info: GraphQLResolveInfo, userId: string, powerHourId) {
    return this.data.powerHour.delete({ where: { id: powerHourId } })
  }
}
