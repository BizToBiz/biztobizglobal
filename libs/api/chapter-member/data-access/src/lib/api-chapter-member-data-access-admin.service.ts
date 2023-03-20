import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateChapterMemberInput } from './dto/admin-create-chapter-member.input'
import { AdminListChapterMemberInput } from './dto/admin-list-chapter-member.input'
import { AdminUpdateChapterMemberInput } from './dto/admin-update-chapter-member.input'

@Injectable()
export class ApiChapterMemberDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: AdminListChapterMemberInput): Prisma.ChapterMemberWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]
    function capitalizeFirstLetter(str) {
      // converting first letter to uppercase
      const capitalized = str.charAt(0).toUpperCase() + str.slice(1)

      return capitalized
    }
    function relationalSearch() {
      // TODO: implement relational search for chapter-member
      // if (input?.regionId) {
      //   return { regionId: input.regionId }
      // }
      // if (input?.memberId) {
      //   return { members: { some: { id: input.memberId } } }
      // }
      if (input?.chapterId) {
        return { chapter: { id: input.chapterId } }
      }
      return null
    }
    return {
      AND: [
        relationalSearch(),
        ...terms.map((term) => ({
          OR: [
            { chapter: { name: { contains: term.toLowerCase() } } },
            { member: { firstName: { contains: term.toLowerCase() } } },
            { member: { lastName: { contains: term.toLowerCase() } } },
            { chapter: { name: { contains: capitalizeFirstLetter(term) } } },
            { member: { firstName: { contains: capitalizeFirstLetter(term) } } },
            { member: { lastName: { contains: capitalizeFirstLetter(term) } } },
          ],
        })),
      ],
    }
  }

  adminChapterMembers(info: GraphQLResolveInfo, adminId: string, input?: AdminListChapterMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.findMany({
      take: input?.take,
      skip: input?.skip,
      where: this.where(input),
      ...select,
    })
  }

  async adminCountChapterMembers(adminId: string, input?: AdminListChapterMemberInput): Promise<CorePaging> {
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

  adminChapterMember(info: GraphQLResolveInfo, adminId: string, chapterMemberId) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.findUnique({ where: { id: chapterMemberId }, ...select })
  }

  adminCreateChapterMember(info: GraphQLResolveInfo, adminId: string, input: AdminCreateChapterMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.create({
      data: { ...input },
      ...select,
    })
  }

  adminUpdateChapterMember(
    info: GraphQLResolveInfo,
    adminId: string,
    chapterMemberId,
    input: AdminUpdateChapterMemberInput,
  ) {
    const select = new PrismaSelect(info).value
    const isTrainer = !!input?.isTrainer
    const isMentor = !!input?.isMentor
    return this.data.chapterMember.update({
      where: { id: chapterMemberId },
      data: { ...input, isTrainer, isMentor },
      ...select,
    })
  }

  adminDeleteChapterMember(info: GraphQLResolveInfo, adminId: string, chapterMemberId) {
    return this.data.chapterMember.delete({ where: { id: chapterMemberId } })
  }
}
