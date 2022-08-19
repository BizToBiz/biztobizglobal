import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateTerritoryInput,
  AdminListTerritoryInput,
  AdminUpdateTerritoryInput,
  ApiTerritoryDataAccessAdminService,
  Territory,
} from '@biztobiz/api/territory/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiTerritoryFeatureAdminResolver {
  constructor(private readonly service: ApiTerritoryDataAccessAdminService) {}

  @Query(() => [Territory], { nullable: true })
  adminTerritories(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListTerritoryInput, nullable: true }) input?: AdminListTerritoryInput,
  ) {
    return this.service.adminTerritories(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountTerritories(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListTerritoryInput, nullable: true }) input?: AdminListTerritoryInput,
  ) {
    return this.service.adminCountTerritories(admin.id, input)
  }

  @Query(() => Territory, { nullable: true })
  adminTerritory(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('territoryId') territoryId: string) {
    return this.service.adminTerritory(info, admin.id, territoryId)
  }

  @Mutation(() => Territory, { nullable: true })
  adminCreateTerritory(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateTerritoryInput,
  ) {
    return this.service.adminCreateTerritory(info, admin.id, input)
  }

  @Mutation(() => Territory, { nullable: true })
  adminUpdateTerritory(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('territoryId') territoryId: string,
    @Args('input') input: AdminUpdateTerritoryInput,
  ) {
    return this.service.adminUpdateTerritory(info, admin.id, territoryId, input)
  }

  @Mutation(() => Territory, { nullable: true })
  adminDeleteTerritory(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('territoryId') territoryId: string,
  ) {
    return this.service.adminDeleteTerritory(info, admin.id, territoryId)
  }
}
