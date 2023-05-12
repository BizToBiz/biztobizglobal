import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateAttendanceReminderInput } from './dto/user-create-attendance-reminder.input'
import { UserListAttendanceReminderInput } from './dto/user-list-attendance-reminder.input'
import { UserUpdateAttendanceReminderInput } from './dto/user-update-attendance-reminder.input'

@Injectable()
export class ApiAttendanceReminderDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: UserListAttendanceReminderInput): Prisma.AttendanceReminderWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for attendance-reminder
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

  userAttendanceReminders(info: GraphQLResolveInfo, userId: string, input?: UserListAttendanceReminderInput) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountAttendanceReminders(userId: string, input?: UserListAttendanceReminderInput): Promise<CorePaging> {
    const total = await this.data.attendanceReminder.count()
    const count = await this.data.attendanceReminder.count({ where: this.where(input) })
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

  userAttendanceReminder(info: GraphQLResolveInfo, userId: string, attendanceReminderId) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.findUnique({ where: { id: attendanceReminderId }, ...select })
  }

  userCreateAttendanceReminder(info: GraphQLResolveInfo, userId: string, input: UserCreateAttendanceReminderInput) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateAttendanceReminder(
    info: GraphQLResolveInfo,
    userId: string,
    attendanceReminderId,
    input: UserUpdateAttendanceReminderInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.update({
      where: { id: attendanceReminderId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteAttendanceReminder(info: GraphQLResolveInfo, userId: string, attendanceReminderId) {
    return this.data.attendanceReminder.delete({ where: { id: attendanceReminderId } })
  }
}
