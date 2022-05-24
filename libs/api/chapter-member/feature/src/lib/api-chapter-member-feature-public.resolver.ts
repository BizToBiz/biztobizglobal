import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiChapterMemberDataAccessPublicService, ChapterMember } from '@biztobiz/api/chapter-member/data-access'
import { Chapter } from '@biztobiz/api/chapter/data-access'
import { User } from '@biztobiz/api/user/data-access'

@Resolver(() => ChapterMember)
export class ApiChapterMemberFeaturePublicResolver {
  constructor(private readonly service: ApiChapterMemberDataAccessPublicService) {}

  @ResolveField(() => Chapter, { nullable: true })
  chapter(@Parent() chapterMember: ChapterMember) {
    return chapterMember.chapter
  }

  @ResolveField(() => User, { nullable: true })
  member(@Parent() chapterMember: ChapterMember) {
    return chapterMember.member
  }
}
