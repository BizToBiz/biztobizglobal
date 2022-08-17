import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateMeetingInput } from './dto/admin-create-meeting.input'
import { AdminListMeetingInput } from './dto/admin-list-meeting.input'
import { AdminUpdateMeetingInput } from './dto/admin-update-meeting.input'

@Injectable()
export class ApiMeetingDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: AdminListMeetingInput): Prisma.MeetingWhereInput {
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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

  leaderMeetings(info: GraphQLResolveInfo, leaderId: string, input?: AdminListMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountMeetings(leaderId: string, input?: AdminListMeetingInput): Promise<CorePaging> {
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

  leaderMeeting(info: GraphQLResolveInfo, leaderId: string, meetingId) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.findUnique({ where: { id: meetingId }, ...select })
  }

  leaderCreateMeeting(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateMeeting(info: GraphQLResolveInfo, leaderId: string, meetingId, input: AdminUpdateMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.update({
      where: { id: meetingId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteMeeting(info: GraphQLResolveInfo, leaderId: string, meetingId) {
    return this.data.meeting.delete({ where: { id: meetingId } })
  }
}
