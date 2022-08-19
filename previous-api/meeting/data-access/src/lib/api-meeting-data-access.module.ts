import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiMeetingDataAccessAdminService } from './api-meeting-data-access-admin.service'
import { ApiMeetingDataAccessPublicService } from './api-meeting-data-access-public.service'
import { ApiMeetingDataAccessUserService } from './api-meeting-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiMeetingDataAccessAdminService, ApiMeetingDataAccessPublicService, ApiMeetingDataAccessUserService],
  exports: [ApiMeetingDataAccessAdminService, ApiMeetingDataAccessPublicService, ApiMeetingDataAccessUserService],
})
export class ApiMeetingDataAccessModule {}
