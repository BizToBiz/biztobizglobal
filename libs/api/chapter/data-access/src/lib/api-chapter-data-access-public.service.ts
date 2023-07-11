import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'
import { GraphQLResolveInfo } from 'graphql/index'
import { PrismaSelect } from '@paljs/plugins'
import { PublicListChapterInput } from './dto/public-list-chapter.input'
import { UserListChapterInput } from './dto/user-list-chapter.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ApiChapterDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['name']
  private where(input: UserListChapterInput): Prisma.ChapterWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: Prisma.QueryMode.insensitive } })),
        })),
      ],
    }
  }

  publicChapters(info: GraphQLResolveInfo, input?: PublicListChapterInput) {
    const select = new PrismaSelect(info).value
    console.log(select)
    return this.data.chapter.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async publicCountChapters(input?: UserListChapterInput): Promise<CorePaging> {
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

  publicChapter(info: GraphQLResolveInfo, chapterId) {
    const select = new PrismaSelect(info).value
    return this.data.chapter.findUnique({ where: { id: chapterId }, ...select })
  }
}
