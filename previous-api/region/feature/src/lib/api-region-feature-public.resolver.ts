import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiRegionDataAccessPublicService, Region } from '@biztobiz/api/region/data-access'
import { User } from '@biztobiz/api/user/data-access'
import { Territory } from '@biztobiz/api/territory/data-access'

@Resolver(() => Region)
export class ApiRegionFeaturePublicResolver {
  constructor(private readonly service: ApiRegionDataAccessPublicService) {}

  @ResolveField(() => User, { nullable: true })
  manager(@Parent() region: Region) {
    return region.manager
  }

  @ResolveField(() => Territory, { nullable: true })
  territory(@Parent() region: Region) {
    return region.territory
  }
}
