import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiAttendanceReminderDataAccessAdminService } from './api-attendance-reminder-data-access-admin.service'
import { ApiAttendanceReminderDataAccessLeaderService } from './api-attendance-reminder-data-access-leader.service'
import { ApiAttendanceReminderDataAccessPublicService } from './api-attendance-reminder-data-access-public.service'
import { ApiAttendanceReminderDataAccessUserService } from './api-attendance-reminder-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiAttendanceReminderDataAccessAdminService,
    ApiAttendanceReminderDataAccessLeaderService,
    ApiAttendanceReminderDataAccessPublicService,
    ApiAttendanceReminderDataAccessUserService,
  ],
  exports: [
    ApiAttendanceReminderDataAccessAdminService,
    ApiAttendanceReminderDataAccessLeaderService,
    ApiAttendanceReminderDataAccessPublicService,
    ApiAttendanceReminderDataAccessUserService,
  ],
})
export class ApiAttendanceReminderDataAccessModule {}
