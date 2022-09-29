import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateChapterInput } from './dto/admin-create-chapter.input'
import { AdminListChapterInput } from './dto/admin-list-chapter.input'
import { AdminUpdateChapterInput } from './dto/admin-update-chapter.input'

@Injectable()
export class ApiChapterDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: AdminListChapterInput): Prisma.ChapterWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

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

  async adminChapters(info: GraphQLResolveInfo, adminId: string, input?: AdminListChapterInput) {
    const select = new PrismaSelect(info).value
    const chapters = await this.data.chapter.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
    return chapters
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
      data: {
        ...input,
        meetings: { connect: input.meetings },
        members: { connect: input.members },
        transactions: { connect: input.transactions },
        referralsFrom: { connect: input.referralsFrom },
        referralsTo: { connect: input.referralsTo },
        attendanceReminders: { connect: input.attendanceReminders },
      },
      ...select,
    })
  }

  adminUpdateChapter(info: GraphQLResolveInfo, adminId: string, chapterId, input: AdminUpdateChapterInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.update({
      where: { id: chapterId },
      data: {
        ...input,
        meetings: { set: input.meetings },
        members: { set: input.members },
        transactions: { set: input.transactions },
        referralsFrom: { set: input.referralsFrom },
        referralsTo: { set: input.referralsTo },
        attendanceReminders: { set: input.attendanceReminders },
        regionId: { set: input.regionId },
        substituteGroupId: { set: input.substituteGroupId },
      },
      ...select,
    })
  }

  adminDeleteChapter(info: GraphQLResolveInfo, adminId: string, chapterId) {
    return this.data.chapter.delete({ where: { id: chapterId } })
  }
}
