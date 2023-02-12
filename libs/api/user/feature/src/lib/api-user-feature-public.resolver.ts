import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiUserDataAccessPublicService, User } from '@biztobiz/api/user/data-access'

@Resolver(() => User)
export class ApiUserFeaturePublicResolver {
  constructor(private readonly service: ApiUserDataAccessPublicService) {}

  @ResolveField(() => String, { nullable: true })
  name(@Parent() user: User) {
    return this.service.getUserName(user.id)
  }

  @ResolveField(() => Boolean, { nullable: true })
  isLeader(@Parent() user: User): Promise<boolean> {
    return this.service.isLeader(user.id)
  }

  @ResolveField('avatarUrl', () => String, { nullable: true })
  avatarUrl(@Parent() user: User) {
    return this.service.getUserAvatarUrl(user.id)
  }
}
