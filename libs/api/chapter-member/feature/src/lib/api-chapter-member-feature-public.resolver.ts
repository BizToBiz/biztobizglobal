import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiChapterMemberDataAccessPublicService, ChapterMember } from '@biztobiz/api/chapter-member/data-access'

@Resolver(() => ChapterMember)
export class ApiChapterMemberFeaturePublicResolver {
  constructor(private readonly service: ApiChapterMemberDataAccessPublicService) {}

  @ResolveField(() => String, { nullable: true })
  name(@Parent() chapterMember: ChapterMember) {
    return this.service.chapterMemberName(chapterMember)
  }
}
