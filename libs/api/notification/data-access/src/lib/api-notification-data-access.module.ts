import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiNotificationDataAccessAdminService } from './api-notification-data-access-admin.service'
import { ApiNotificationDataAccessPublicService } from './api-notification-data-access-public.service'
import { ApiNotificationDataAccessUserService } from './api-notification-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiNotificationDataAccessAdminService,
    ApiNotificationDataAccessPublicService,
    ApiNotificationDataAccessUserService,
  ],
  exports: [
    ApiNotificationDataAccessAdminService,
    ApiNotificationDataAccessPublicService,
    ApiNotificationDataAccessUserService,
  ],
})
export class ApiNotificationDataAccessModule {}
