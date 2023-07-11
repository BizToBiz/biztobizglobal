import { Args, Info, Query, Resolver } from '@nestjs/graphql'
import { ApiChapterDataAccessPublicService, Chapter, PublicListChapterInput } from '@biztobiz/api/chapter/data-access'
import { GraphQLResolveInfo } from 'graphql/index'
import { CorePaging } from '@biztobiz/api/core/data-access'

@Resolver(() => Chapter)
export class ApiChapterFeaturePublicResolver {
  constructor(private readonly service: ApiChapterDataAccessPublicService) {}

  @Query(() => [Chapter], { nullable: true })
  publicChapters(
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => PublicListChapterInput, nullable: true }) input?: PublicListChapterInput,
  ) {
    return this.service.publicChapters(info, input)
  }

  @Query(() => CorePaging, { nullable: true })
  publicCountChapters(
    @Args({ name: 'input', type: () => PublicListChapterInput, nullable: true }) input?: PublicListChapterInput,
  ) {
    return this.service.publicCountChapters(input)
  }

  @Query(() => Chapter, { nullable: true })
  publicChapter(@Info() info: GraphQLResolveInfo, @Args('chapterId') chapterId: string) {
    return this.service.publicChapter(info, chapterId)
  }
}
