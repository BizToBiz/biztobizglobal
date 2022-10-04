import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateAttendanceReminderInput } from './dto/admin-create-attendance-reminder.input'
import { AdminListAttendanceReminderInput } from './dto/admin-list-attendance-reminder.input'
import { AdminUpdateAttendanceReminderInput } from './dto/admin-update-attendance-reminder.input'

@Injectable()
export class ApiAttendanceReminderDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminAttendanceReminders(info: GraphQLResolveInfo, adminId: string, input?: AdminListAttendanceReminderInput) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountAttendanceReminders(adminId: string, input?: AdminListAttendanceReminderInput): Promise<CorePaging> {
    const total = await this.data.attendanceReminder.count()
    return {
      take: input?.take,
      skip: input?.skip,
      total,
    }
  }

  adminAttendanceReminder(info: GraphQLResolveInfo, adminId: string, attendanceReminderId) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.findUnique({ where: { id: attendanceReminderId }, ...select })
  }

  adminCreateAttendanceReminder(info: GraphQLResolveInfo, adminId: string, input: AdminCreateAttendanceReminderInput) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.create({
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateAttendanceReminder(
    info: GraphQLResolveInfo,
    adminId: string,
    attendanceReminderId,
    input: AdminUpdateAttendanceReminderInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.update({
      where: { id: attendanceReminderId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteAttendanceReminder(info: GraphQLResolveInfo, adminId: string, attendanceReminderId) {
    return this.data.attendanceReminder.delete({ where: { id: attendanceReminderId } })
  }
}
