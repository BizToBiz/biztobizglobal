import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  ApiTerritoryDataAccessUserService,
  Territory,
  UserCreateTerritoryInput,
  UserListTerritoryInput,
  UserUpdateTerritoryInput,
} from '@biztobiz/api/territory/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiTerritoryFeatureUserResolver {
  constructor(private readonly service: ApiTerritoryDataAccessUserService) {}

  @Query(() => [Territory], { nullable: true })
  userTerritories(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListTerritoryInput, nullable: true }) input?: UserListTerritoryInput,
  ) {
    return this.service.userTerritories(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountTerritories(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListTerritoryInput, nullable: true }) input?: UserListTerritoryInput,
  ) {
    return this.service.userCountTerritories(user.id, input)
  }

  @Query(() => Territory, { nullable: true })
  userTerritory(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('territoryId') territoryId: string) {
    return this.service.userTerritory(info, user.id, territoryId)
  }

  @Mutation(() => Territory, { nullable: true })
  userCreateTerritory(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateTerritoryInput,
  ) {
    return this.service.userCreateTerritory(info, user.id, input)
  }

  @Mutation(() => Territory, { nullable: true })
  userUpdateTerritory(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('territoryId') territoryId: string,
    @Args('input') input: UserUpdateTerritoryInput,
  ) {
    return this.service.userUpdateTerritory(info, user.id, territoryId, input)
  }

  @Mutation(() => Territory, { nullable: true })
  userDeleteTerritory(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('territoryId') territoryId: string,
  ) {
    return this.service.userDeleteTerritory(info, user.id, territoryId)
  }
}
