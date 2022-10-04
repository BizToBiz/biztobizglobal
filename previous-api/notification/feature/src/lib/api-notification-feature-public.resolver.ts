import { Resolver } from '@nestjs/graphql'
import { ApiNotificationDataAccessPublicService, Notification } from '@biztobiz/api/notification/data-access'

@Resolver(() => Notification)
export class ApiNotificationFeaturePublicResolver {
  constructor(private readonly service: ApiNotificationDataAccessPublicService) {}
}
