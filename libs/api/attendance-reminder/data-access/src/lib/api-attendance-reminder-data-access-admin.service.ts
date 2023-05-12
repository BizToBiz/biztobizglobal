import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateAttendanceReminderInput } from './dto/admin-create-attendance-reminder.input'
import { AdminListAttendanceReminderInput } from './dto/admin-list-attendance-reminder.input'
import { AdminUpdateAttendanceReminderInput } from './dto/admin-update-attendance-reminder.input'

@Injectable()
export class ApiAttendanceReminderDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: AdminListAttendanceReminderInput): Prisma.AttendanceReminderWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

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
          OR: [
            { chapter: { name: { contains: term, mode: Prisma.QueryMode.insensitive } } },
            { sentBy: { firstName: { contains: term, mode: Prisma.QueryMode.insensitive } } },
            { sentBy: { lastName: { contains: term, mode: Prisma.QueryMode.insensitive } } },
            { sentTo: { firstName: { contains: term, mode: Prisma.QueryMode.insensitive } } },
            { sentTo: { lastName: { contains: term, mode: Prisma.QueryMode.insensitive } } },
          ],
        })),
      ],
    }
  }

  adminAttendanceReminders(info: GraphQLResolveInfo, adminId: string, input?: AdminListAttendanceReminderInput) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.findMany({
      take: input?.take,
      skip: input?.skip,
      where: this.where(input),
      ...select,
    })
  }

  async adminCountAttendanceReminders(adminId: string, input?: AdminListAttendanceReminderInput): Promise<CorePaging> {
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

  adminAttendanceReminder(info: GraphQLResolveInfo, adminId: string, attendanceReminderId) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.findUnique({ where: { id: attendanceReminderId }, ...select })
  }

  adminCreateAttendanceReminder(info: GraphQLResolveInfo, adminId: string, input: AdminCreateAttendanceReminderInput) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.create({
      data: { ...input },
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
      data: { ...input },
      ...select,
    })
  }

  adminDeleteAttendanceReminder(info: GraphQLResolveInfo, adminId: string, attendanceReminderId) {
    return this.data.attendanceReminder.delete({ where: { id: attendanceReminderId } })
  }
}
