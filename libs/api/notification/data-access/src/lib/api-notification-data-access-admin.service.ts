import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateNotificationInput } from './dto/admin-create-notification.input'
import { AdminListNotificationInput } from './dto/admin-list-notification.input'
import { AdminUpdateNotificationInput } from './dto/admin-update-notification.input'

@Injectable()
export class ApiNotificationDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminNotifications(info: GraphQLResolveInfo, adminId: string, input?: AdminListNotificationInput) {
    const select = new PrismaSelect(info).value
    return this.data.notification.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountNotifications(adminId: string, input?: AdminListNotificationInput): Promise<CorePaging> {
    const total = await this.data.notification.count()
    return {
      take: input?.take,
      skip: input?.skip,
      total,
    }
  }

  adminNotification(info: GraphQLResolveInfo, adminId: string, notificationId) {
    const select = new PrismaSelect(info).value
    return this.data.notification.findUnique({ where: { id: notificationId }, ...select })
  }

  adminCreateNotification(info: GraphQLResolveInfo, adminId: string, input: AdminCreateNotificationInput) {
    const select = new PrismaSelect(info).value
    return this.data.notification.create({
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateNotification(
    info: GraphQLResolveInfo,
    adminId: string,
    notificationId,
    input: AdminUpdateNotificationInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.notification.update({
      where: { id: notificationId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteNotification(info: GraphQLResolveInfo, adminId: string, notificationId) {
    return this.data.notification.delete({ where: { id: notificationId } })
  }
}
