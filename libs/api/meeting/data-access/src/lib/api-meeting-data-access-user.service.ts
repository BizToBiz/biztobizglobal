import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateMeetingInput } from './dto/user-create-meeting.input'
import { UserListMeetingInput } from './dto/user-list-meeting.input'
import { UserUpdateMeetingInput } from './dto/user-update-meeting.input'

@Injectable()
export class ApiMeetingDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: UserListMeetingInput): Prisma.MeetingWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for meeting
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
    const count = await this.data.meeting.count({ where: this.where(input) })
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

  userMeeting(info: GraphQLResolveInfo, userId: string, meetingId) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.findUnique({ where: { id: meetingId }, ...select })
  }

  userCreateMeeting(info: GraphQLResolveInfo, userId: string, input: UserCreateMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateMeeting(info: GraphQLResolveInfo, userId: string, meetingId, input: UserUpdateMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.update({
      where: { id: meetingId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteMeeting(info: GraphQLResolveInfo, userId: string, meetingId) {
    return this.data.meeting.delete({ where: { id: meetingId } })
  }
}
