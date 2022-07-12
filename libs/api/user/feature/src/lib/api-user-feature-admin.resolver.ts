import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import {
  AdminCreateUserInput,
  AdminUpdateUserInput,
  ApiUserDataAccessService,
  User,
} from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiUserFeatureAdminResolver {
  constructor(private readonly service: ApiUserDataAccessService) {}

  @Query(() => [User], { nullable: true })
  adminUsers(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => CorePagingInput, nullable: true }) input?: CorePagingInput,
  ) {
    return this.service.adminUsers(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountUsers(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => CorePagingInput, nullable: true }) input?: CorePagingInput,
  ) {
    return this.service.adminCountUsers(admin.id, input)
  }

  @Query(() => User, { nullable: true })
  adminUser(@CtxUser() admin: User, @Args('userId') userId: string) {
    return this.service.adminUser(admin.id, userId)
  }

  @Mutation(() => User, { nullable: true })
  adminCreateUser(@CtxUser() admin: User, @Args('input') input: AdminCreateUserInput) {
    return this.service.adminCreateUser(admin.id, input)
  }

  @Mutation(() => User, { nullable: true })
  adminUpdateUser(@CtxUser() admin: User, @Args('userId') userId: string, @Args('input') input: AdminUpdateUserInput) {
    return this.service.adminUpdateUser(admin.id, userId, input)
  }

  @Mutation(() => User, { nullable: true })
  adminSetUserPassword(@CtxUser() admin: User, @Args('userId') userId: string, @Args('password') password: string) {
    return this.service.adminSetUserPassword(admin.id, userId, password)
  }

  @Mutation(() => User, { nullable: true })
  adminDeleteUser(@CtxUser() admin: User, @Args('userId') userId: string) {
    return this.service.adminDeleteUser(admin.id, userId)
  }
}
