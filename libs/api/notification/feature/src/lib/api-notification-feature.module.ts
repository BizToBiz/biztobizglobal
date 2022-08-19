import { Module } from '@nestjs/common'
import { ApiNotificationDataAccessModule } from '@biztobiz/api/notification/data-access'

import { ApiNotificationFeatureAdminResolver } from './api-notification-feature-admin.resolver'
import { ApiNotificationFeatureLeaderResolver } from './api-notification-feature-leader.resolver'
import { ApiNotificationFeaturePublicResolver } from './api-notification-feature-public.resolver'
import { ApiNotificationFeatureUserResolver } from './api-notification-feature-user.resolver'

@Module({
  imports: [ApiNotificationDataAccessModule],
  providers: [
    ApiNotificationFeatureAdminResolver,
    ApiNotificationFeatureLeaderResolver,
    ApiNotificationFeaturePublicResolver,
    ApiNotificationFeatureUserResolver,
  ],
})
export class ApiNotificationFeatureModule {}
