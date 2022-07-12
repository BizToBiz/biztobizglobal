import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateSubstituteInput,
  UserListSubstituteInput,
  UserUpdateSubstituteInput,
  ApiSubstituteDataAccessUserService,
  Substitute,
} from '@biztobiz/api/substitute/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiSubstituteFeatureUserResolver {
  constructor(private readonly service: ApiSubstituteDataAccessUserService) {}

  @Query(() => [Substitute], { nullable: true })
  userSubstitutes(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListSubstituteInput, nullable: true }) input?: UserListSubstituteInput,
  ) {
    return this.service.userSubstitutes(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountSubstitutes(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListSubstituteInput, nullable: true }) input?: UserListSubstituteInput,
  ) {
    return this.service.userCountSubstitutes(user.id, input)
  }

  @Query(() => Substitute, { nullable: true })
  userSubstitute(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('substituteId') substituteId: string) {
    return this.service.userSubstitute(info, user.id, substituteId)
  }

  @Mutation(() => Substitute, { nullable: true })
  userCreateSubstitute(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateSubstituteInput,
  ) {
    return this.service.userCreateSubstitute(info, user.id, input)
  }

  @Mutation(() => Substitute, { nullable: true })
  userUpdateSubstitute(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteId') substituteId: string,
    @Args('input') input: UserUpdateSubstituteInput,
  ) {
    return this.service.userUpdateSubstitute(info, user.id, substituteId, input)
  }

  @Mutation(() => Substitute, { nullable: true })
  userDeleteSubstitute(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteId') substituteId: string,
  ) {
    return this.service.userDeleteSubstitute(info, user.id, substituteId)
  }
}
