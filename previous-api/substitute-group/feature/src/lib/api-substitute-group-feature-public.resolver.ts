import { Resolver } from '@nestjs/graphql'
import { ApiSubstituteGroupDataAccessPublicService, SubstituteGroup } from '@biztobiz/api/substitute-group/data-access'

@Resolver(() => SubstituteGroup)
export class ApiSubstituteGroupFeaturePublicResolver {
  constructor(private readonly service: ApiSubstituteGroupDataAccessPublicService) {}
}
