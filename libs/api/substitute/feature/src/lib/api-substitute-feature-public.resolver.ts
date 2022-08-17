import { Resolver } from '@nestjs/graphql'
import { ApiSubstituteDataAccessPublicService, Substitute } from '@biztobiz/api/substitute/data-access'

@Resolver(() => Substitute)
export class ApiSubstituteFeaturePublicResolver {
  constructor(private readonly service: ApiSubstituteDataAccessPublicService) {}
}
