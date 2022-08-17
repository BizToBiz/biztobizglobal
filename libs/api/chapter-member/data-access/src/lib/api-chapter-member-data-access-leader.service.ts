import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateChapterMemberInput } from './dto/admin-create-chapter-member.input'
import { AdminListChapterMemberInput } from './dto/admin-list-chapter-member.input'
import { AdminUpdateChapterMemberInput } from './dto/admin-update-chapter-member.input'

@Injectable()
export class ApiChapterMemberDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: AdminListChapterMemberInput): Prisma.ChapterMemberWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for chapter-member
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

  leaderChapterMembers(info: GraphQLResolveInfo, leaderId: string, input?: AdminListChapterMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountChapterMembers(leaderId: string, input?: AdminListChapterMemberInput): Promise<CorePaging> {
    const total = await this.data.chapterMember.count()
    const count = await this.data.chapterMember.count({ where: this.where(input) })
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

  leaderChapterMember(info: GraphQLResolveInfo, leaderId: string, chapterMemberId) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.findUnique({ where: { id: chapterMemberId }, ...select })
  }

  leaderCreateChapterMember(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateChapterMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateChapterMember(
    info: GraphQLResolveInfo,
    leaderId: string,
    chapterMemberId,
    input: AdminUpdateChapterMemberInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.update({
      where: { id: chapterMemberId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteChapterMember(info: GraphQLResolveInfo, leaderId: string, chapterMemberId) {
    return this.data.chapterMember.delete({ where: { memberId: chapterMemberId } })
  }
}
