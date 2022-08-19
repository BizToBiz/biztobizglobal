import { Module } from '@nestjs/common'
import { ApiAttendanceReminderDataAccessModule } from '@biztobiz/api/attendance-reminder/data-access'

import { ApiAttendanceReminderFeatureAdminResolver } from './api-attendance-reminder-feature-admin.resolver'
import { ApiAttendanceReminderFeaturePublicResolver } from './api-attendance-reminder-feature-public.resolver'
import { ApiAttendanceReminderFeatureUserResolver } from './api-attendance-reminder-feature-user.resolver'

@Module({
  imports: [ApiAttendanceReminderDataAccessModule],
  providers: [
    ApiAttendanceReminderFeatureAdminResolver,
    ApiAttendanceReminderFeaturePublicResolver,
    ApiAttendanceReminderFeatureUserResolver,
  ],
})
export class ApiAttendanceReminderFeatureModule {}
