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
  private where(input: AdminListChapterInput): Prisma.ChapterWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    function relationalSearch() {
      if (input?.regionId) {
        return { regionId: input.regionId }
      }
      if (input?.substituteGroupId) {
        return { substituteGroupId: input.substituteGroupId }
      }
      if (input?.memberId) {
        return { members: { some: { id: input.memberId } } }
      }
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

  adminChapters(info: GraphQLResolveInfo, adminId: string, input?: AdminListChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.findMany({
      take: input?.take,
      skip: input?.skip,
      where: this.where(input),
      ...select,
    })
  }

  async adminCountChapters(adminId: string, input?: AdminListChapterInput): Promise<CorePaging> {
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
