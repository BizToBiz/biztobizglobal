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
    return this.data.chapterMemberModel.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountChapterMembers(userId: string, input?: UserListChapterMemberInput): Promise<CorePaging> {
    const total = await this.data.chapterMemberModel.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  userChapterMember(info: GraphQLResolveInfo, userId: string, chapterMemberId) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMemberModel.findUnique({ where: { chapterId_memberId: chapterMemberId }, ...select })
  }

  userCreateChapterMember(info: GraphQLResolveInfo, userId: string, input: UserCreateChapterMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMemberModel.create({
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
    return this.data.chapterMemberModel.update({
      where: { id: chapterMemberId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteChapterMember(info: GraphQLResolveInfo, userId: string, chapterMemberId) {
    return this.data.chapterMemberModel.delete({ where: { chapterId_memberId: chapterMemberId } })
  }
}
