import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateMeetingInput } from './dto/admin-create-meeting.input'
import { AdminListMeetingInput } from './dto/admin-list-meeting.input'
import { AdminUpdateMeetingInput } from './dto/admin-update-meeting.input'

@Injectable()
export class ApiMeetingDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: AdminListMeetingInput): Prisma.MeetingWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    function relationalSearch() {
      // TODO: implement relational search for meeting
      // if (input?.regionId) {
      //   return { regionId: input.regionId }
      // }
      // if (input?.memberId) {
      //   return { members: { some: { id: input.memberId } } }
      // }
      if (input?.chapterId) {
        return { chapter: { id: input.chapterId } }
      }
      return null
    }
    return {
      AND: [relationalSearch(), { OR: [...terms.map((term) => ({ chapter: { name: { contains: term } } }))] }],
    }
  }

  adminMeetings(info: GraphQLResolveInfo, adminId: string, input?: AdminListMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.findMany({
      take: input?.take,
      skip: input?.skip,
      orderBy: input?.orderBy ?? { date: 'desc' },
      where: this.where(input),
      ...select,
    })
  }

  async adminCountMeetings(adminId: string, input?: AdminListMeetingInput): Promise<CorePaging> {
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

  adminMeeting(info: GraphQLResolveInfo, adminId: string, meetingId) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.findUnique({ where: { id: meetingId }, ...select })
  }

  adminCreateMeeting(info: GraphQLResolveInfo, adminId: string, input: AdminCreateMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.create({
      data: { ...input, substitutes: { connect: input.substitutes } },
      ...select,
    })
  }

  adminUpdateMeeting(info: GraphQLResolveInfo, adminId: string, meetingId, input: AdminUpdateMeetingInput) {
    const select = new PrismaSelect(info).value
    return this.data.meeting.update({
      where: { id: meetingId },
      data: { ...input, substitutes: { set: input.substitutes } },
      ...select,
    })
  }

  adminDeleteMeeting(info: GraphQLResolveInfo, adminId: string, meetingId) {
    return this.data.meeting.delete({ where: { id: meetingId } })
  }
}
