import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateNotificationInput,
  AdminListNotificationInput,
  AdminUpdateNotificationInput,
  ApiNotificationDataAccessLeaderService,
  Notification,
} from '@biztobiz/api/notification/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiNotificationFeatureLeaderResolver {
  constructor(private readonly service: ApiNotificationDataAccessLeaderService) {}

  @Query(() => [Notification], { nullable: true })
  leaderNotifications(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListNotificationInput, nullable: true }) input?: AdminListNotificationInput,
  ) {
    return this.service.leaderNotifications(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountNotifications(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListNotificationInput, nullable: true }) input?: AdminListNotificationInput,
  ) {
    return this.service.leaderCountNotifications(leader.id, input)
  }

  @Query(() => Notification, { nullable: true })
  leaderNotification(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('notificationId') notificationId: string,
  ) {
    return this.service.leaderNotification(info, leader.id, notificationId)
  }

  @Mutation(() => Notification, { nullable: true })
  leaderCreateNotification(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateNotificationInput,
  ) {
    return this.service.leaderCreateNotification(info, leader.id, input)
  }

  @Mutation(() => Notification, { nullable: true })
  leaderUpdateNotification(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('notificationId') notificationId: string,
    @Args('input') input: AdminUpdateNotificationInput,
  ) {
    return this.service.leaderUpdateNotification(info, leader.id, notificationId, input)
  }

  @Mutation(() => Notification, { nullable: true })
  leaderDeleteNotification(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('notificationId') notificationId: string,
  ) {
    return this.service.leaderDeleteNotification(info, leader.id, notificationId)
  }
}
