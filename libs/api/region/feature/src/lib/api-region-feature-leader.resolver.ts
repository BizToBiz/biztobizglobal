import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateRegionInput,
  AdminListRegionInput,
  AdminUpdateRegionInput,
  ApiRegionDataAccessLeaderService,
  Region,
} from '@biztobiz/api/region/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiRegionFeatureLeaderResolver {
  constructor(private readonly service: ApiRegionDataAccessLeaderService) {}

  @Query(() => [Region], { nullable: true })
  leaderRegions(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListRegionInput, nullable: true }) input?: AdminListRegionInput,
  ) {
    return this.service.leaderRegions(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountRegions(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListRegionInput, nullable: true }) input?: AdminListRegionInput,
  ) {
    return this.service.leaderCountRegions(leader.id, input)
  }

  @Query(() => Region, { nullable: true })
  leaderRegion(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('regionId') regionId: string) {
    return this.service.leaderRegion(info, leader.id, regionId)
  }

  @Mutation(() => Region, { nullable: true })
  leaderCreateRegion(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateRegionInput,
  ) {
    return this.service.leaderCreateRegion(info, leader.id, input)
  }

  @Mutation(() => Region, { nullable: true })
  leaderUpdateRegion(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('regionId') regionId: string,
    @Args('input') input: AdminUpdateRegionInput,
  ) {
    return this.service.leaderUpdateRegion(info, leader.id, regionId, input)
  }

  @Mutation(() => Region, { nullable: true })
  leaderDeleteRegion(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('regionId') regionId: string) {
    return this.service.leaderDeleteRegion(info, leader.id, regionId)
  }
}
