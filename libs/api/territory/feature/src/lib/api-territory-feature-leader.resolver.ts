import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateTerritoryInput,
  AdminListTerritoryInput,
  AdminUpdateTerritoryInput,
  ApiTerritoryDataAccessLeaderService,
  Territory,
} from '@biztobiz/api/territory/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiTerritoryFeatureLeaderResolver {
  constructor(private readonly service: ApiTerritoryDataAccessLeaderService) {}

  @Query(() => [Territory], { nullable: true })
  leaderTerritories(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListTerritoryInput, nullable: true }) input?: AdminListTerritoryInput,
  ) {
    return this.service.leaderTerritories(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountTerritories(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListTerritoryInput, nullable: true }) input?: AdminListTerritoryInput,
  ) {
    return this.service.leaderCountTerritories(leader.id, input)
  }

  @Query(() => Territory, { nullable: true })
  leaderTerritory(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('territoryId') territoryId: string) {
    return this.service.leaderTerritory(info, leader.id, territoryId)
  }

  @Mutation(() => Territory, { nullable: true })
  leaderCreateTerritory(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateTerritoryInput,
  ) {
    return this.service.leaderCreateTerritory(info, leader.id, input)
  }

  @Mutation(() => Territory, { nullable: true })
  leaderUpdateTerritory(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('territoryId') territoryId: string,
    @Args('input') input: AdminUpdateTerritoryInput,
  ) {
    return this.service.leaderUpdateTerritory(info, leader.id, territoryId, input)
  }

  @Mutation(() => Territory, { nullable: true })
  leaderDeleteTerritory(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('territoryId') territoryId: string,
  ) {
    return this.service.leaderDeleteTerritory(info, leader.id, territoryId)
  }
}
