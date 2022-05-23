import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { UserCreateChapterInput } from './dto/user-create-chapter.input'
import { UserListChapterInput } from './dto/user-list-chapter.input'
import { UserUpdateChapterInput } from './dto/user-update-chapter.input'

@Injectable()
export class ApiChapterDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userChapters(info: GraphQLResolveInfo, userId: string, input?: UserListChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountChapters(userId: string, input?: UserListChapterInput): Promise<CorePaging> {
    const total = await this.data.chapter.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
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
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateChapter(info: GraphQLResolveInfo, userId: string, chapterId, input: UserUpdateChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.update({
      where: { id: chapterId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteChapter(info: GraphQLResolveInfo, userId: string, chapterId) {
    return this.data.chapter.delete({ where: { id: chapterId } })
  }
}
