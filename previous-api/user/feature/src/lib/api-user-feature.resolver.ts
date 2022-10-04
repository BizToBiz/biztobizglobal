import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiUserDataAccessService, User } from '@biztobiz/api/user/data-access'

@Resolver(() => User)
export class ApiUserFeatureResolver {
  constructor(private readonly service: ApiUserDataAccessService) {}

  @ResolveField(() => String, { nullable: true })
  name(@Parent() user: User) {
    const name = [user?.firstName, user?.lastName].join(' ').trim()
    return name.length ? name : ''
  }

  @ResolveField(() => Boolean, { nullable: true })
  isLeader(@Parent() user: User): Promise<boolean> {
    return this.service.isLeader(user.id)
  }
}
