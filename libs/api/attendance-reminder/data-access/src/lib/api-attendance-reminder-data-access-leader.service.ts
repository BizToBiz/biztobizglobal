import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateAttendanceReminderInput } from './dto/admin-create-attendance-reminder.input'
import { AdminListAttendanceReminderInput } from './dto/admin-list-attendance-reminder.input'
import { AdminUpdateAttendanceReminderInput } from './dto/admin-update-attendance-reminder.input'

@Injectable()
export class ApiAttendanceReminderDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: AdminListAttendanceReminderInput): Prisma.AttendanceReminderWhereInput {
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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

  leaderAttendanceReminders(info: GraphQLResolveInfo, leaderId: string, input?: AdminListAttendanceReminderInput) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountAttendanceReminders(
    leaderId: string,
    input?: AdminListAttendanceReminderInput,
  ): Promise<CorePaging> {
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

  leaderAttendanceReminder(info: GraphQLResolveInfo, leaderId: string, attendanceReminderId) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.findUnique({ where: { id: attendanceReminderId }, ...select })
  }

  leaderCreateAttendanceReminder(
    info: GraphQLResolveInfo,
    leaderId: string,
    input: AdminCreateAttendanceReminderInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.attendanceReminder.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateAttendanceReminder(
    info: GraphQLResolveInfo,
    leaderId: string,
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

  leaderDeleteAttendanceReminder(info: GraphQLResolveInfo, leaderId: string, attendanceReminderId) {
    return this.data.attendanceReminder.delete({ where: { id: attendanceReminderId } })
  }
}
