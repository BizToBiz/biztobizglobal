import { Module } from '@nestjs/common'
import { ApiMeetingDataAccessModule } from '@biztobiz/api/meeting/data-access'

import { ApiMeetingFeatureAdminResolver } from './api-meeting-feature-admin.resolver'
import { ApiMeetingFeaturePublicResolver } from './api-meeting-feature-public.resolver'
import { ApiMeetingFeatureUserResolver } from './api-meeting-feature-user.resolver'

@Module({
  imports: [ApiMeetingDataAccessModule],
  providers: [ApiMeetingFeatureAdminResolver, ApiMeetingFeaturePublicResolver, ApiMeetingFeatureUserResolver],
})
export class ApiMeetingFeatureModule {}
