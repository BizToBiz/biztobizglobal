import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiMeetingPresenceDataAccessAdminService } from './api-meeting-presence-data-access-admin.service'
import { ApiMeetingPresenceDataAccessLeaderService } from './api-meeting-presence-data-access-leader.service'
import { ApiMeetingPresenceDataAccessPublicService } from './api-meeting-presence-data-access-public.service'
import { ApiMeetingPresenceDataAccessUserService } from './api-meeting-presence-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiMeetingPresenceDataAccessAdminService,
    ApiMeetingPresenceDataAccessLeaderService,
    ApiMeetingPresenceDataAccessPublicService,
    ApiMeetingPresenceDataAccessUserService,
  ],
  exports: [
    ApiMeetingPresenceDataAccessAdminService,
    ApiMeetingPresenceDataAccessLeaderService,
    ApiMeetingPresenceDataAccessPublicService,
    ApiMeetingPresenceDataAccessUserService,
  ],
})
export class ApiMeetingPresenceDataAccessModule {}
