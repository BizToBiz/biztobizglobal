import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateAttendanceReminderInput } from './dto/user-create-attendance-reminder.input'
import { UserListAttendanceReminderInput } from './dto/user-list-attendance-reminder.input'
import { UserUpdateAttendanceReminderInput } from './dto/user-update-attendance-reminder.input'

@Injectable()
export class ApiAttendanceReminderDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

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
    return {
      take: input?.take,
      skip: input?.skip,
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
      data: { name: input.name },
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
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteAttendanceReminder(info: GraphQLResolveInfo, userId: string, attendanceReminderId) {
    return this.data.attendanceReminder.delete({ where: { id: attendanceReminderId } })
  }
}
