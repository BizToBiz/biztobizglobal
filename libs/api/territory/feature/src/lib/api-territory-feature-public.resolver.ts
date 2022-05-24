import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiTerritoryDataAccessPublicService, Territory } from '@biztobiz/api/territory/data-access'
import { User } from '@biztobiz/api/user/data-access'

@Resolver(() => Territory)
export class ApiTerritoryFeaturePublicResolver {
  constructor(private readonly service: ApiTerritoryDataAccessPublicService) {}

  @ResolveField(() => User, { nullable: true })
  manager(@Parent() territory: Territory) {
    return territory.manager
  }
}
