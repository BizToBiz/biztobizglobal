import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateUserInput,
  AdminUpdateUserInput,
  ApiUserDataAccessLeaderService,
  ListUserInput,
  User,
} from '@biztobiz/api/user/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiUserFeatureLeaderResolver {
  constructor(private readonly service: ApiUserDataAccessLeaderService) {}

  @Query(() => [User], { nullable: true })
  leaderUsers(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => ListUserInput, nullable: true }) input?: ListUserInput,
  ) {
    return this.service.leaderUsers(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountUsers(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => ListUserInput, nullable: true }) input?: ListUserInput,
  ) {
    return this.service.leaderCountUsers(leader.id, input)
  }

  @Query(() => User, { nullable: true })
  leaderUser(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('userId') userId: string) {
    return this.service.leaderUser(info, leader.id, userId)
  }

  @Mutation(() => User, { nullable: true })
  leaderCreateUser(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateUserInput,
  ) {
    return this.service.leaderCreateUser(info, leader.id, input)
  }

  @Mutation(() => User, { nullable: true })
  leaderUpdateUser(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('userId') userId: string,
    @Args('input') input: AdminUpdateUserInput,
  ) {
    return this.service.leaderUpdateUser(info, leader.id, userId, input)
  }

  @Mutation(() => User, { nullable: true })
  leaderDeleteUser(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('userId') userId: string) {
    return this.service.leaderDeleteUser(info, leader.id, userId)
  }
}
