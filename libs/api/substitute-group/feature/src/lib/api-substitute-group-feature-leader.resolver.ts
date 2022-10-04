import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateSubstituteGroupInput,
  AdminListSubstituteGroupInput,
  AdminUpdateSubstituteGroupInput,
  ApiSubstituteGroupDataAccessLeaderService,
  SubstituteGroup,
} from '@biztobiz/api/substitute-group/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiSubstituteGroupFeatureLeaderResolver {
  constructor(private readonly service: ApiSubstituteGroupDataAccessLeaderService) {}

  @Query(() => [SubstituteGroup], { nullable: true })
  leaderSubstituteGroups(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListSubstituteGroupInput, nullable: true })
    input?: AdminListSubstituteGroupInput,
  ) {
    return this.service.leaderSubstituteGroups(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountSubstituteGroups(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListSubstituteGroupInput, nullable: true })
    input?: AdminListSubstituteGroupInput,
  ) {
    return this.service.leaderCountSubstituteGroups(leader.id, input)
  }

  @Query(() => SubstituteGroup, { nullable: true })
  leaderSubstituteGroup(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteGroupId') substituteGroupId: string,
  ) {
    return this.service.leaderSubstituteGroup(info, leader.id, substituteGroupId)
  }

  @Mutation(() => SubstituteGroup, { nullable: true })
  leaderCreateSubstituteGroup(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateSubstituteGroupInput,
  ) {
    return this.service.leaderCreateSubstituteGroup(info, leader.id, input)
  }

  @Mutation(() => SubstituteGroup, { nullable: true })
  leaderUpdateSubstituteGroup(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteGroupId') substituteGroupId: string,
    @Args('input') input: AdminUpdateSubstituteGroupInput,
  ) {
    return this.service.leaderUpdateSubstituteGroup(info, leader.id, substituteGroupId, input)
  }

  @Mutation(() => SubstituteGroup, { nullable: true })
  leaderDeleteSubstituteGroup(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteGroupId') substituteGroupId: string,
  ) {
    return this.service.leaderDeleteSubstituteGroup(info, leader.id, substituteGroupId)
  }
}
