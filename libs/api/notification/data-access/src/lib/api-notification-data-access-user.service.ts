import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateNotificationInput } from './dto/user-create-notification.input'
import { UserListNotificationInput } from './dto/user-list-notification.input'
import { UserUpdateNotificationInput } from './dto/user-update-notification.input'

@Injectable()
export class ApiNotificationDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['message']
  private where(input: UserListNotificationInput): Prisma.NotificationWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for notification
      // if (input?.regionId) {
      //   return { regionId: input.regionId }
      // }
      // if (input?.memberId) {
      //   return { members: { some: { id: input.memberId } } }
      // }
      return null
    }
    return {
      AND: [
        relationalSearch(),
        ...terms.map((term) => ({
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: Prisma.QueryMode.insensitive } })),
        })),
      ],
    }
  }

  userNotifications(info: GraphQLResolveInfo, userId: string, input?: UserListNotificationInput) {
    const select = new PrismaSelect(info).value
    return this.data.notification.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountNotifications(userId: string, input?: UserListNotificationInput): Promise<CorePaging> {
    const total = await this.data.notification.count()
    const count = await this.data.notification.count({ where: this.where(input) })
    const take = input?.take || 10
    const skip = input?.skip || 0
    const page = Math.floor(skip / take)
    return {
      take,
      skip,
      page,
      count,
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
      data: { ...input },
      ...select,
    })
  }

  userUpdateNotification(info: GraphQLResolveInfo, userId: string, notificationId, input: UserUpdateNotificationInput) {
    const select = new PrismaSelect(info).value
    return this.data.notification.update({
      where: { id: notificationId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteNotification(info: GraphQLResolveInfo, userId: string, notificationId) {
    return this.data.notification.delete({ where: { id: notificationId } })
  }
}
