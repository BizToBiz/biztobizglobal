import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateMeetingInput } from './dto/user-create-meeting.input'
import { UserListMeetingInput } from './dto/user-list-meeting.input'
import { UserUpdateMeetingInput } from './dto/user-update-meeting.input'

@Injectable()
export class ApiMeetingDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userMeetings(info: GraphQLResolveInfo, userId: string, input?: UserListMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountMeetings(userId: string, input?: UserListMeetingInput): Promise<CorePaging> {
    const total = await this.data.meeting.count()
    return {
      take: input?.take,
      skip: input?.skip,
      total,
    }
  }

  userMeeting(info: GraphQLResolveInfo, userId: string, meetingId) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.findUnique({ where: { id: meetingId }, ...select })
  }

  userCreateMeeting(info: GraphQLResolveInfo, userId: string, input: UserCreateMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.create({
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateMeeting(info: GraphQLResolveInfo, userId: string, meetingId, input: UserUpdateMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.update({
      where: { id: meetingId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteMeeting(info: GraphQLResolveInfo, userId: string, meetingId) {
    return this.data.meeting.delete({ where: { id: meetingId } })
  }
}
