import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateChapterInput } from './dto/admin-create-chapter.input'
import { AdminListChapterInput } from './dto/admin-list-chapter.input'
import { AdminUpdateChapterInput } from './dto/admin-update-chapter.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ApiChapterDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name', 'description', 'city', 'state', 'meetingTime']
  private where(query = ''): Prisma.ChapterWhereInput {
    query = query?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]
    return {
      AND: terms.map((term) => ({
        OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
      })),
    }
  }

  adminChapters(info: GraphQLResolveInfo, adminId: string, input?: AdminListChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.findMany({
      take: input?.take,
      skip: input?.skip,
      where: this.where(input?.search),
      ...select,
    })
  }

  async adminCountChapters(adminId: string, input?: AdminListChapterInput): Promise<CorePaging> {
    const total = await this.data.chapter.count()
    const count = await this.data.chapter.count({ where: this.where(input?.search) })
    return {
      take: input?.take,
      skip: input?.skip,
      page: input?.skip / input?.take,
      count,
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
      data: { ...input },
      ...select,
    })
  }

  adminUpdateChapter(info: GraphQLResolveInfo, adminId: string, chapterId, input: AdminUpdateChapterInput) {
    console.log({ input })
    const select = new PrismaSelect(info).value
    return this.data.chapter.update({
      where: { id: chapterId },
      data: { ...input },
      ...select,
    })
  }

  adminDeleteChapter(info: GraphQLResolveInfo, adminId: string, chapterId) {
    return this.data.chapter.delete({ where: { id: chapterId } })
  }
}
