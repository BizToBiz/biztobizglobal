import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateMeetingPresenceInput } from './dto/admin-create-meeting-presence.input'
import { AdminListMeetingPresenceInput } from './dto/admin-list-meeting-presence.input'
import { AdminUpdateMeetingPresenceInput } from './dto/admin-update-meeting-presence.input'

@Injectable()
export class ApiMeetingPresenceDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: AdminListMeetingPresenceInput): Prisma.MeetingPresenceWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    function relationalSearch() {
      // TODO: implement relational search for meeting-presence
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

  adminMeetingPresences(info: GraphQLResolveInfo, adminId: string, input?: AdminListMeetingPresenceInput) {
    const select = new PrismaSelect(info).value
    return this.data.meetingPresence.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountMeetingPresences(adminId: string, input?: AdminListMeetingPresenceInput): Promise<CorePaging> {
    const total = await this.data.meetingPresence.count()
    const count = await this.data.meetingPresence.count({ where: this.where(input) })
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

  adminMeetingPresence(info: GraphQLResolveInfo, adminId: string, meetingPresenceId) {
    const select = new PrismaSelect(info).value
    return this.data.meetingPresence.findUnique({ where: { id: meetingPresenceId }, ...select })
  }

  adminCreateMeetingPresence(info: GraphQLResolveInfo, adminId: string, input: AdminCreateMeetingPresenceInput) {
    const select = new PrismaSelect(info).value
    return this.data.meetingPresence.create({
      data: { ...input },
      ...select,
    })
  }

  adminUpdateMeetingPresence(
    info: GraphQLResolveInfo,
    adminId: string,
    meetingPresenceId,
    input: AdminUpdateMeetingPresenceInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.meetingPresence.update({
      where: { id: meetingPresenceId },
      data: { ...input },
      ...select,
    })
  }

  adminDeleteMeetingPresence(info: GraphQLResolveInfo, adminId: string, meetingPresenceId) {
    return this.data.meetingPresence.delete({ where: { id: meetingPresenceId } })
  }
}
