import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateChapterInput } from './dto/user-create-chapter.input'
import { UserListChapterInput } from './dto/user-list-chapter.input'
import { UserUpdateChapterInput } from './dto/user-update-chapter.input'
import { Prisma } from '@prisma/client'
import { AdminListChapterInput } from './dto/admin-list-chapter.input'

@Injectable()
export class ApiChapterDataAccessUserService {
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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

  userChapters(info: GraphQLResolveInfo, userId: string, input?: UserListChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountChapters(userId: string, input?: UserListChapterInput): Promise<CorePaging> {
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

  userChapter(info: GraphQLResolveInfo, userId: string, chapterId) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.findUnique({ where: { id: chapterId }, ...select })
  }

  userCreateChapter(info: GraphQLResolveInfo, userId: string, input: UserCreateChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateChapter(info: GraphQLResolveInfo, userId: string, chapterId, input: UserUpdateChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.update({
      where: { id: chapterId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteChapter(info: GraphQLResolveInfo, userId: string, chapterId) {
    return this.data.chapter.delete({ where: { id: chapterId } })
  }
}
