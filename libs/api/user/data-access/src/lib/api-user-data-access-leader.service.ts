import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'
import { AdminCreateUserInput } from './dto/admin-create-user.input'
import { AdminUpdateUserInput } from './dto/admin-update-user.input'
import { ListUserInput } from './dto/list-user.input'
import { ChapterMemberRole, UserStatus } from '@biztobiz/api/enums/data-access'

@Injectable()
export class ApiUserDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private async leaderChapters(leaderId: string): Promise<string[]> {
    const chapters = await this.data.chapter.findMany({
      where: {
        OR: [
          {
            members: {
              some: {
                OR: [
                  { memberId: leaderId, role: ChapterMemberRole.President },
                  { memberId: leaderId, role: ChapterMemberRole.VicePresident },
                  { memberId: leaderId, role: ChapterMemberRole.Chairman },
                ],
              },
            },
          },
          {
            region: { manager: { id: leaderId } },
          },
          {
            region: { territory: { manager: { id: leaderId } } },
          },
        ],
      },
    })
    return chapters.map((chapter) => chapter.id)
  }

  private readonly searchFields = ['firstName', 'lastName', 'email']
  private async where(input: ListUserInput, leaderId?: string): Promise<Prisma.UserWhereInput> {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]
    const leaderChapters = leaderId ? await this.leaderChapters(leaderId) : null

    // TODO: implement leader search query
    function leaderSearch() {
      return { chapter: { chapterId: { in: leaderChapters } }, status: UserStatus.Active }
    }

    function relationalSearch() {
      // TODO: implement relational search for user
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
        leaderId ? leaderSearch() : null,
        ...terms.map((term) => ({
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

  async leaderUsers(info: GraphQLResolveInfo, leaderId: string, input?: ListUserInput) {
    const select = new PrismaSelect(info).value

    return this.data.user.findMany({
      take: input?.take ?? 10,
      skip: input?.skip ?? 0,
      where: this.where(input),
      ...select,
    })
  }

  async leaderChapterUsers(info: GraphQLResolveInfo, leaderId: string, input?: ListUserInput) {
    const select = new PrismaSelect(info).value

    return this.data.user.findMany({
      take: input?.take ?? 10,
      skip: input?.skip ?? 0,
      where: await this.where(input, leaderId),
      ...select,
    })
  }

  async leaderCountUsers(leaderId: string, input?: ListUserInput): Promise<CorePaging> {
    const total = await this.data.user.count()
    const count = await this.data.user.count({ where: await this.where(input) })
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

  async leaderChapterCountUsers(leaderId: string, input?: ListUserInput): Promise<CorePaging> {
    const total = await this.data.user.count()
    const count = await this.data.user.count({ where: await this.where(input, leaderId) })
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

  leaderUser(info: GraphQLResolveInfo, leaderId: string, userId) {
    const select = new PrismaSelect(info).value
    return this.data.user.findUnique({ where: { id: userId }, ...select })
  }

  leaderCreateUser(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateUserInput) {
    const select = new PrismaSelect(info).value
    return this.data.user.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateUser(info: GraphQLResolveInfo, leaderId: string, userId, input: AdminUpdateUserInput) {
    const select = new PrismaSelect(info).value
    return this.data.user.update({
      where: { id: userId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteUser(info: GraphQLResolveInfo, leaderId: string, userId) {
    return this.data.user.delete({ where: { id: userId } })
  }
}
