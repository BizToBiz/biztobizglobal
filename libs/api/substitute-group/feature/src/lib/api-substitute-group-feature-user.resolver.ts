import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  ApiSubstituteGroupDataAccessUserService,
  SubstituteGroup,
  UserCreateSubstituteGroupInput,
  UserListSubstituteGroupInput,
  UserUpdateSubstituteGroupInput,
} from '@biztobiz/api/substitute-group/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiSubstituteGroupFeatureUserResolver {
  constructor(private readonly service: ApiSubstituteGroupDataAccessUserService) {}

  @Query(() => [SubstituteGroup], { nullable: true })
  userSubstituteGroups(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListSubstituteGroupInput, nullable: true })
    input?: UserListSubstituteGroupInput,
  ) {
    return this.service.userSubstituteGroups(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountSubstituteGroups(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListSubstituteGroupInput, nullable: true })
    input?: UserListSubstituteGroupInput,
  ) {
    return this.service.userCountSubstituteGroups(user.id, input)
  }

  @Query(() => SubstituteGroup, { nullable: true })
  userSubstituteGroup(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteGroupId') substituteGroupId: string,
  ) {
    return this.service.userSubstituteGroup(info, user.id, substituteGroupId)
  }

  @Mutation(() => SubstituteGroup, { nullable: true })
  userCreateSubstituteGroup(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateSubstituteGroupInput,
  ) {
    return this.service.userCreateSubstituteGroup(info, user.id, input)
  }

  @Mutation(() => SubstituteGroup, { nullable: true })
  userUpdateSubstituteGroup(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteGroupId') substituteGroupId: string,
    @Args('input') input: UserUpdateSubstituteGroupInput,
  ) {
    return this.service.userUpdateSubstituteGroup(info, user.id, substituteGroupId, input)
  }

  @Mutation(() => SubstituteGroup, { nullable: true })
  userDeleteSubstituteGroup(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteGroupId') substituteGroupId: string,
  ) {
    return this.service.userDeleteSubstituteGroup(info, user.id, substituteGroupId)
  }
}
