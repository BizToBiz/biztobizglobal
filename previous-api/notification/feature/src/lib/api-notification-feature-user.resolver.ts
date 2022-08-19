import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  ApiNotificationDataAccessUserService,
  Notification,
  UserCreateNotificationInput,
  UserListNotificationInput,
  UserUpdateNotificationInput,
} from '@biztobiz/api/notification/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiNotificationFeatureUserResolver {
  constructor(private readonly service: ApiNotificationDataAccessUserService) {}

  @Query(() => [Notification], { nullable: true })
  userNotifications(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListNotificationInput, nullable: true }) input?: UserListNotificationInput,
  ) {
    return this.service.userNotifications(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountNotifications(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListNotificationInput, nullable: true }) input?: UserListNotificationInput,
  ) {
    return this.service.userCountNotifications(user.id, input)
  }

  @Query(() => Notification, { nullable: true })
  userNotification(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('notificationId') notificationId: string,
  ) {
    return this.service.userNotification(info, user.id, notificationId)
  }

  @Mutation(() => Notification, { nullable: true })
  userCreateNotification(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateNotificationInput,
  ) {
    return this.service.userCreateNotification(info, user.id, input)
  }

  @Mutation(() => Notification, { nullable: true })
  userUpdateNotification(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('notificationId') notificationId: string,
    @Args('input') input: UserUpdateNotificationInput,
  ) {
    return this.service.userUpdateNotification(info, user.id, notificationId, input)
  }

  @Mutation(() => Notification, { nullable: true })
  userDeleteNotification(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('notificationId') notificationId: string,
  ) {
    return this.service.userDeleteNotification(info, user.id, notificationId)
  }
}
