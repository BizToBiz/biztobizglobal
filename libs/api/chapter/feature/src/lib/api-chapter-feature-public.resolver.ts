import { Resolver } from '@nestjs/graphql'
import { ApiChapterDataAccessPublicService, Chapter } from '@biztobiz/api/chapter/data-access'

@Resolver(() => Chapter)
export class ApiChapterFeaturePublicResolver {
  constructor(private readonly service: ApiChapterDataAccessPublicService) {}
}
