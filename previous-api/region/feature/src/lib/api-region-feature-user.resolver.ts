import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  ApiRegionDataAccessUserService,
  Region,
  UserCreateRegionInput,
  UserListRegionInput,
  UserUpdateRegionInput,
} from '@biztobiz/api/region/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiRegionFeatureUserResolver {
  constructor(private readonly service: ApiRegionDataAccessUserService) {}

  @Query(() => [Region], { nullable: true })
  userRegions(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListRegionInput, nullable: true }) input?: UserListRegionInput,
  ) {
    return this.service.userRegions(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountRegions(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListRegionInput, nullable: true }) input?: UserListRegionInput,
  ) {
    return this.service.userCountRegions(user.id, input)
  }

  @Query(() => Region, { nullable: true })
  userRegion(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('regionId') regionId: string) {
    return this.service.userRegion(info, user.id, regionId)
  }

  @Mutation(() => Region, { nullable: true })
  userCreateRegion(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateRegionInput,
  ) {
    return this.service.userCreateRegion(info, user.id, input)
  }

  @Mutation(() => Region, { nullable: true })
  userUpdateRegion(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('regionId') regionId: string,
    @Args('input') input: UserUpdateRegionInput,
  ) {
    return this.service.userUpdateRegion(info, user.id, regionId, input)
  }

  @Mutation(() => Region, { nullable: true })
  userDeleteRegion(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('regionId') regionId: string) {
    return this.service.userDeleteRegion(info, user.id, regionId)
  }
}
