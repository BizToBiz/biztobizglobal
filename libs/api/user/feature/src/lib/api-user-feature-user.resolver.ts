import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateUserInput,
  UserListUserInput,
  UserUpdateUserInput,
  ApiUserDataAccessUserService,
  User,
} from '@biztobiz/api/user/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

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
    return this.service.userCountUsers(user.id, input)
  }

  @Query(() => User, { nullable: true })
  userUser(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('userId') userId: string) {
    return this.service.userUser(info, user.id, userId)
  }

  @Mutation(() => User, { nullable: true })
  userCreateUser(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('input') input: UserCreateUserInput) {
    return this.service.userCreateUser(info, user.id, input)
  }

  @Mutation(() => User, { nullable: true })
  userUpdateUser(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('userId') userId: string,
    @Args('input') input: UserUpdateUserInput,
  ) {
    return this.service.userUpdateUser(info, user.id, userId, input)
  }

  @Mutation(() => User, { nullable: true })
  userDeleteUser(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('userId') userId: string) {
    return this.service.userDeleteUser(info, user.id, userId)
  }
}
