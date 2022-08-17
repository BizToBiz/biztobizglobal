import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateSubstituteInput,
  AdminListSubstituteInput,
  AdminUpdateSubstituteInput,
  ApiSubstituteDataAccessLeaderService,
  Substitute,
} from '@biztobiz/api/substitute/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiSubstituteFeatureLeaderResolver {
  constructor(private readonly service: ApiSubstituteDataAccessLeaderService) {}

  @Query(() => [Substitute], { nullable: true })
  leaderSubstitutes(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListSubstituteInput, nullable: true }) input?: AdminListSubstituteInput,
  ) {
    return this.service.leaderSubstitutes(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountSubstitutes(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListSubstituteInput, nullable: true }) input?: AdminListSubstituteInput,
  ) {
    return this.service.leaderCountSubstitutes(leader.id, input)
  }

  @Query(() => Substitute, { nullable: true })
  leaderSubstitute(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteId') substituteId: string,
  ) {
    return this.service.leaderSubstitute(info, leader.id, substituteId)
  }

  @Mutation(() => Substitute, { nullable: true })
  leaderCreateSubstitute(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateSubstituteInput,
  ) {
    return this.service.leaderCreateSubstitute(info, leader.id, input)
  }

  @Mutation(() => Substitute, { nullable: true })
  leaderUpdateSubstitute(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteId') substituteId: string,
    @Args('input') input: AdminUpdateSubstituteInput,
  ) {
    return this.service.leaderUpdateSubstitute(info, leader.id, substituteId, input)
  }

  @Mutation(() => Substitute, { nullable: true })
  leaderDeleteSubstitute(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteId') substituteId: string,
  ) {
    return this.service.leaderDeleteSubstitute(info, leader.id, substituteId)
  }
}
