import { Module } from '@nestjs/common'
import { ApiMeetingPresenceDataAccessModule } from '@biztobiz/api/meeting-presence/data-access'

import { ApiMeetingPresenceFeatureAdminResolver } from './api-meeting-presence-feature-admin.resolver'
import { ApiMeetingPresenceFeatureLeaderResolver } from './api-meeting-presence-feature-leader.resolver'
import { ApiMeetingPresenceFeaturePublicResolver } from './api-meeting-presence-feature-public.resolver'
import { ApiMeetingPresenceFeatureUserResolver } from './api-meeting-presence-feature-user.resolver'

@Module({
  imports: [ApiMeetingPresenceDataAccessModule],
  providers: [
    ApiMeetingPresenceFeatureAdminResolver,
    ApiMeetingPresenceFeatureLeaderResolver,
    ApiMeetingPresenceFeaturePublicResolver,
    ApiMeetingPresenceFeatureUserResolver,
  ],
})
export class ApiMeetingPresenceFeatureModule {}
