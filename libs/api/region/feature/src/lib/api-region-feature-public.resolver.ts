import { Resolver } from '@nestjs/graphql'
import { ApiRegionDataAccessPublicService, Region } from '@biztobiz/api/region/data-access'

@Resolver(() => Region)
export class ApiRegionFeaturePublicResolver {
  constructor(private readonly service: ApiRegionDataAccessPublicService) {}
}
