import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateChapterMemberInput } from './dto/user-create-chapter-member.input'
import { UserListChapterMemberInput } from './dto/user-list-chapter-member.input'
import { UserUpdateChapterMemberInput } from './dto/user-update-chapter-member.input'
import { AdminListChapterMemberInput } from './dto/admin-list-chapter-member.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ApiChapterMemberDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private where(input: AdminListChapterMemberInput): Prisma.ChapterMemberWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for chapter-member
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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: Prisma.QueryMode.insensitive } })),
        })),
      ],
    }
  }

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

  userChapterMember(info: GraphQLResolveInfo, userId: string, chapterMemberId) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.findUnique({ where: { id: chapterMemberId }, ...select })
  }

  userCreateChapterMember(info: GraphQLResolveInfo, userId: string, input: UserCreateChapterMemberInput) {
    const select = new PrismaSelect(info).value
    return this.data.chapterMember.create({
      data: { ...input },
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
      data: { ...input },
      ...select,
    })
  }

  userDeleteChapterMember(info: GraphQLResolveInfo, userId: string, chapterMemberId: string) {
    return this.data.chapterMember.delete({ where: { memberId: chapterMemberId } })
  }
}
