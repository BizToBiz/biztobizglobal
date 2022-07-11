import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateChapterMemberInput } from './dto/user-create-chapter-member.input'
import { UserListChapterMemberInput } from './dto/user-list-chapter-member.input'
import { UserUpdateChapterMemberInput } from './dto/user-update-chapter-member.input'

@Injectable()
export class ApiChapterMemberDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userChapterMembers(info: GraphQLResolveInfo, userId: string, input?: UserListChapterMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountChapterMembers(userId: string, input?: UserListChapterMemberInput): Promise<CorePaging> {
    const total = await this.data.chapterMember.count()
    return {
      take: input?.take,
      skip: input?.skip,
      total,
    }
  }

  userChapterMember(info: GraphQLResolveInfo, userId: string, chapterMemberId) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.findUnique({ where: { chapterId_memberId: chapterMemberId }, ...select })
  }

  userCreateChapterMember(info: GraphQLResolveInfo, userId: string, input: UserCreateChapterMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.create({
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateChapterMember(
    info: GraphQLResolveInfo,
    userId: string,
    chapterMemberId,
    input: UserUpdateChapterMemberInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.update({
      where: { id: chapterMemberId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteChapterMember(info: GraphQLResolveInfo, userId: string, chapterMemberId) {
    return this.data.chapterMember.delete({ where: { chapterId_memberId: chapterMemberId } })
  }
}
