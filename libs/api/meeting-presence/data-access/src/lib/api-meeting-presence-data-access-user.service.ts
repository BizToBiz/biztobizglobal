import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateMeetingPresenceInput } from './dto/user-create-meeting-presence.input'
import { UserListMeetingPresenceInput } from './dto/user-list-meeting-presence.input'
import { UserUpdateMeetingPresenceInput } from './dto/user-update-meeting-presence.input'

@Injectable()
export class ApiMeetingPresenceDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: UserListMeetingPresenceInput): Prisma.MeetingPresenceWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: Prisma.QueryMode.insensitive } })),
        })),
      ],
    }
  }

  userMeetingPresences(info: GraphQLResolveInfo, userId: string, input?: UserListMeetingPresenceInput) {
    const select = new PrismaSelect(info).value
    return this.data.meetingPresence.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountMeetingPresences(userId: string, input?: UserListMeetingPresenceInput): Promise<CorePaging> {
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

  userMeetingPresence(info: GraphQLResolveInfo, userId: string, meetingPresenceId) {
    const select = new PrismaSelect(info).value
    return this.data.meetingPresence.findUnique({ where: { id: meetingPresenceId }, ...select })
  }

  userCreateMeetingPresence(info: GraphQLResolveInfo, userId: string, input: UserCreateMeetingPresenceInput) {
    const select = new PrismaSelect(info).value
    return this.data.meetingPresence.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateMeetingPresence(
    info: GraphQLResolveInfo,
    userId: string,
    meetingPresenceId,
    input: UserUpdateMeetingPresenceInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.meetingPresence.update({
      where: { id: meetingPresenceId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteMeetingPresence(info: GraphQLResolveInfo, userId: string, meetingPresenceId) {
    return this.data.meetingPresence.delete({ where: { id: meetingPresenceId } })
  }
}
