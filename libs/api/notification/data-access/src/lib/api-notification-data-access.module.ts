import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiNotificationDataAccessAdminService } from './api-notification-data-access-admin.service'
import { ApiNotificationDataAccessLeaderService } from './api-notification-data-access-leader.service'
import { ApiNotificationDataAccessPublicService } from './api-notification-data-access-public.service'
import { ApiNotificationDataAccessUserService } from './api-notification-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiNotificationDataAccessAdminService,
    ApiNotificationDataAccessLeaderService,
    ApiNotificationDataAccessPublicService,
    ApiNotificationDataAccessUserService,
  ],
  exports: [
    ApiNotificationDataAccessAdminService,
    ApiNotificationDataAccessLeaderService,
    ApiNotificationDataAccessPublicService,
    ApiNotificationDataAccessUserService,
  ],
})
export class ApiNotificationDataAccessModule {}
