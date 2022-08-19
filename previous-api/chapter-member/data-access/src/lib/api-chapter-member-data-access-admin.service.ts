import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'

import { AdminCreateChapterMemberInput } from './dto/admin-create-chapter-member.input'
import { AdminListChapterMemberInput } from './dto/admin-list-chapter-member.input'
import { AdminUpdateChapterMemberInput } from './dto/admin-update-chapter-member.input'

@Injectable()
export class ApiChapterMemberDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminChapterMembers(info: GraphQLResolveInfo, adminId: string, input?: AdminListChapterMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountChapterMembers(adminId: string, input?: AdminListChapterMemberInput): Promise<CorePaging> {
    const total = await this.data.chapterMember.count()
    return {
      take: input?.take,
      skip: input?.skip,
      total,
    }
  }

  adminChapterMember(info: GraphQLResolveInfo, adminId: string, chapterMemberId) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.findUnique({ where: { chapterId_memberId: chapterMemberId }, ...select })
  }

  adminCreateChapterMember(info: GraphQLResolveInfo, adminId: string, input: AdminCreateChapterMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.create({
      data: { name: input.name },
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
    return this.data.chapterMember.update({
      where: { id: chapterMemberId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteChapterMember(info: GraphQLResolveInfo, adminId: string, chapterMemberId) {
    return this.data.chapterMember.delete({ where: { chapterId_memberId: chapterMemberId } })
  }
}
