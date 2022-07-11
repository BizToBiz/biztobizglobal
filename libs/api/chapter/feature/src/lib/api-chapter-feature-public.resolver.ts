import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiChapterDataAccessPublicService, Chapter } from '@biztobiz/api/chapter/data-access'
import { Region } from '@biztobiz/api/region/data-access'

@Resolver(() => Chapter)
export class ApiChapterFeaturePublicResolver {
  constructor(private readonly service: ApiChapterDataAccessPublicService) {}

  @ResolveField(() => Region, { nullable: true })
  region(@Parent() chapter: Chapter) {
    return chapter.region || {}
  }
}
