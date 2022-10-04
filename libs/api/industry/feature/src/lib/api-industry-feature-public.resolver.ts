import { Resolver } from '@nestjs/graphql'
import { ApiIndustryDataAccessPublicService, Industry } from '@biztobiz/api/industry/data-access'

@Resolver(() => Industry)
export class ApiIndustryFeaturePublicResolver {
  constructor(private readonly service: ApiIndustryDataAccessPublicService) {}
}
