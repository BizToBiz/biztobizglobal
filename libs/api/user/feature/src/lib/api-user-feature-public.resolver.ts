import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiUserDataAccessPublicService, User } from '@biztobiz/api/user/data-access'

@Resolver(() => User)
export class ApiUserFeaturePublicResolver {
  constructor(private readonly service: ApiUserDataAccessPublicService) {}

  @ResolveField(() => Boolean, { nullable: true })
  isLeader(@Parent() user: User): Promise<boolean> {
    return this.service.isLeader(user.id)
  }
}
