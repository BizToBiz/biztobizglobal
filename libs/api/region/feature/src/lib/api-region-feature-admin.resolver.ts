import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateRegionInput,
  AdminListRegionInput,
  AdminUpdateRegionInput,
  ApiRegionDataAccessAdminService,
  Region,
} from '@biztobiz/api/region/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiRegionFeatureAdminResolver {
  constructor(private readonly service: ApiRegionDataAccessAdminService) {}

  @Query(() => [Region], { nullable: true })
  adminRegions(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListRegionInput, nullable: true }) input?: AdminListRegionInput,
  ) {
    return this.service.adminRegions(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountRegions(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListRegionInput, nullable: true }) input?: AdminListRegionInput,
  ) {
    return this.service.adminCountRegions(admin.id, input)
  }

  @Query(() => Region, { nullable: true })
  adminRegion(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('regionId') regionId: string) {
    return this.service.adminRegion(info, admin.id, regionId)
  }

  @Mutation(() => Region, { nullable: true })
  adminCreateRegion(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateRegionInput,
  ) {
    return this.service.adminCreateRegion(info, admin.id, input)
  }

  @Mutation(() => Region, { nullable: true })
  adminUpdateRegion(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('regionId') regionId: string,
    @Args('input') input: AdminUpdateRegionInput,
  ) {
    return this.service.adminUpdateRegion(info, admin.id, regionId, input)
  }

  @Mutation(() => Region, { nullable: true })
  adminDeleteRegion(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('regionId') regionId: string) {
    return this.service.adminDeleteRegion(info, admin.id, regionId)
  }
}
