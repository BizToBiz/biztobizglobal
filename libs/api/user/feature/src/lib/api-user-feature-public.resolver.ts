import { Resolver } from '@nestjs/graphql'
import { ApiUserDataAccessPublicService, User } from '@biztobiz/api/user/data-access'

@Resolver(() => User)
export class ApiUserFeaturePublicResolver {
  constructor(private readonly service: ApiUserDataAccessPublicService) {}
}
