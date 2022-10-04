import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateUserInput,
  AdminListUserInput,
  AdminUpdateUserInput,
  ApiUserDataAccessAdminService,
  User,
} from '@biztobiz/api/user/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiUserFeatureAdminResolver {
  constructor(private readonly service: ApiUserDataAccessAdminService) {}

  @Query(() => [User], { nullable: true })
  adminUsers(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListUserInput, nullable: true }) input?: AdminListUserInput,
  ) {
    return this.service.adminUsers(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountUsers(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListUserInput, nullable: true }) input?: AdminListUserInput,
  ) {
    return this.service.adminCountUsers(admin.id, input)
  }

  @Query(() => User, { nullable: true })
  adminUser(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('userId') userId: string) {
    return this.service.adminUser(info, admin.id, userId)
  }

  @Mutation(() => User, { nullable: true })
  adminCreateUser(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateUserInput,
  ) {
    return this.service.adminCreateUser(info, admin.id, input)
  }

  @Mutation(() => User, { nullable: true })
  adminUpdateUser(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('userId') userId: string,
    @Args('input') input: AdminUpdateUserInput,
  ) {
    return this.service.adminUpdateUser(info, admin.id, userId, input)
  }

  @Mutation(() => User, { nullable: true })
  adminDeleteUser(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('userId') userId: string) {
    return this.service.adminDeleteUser(info, admin.id, userId)
  }
}
