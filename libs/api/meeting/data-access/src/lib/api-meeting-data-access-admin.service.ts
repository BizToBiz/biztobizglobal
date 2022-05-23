import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { AdminCreateMeetingInput } from './dto/admin-create-meeting.input'
import { AdminListMeetingInput } from './dto/admin-list-meeting.input'
import { AdminUpdateMeetingInput } from './dto/admin-update-meeting.input'

@Injectable()
export class ApiMeetingDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminMeetings(info: GraphQLResolveInfo, adminId: string, input?: AdminListMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountMeetings(adminId: string, input?: AdminListMeetingInput): Promise<CorePaging> {
    const total = await this.data.meeting.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  adminMeeting(info: GraphQLResolveInfo, adminId: string, meetingId) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.findUnique({ where: { id: meetingId }, ...select })
  }

  adminCreateMeeting(info: GraphQLResolveInfo, adminId: string, input: AdminCreateMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.create({
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateMeeting(info: GraphQLResolveInfo, adminId: string, meetingId, input: AdminUpdateMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.update({
      where: { id: meetingId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteMeeting(info: GraphQLResolveInfo, adminId: string, meetingId) {
    return this.data.meeting.delete({ where: { id: meetingId } })
  }
}
