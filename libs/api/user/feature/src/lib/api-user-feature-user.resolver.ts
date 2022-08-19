import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  ApiUserDataAccessUserService,
  User,
  UserCreateUserInput,
  UserListUserInput,
  UserUpdateUserInput,
} from '@biztobiz/api/user/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'

@Resolver()
export class ApiUserFeatureUserResolver {
  constructor(private readonly service: ApiUserDataAccessUserService) {}

  @Query(() => [User], { nullable: true })
  userUsers(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListUserInput, nullable: true }) input?: UserListUserInput,
  ) {
    return this.service.userUsers(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountUsers(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListUserInput, nullable: true }) input?: UserListUserInput,
  ) {
    return this.service.userCountUsers(input)
  }

  @Query(() => User, { nullable: true })
  userUser(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('userId') userId: string) {
    return this.service.userUser(info, userId)
  }

  @Mutation(() => User, { nullable: true })
  userCreateUser(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('input') input: UserCreateUserInput) {
    return this.service.userCreateUser(info, input)
  }

  @Mutation(() => User, { nullable: true })
  userUpdateUser(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('userId') userId: string,
    @Args('input') input: UserUpdateUserInput,
  ) {
    return this.service.userUpdateUser(info, userId, input)
  }

  @Mutation(() => User, { nullable: true })
  userDeleteUser(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('userId') userId: string) {
    return this.service.userDeleteUser(info, userId)
  }
}
