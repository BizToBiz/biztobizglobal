import { Resolver } from '@nestjs/graphql'
import { ApiChapterMemberDataAccessPublicService, ChapterMember } from '@biztobiz/api/chapter-member/data-access'

@Resolver(() => ChapterMember)
export class ApiChapterMemberFeaturePublicResolver {
  constructor(private readonly service: ApiChapterMemberDataAccessPublicService) {}
}
