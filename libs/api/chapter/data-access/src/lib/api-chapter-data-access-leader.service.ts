import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateChapterInput } from './dto/admin-create-chapter.input'
import { AdminListChapterInput } from './dto/admin-list-chapter.input'
import { AdminUpdateChapterInput } from './dto/admin-update-chapter.input'

@Injectable()
export class ApiChapterDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: AdminListChapterInput): Prisma.ChapterWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for chapter
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

  leaderChapters(info: GraphQLResolveInfo, leaderId: string, input?: AdminListChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.findMany({
      take: input?.take ?? 10,
      skip: input?.skip ?? 0,
      ...select,
    })
  }

  async leaderCountChapters(leaderId: string, input?: AdminListChapterInput): Promise<CorePaging> {
    const total = await this.data.chapter.count()
    const count = await this.data.chapter.count({ where: this.where(input) })
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

  leaderChapter(info: GraphQLResolveInfo, leaderId: string, chapterId) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.findUnique({ where: { id: chapterId }, ...select })
  }

  leaderCreateChapter(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateChapter(info: GraphQLResolveInfo, leaderId: string, chapterId, input: AdminUpdateChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.update({
      where: { id: chapterId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteChapter(info: GraphQLResolveInfo, leaderId: string, chapterId) {
    return this.data.chapter.delete({ where: { id: chapterId } })
  }
}
