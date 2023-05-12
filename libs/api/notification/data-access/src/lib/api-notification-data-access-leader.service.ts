import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateNotificationInput } from './dto/admin-create-notification.input'
import { AdminListNotificationInput } from './dto/admin-list-notification.input'
import { AdminUpdateNotificationInput } from './dto/admin-update-notification.input'

@Injectable()
export class ApiNotificationDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['message']
  private where(input: AdminListNotificationInput): Prisma.NotificationWhereInput {
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

  leaderNotifications(info: GraphQLResolveInfo, leaderId: string, input?: AdminListNotificationInput) {
    const select = new PrismaSelect(info).value
    return this.data.notification.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountNotifications(leaderId: string, input?: AdminListNotificationInput): Promise<CorePaging> {
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

  leaderNotification(info: GraphQLResolveInfo, leaderId: string, notificationId) {
    const select = new PrismaSelect(info).value
    return this.data.notification.findUnique({ where: { id: notificationId }, ...select })
  }

  leaderCreateNotification(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateNotificationInput) {
    const select = new PrismaSelect(info).value
    return this.data.notification.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateNotification(
    info: GraphQLResolveInfo,
    leaderId: string,
    notificationId,
    input: AdminUpdateNotificationInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.notification.update({
      where: { id: notificationId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteNotification(info: GraphQLResolveInfo, leaderId: string, notificationId) {
    return this.data.notification.delete({ where: { id: notificationId } })
  }
}
