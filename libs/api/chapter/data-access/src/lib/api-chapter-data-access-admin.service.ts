import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { AdminCreateChapterInput } from './dto/admin-create-chapter.input'
import { AdminListChapterInput } from './dto/admin-list-chapter.input'
import { AdminUpdateChapterInput } from './dto/admin-update-chapter.input'

@Injectable()
export class ApiChapterDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminChapters(info: GraphQLResolveInfo, adminId: string, input?: AdminListChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountChapters(adminId: string, input?: AdminListChapterInput): Promise<CorePaging> {
    const total = await this.data.chapter.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  adminChapter(info: GraphQLResolveInfo, adminId: string, chapterId) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.findUnique({ where: { id: chapterId }, ...select })
  }

  adminCreateChapter(info: GraphQLResolveInfo, adminId: string, input: AdminCreateChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.create({
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateChapter(info: GraphQLResolveInfo, adminId: string, chapterId, input: AdminUpdateChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.update({
      where: { id: chapterId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteChapter(info: GraphQLResolveInfo, adminId: string, chapterId) {
    return this.data.chapter.delete({ where: { id: chapterId } })
  }
}
