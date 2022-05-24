import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { UserCreateNotificationInput } from './dto/user-create-notification.input'
import { UserListNotificationInput } from './dto/user-list-notification.input'
import { UserUpdateNotificationInput } from './dto/user-update-notification.input'

@Injectable()
export class ApiNotificationDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userNotifications(info: GraphQLResolveInfo, userId: string, input?: UserListNotificationInput) {
    const select = new PrismaSelect(info).value
    return this.data.notification.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountNotifications(userId: string, input?: UserListNotificationInput): Promise<CorePaging> {
    const total = await this.data.notification.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  userNotification(info: GraphQLResolveInfo, userId: string, notificationId) {
    const select = new PrismaSelect(info).value
    return this.data.notification.findUnique({ where: { id: notificationId }, ...select })
  }

  userCreateNotification(info: GraphQLResolveInfo, userId: string, input: UserCreateNotificationInput) {
    const select = new PrismaSelect(info).value
    return this.data.notification.create({
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateNotification(info: GraphQLResolveInfo, userId: string, notificationId, input: UserUpdateNotificationInput) {
    const select = new PrismaSelect(info).value
    return this.data.notification.update({
      where: { id: notificationId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteNotification(info: GraphQLResolveInfo, userId: string, notificationId) {
    return this.data.notification.delete({ where: { id: notificationId } })
  }
}
