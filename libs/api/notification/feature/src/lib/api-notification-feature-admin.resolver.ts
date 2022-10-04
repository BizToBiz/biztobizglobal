import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateNotificationInput,
  AdminListNotificationInput,
  AdminUpdateNotificationInput,
  ApiNotificationDataAccessAdminService,
  Notification,
} from '@biztobiz/api/notification/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiNotificationFeatureAdminResolver {
  constructor(private readonly service: ApiNotificationDataAccessAdminService) {}

  @Query(() => [Notification], { nullable: true })
  adminNotifications(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListNotificationInput, nullable: true }) input?: AdminListNotificationInput,
  ) {
    return this.service.adminNotifications(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountNotifications(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListNotificationInput, nullable: true }) input?: AdminListNotificationInput,
  ) {
    return this.service.adminCountNotifications(admin.id, input)
  }

  @Query(() => Notification, { nullable: true })
  adminNotification(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('notificationId') notificationId: string,
  ) {
    return this.service.adminNotification(info, admin.id, notificationId)
  }

  @Mutation(() => Notification, { nullable: true })
  adminCreateNotification(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateNotificationInput,
  ) {
    return this.service.adminCreateNotification(info, admin.id, input)
  }

  @Mutation(() => Notification, { nullable: true })
  adminUpdateNotification(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('notificationId') notificationId: string,
    @Args('input') input: AdminUpdateNotificationInput,
  ) {
    return this.service.adminUpdateNotification(info, admin.id, notificationId, input)
  }

  @Mutation(() => Notification, { nullable: true })
  adminDeleteNotification(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('notificationId') notificationId: string,
  ) {
    return this.service.adminDeleteNotification(info, admin.id, notificationId)
  }
}
