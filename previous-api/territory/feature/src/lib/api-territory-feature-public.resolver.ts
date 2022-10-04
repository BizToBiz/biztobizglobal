import { Resolver } from '@nestjs/graphql'
import { ApiTerritoryDataAccessPublicService, Territory } from '@biztobiz/api/territory/data-access'

@Resolver(() => Territory)
export class ApiTerritoryFeaturePublicResolver {
  constructor(private readonly service: ApiTerritoryDataAccessPublicService) {}
}
