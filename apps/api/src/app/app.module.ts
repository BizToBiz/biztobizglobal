import { Module } from '@nestjs/common'
import { ApiAuthFeatureModule } from '@biztobiz/api/auth/feature'
import { ApiCoreFeatureModule } from '@biztobiz/api/core/feature'
import { ApiUserFeatureModule } from '@biztobiz/api/user/feature'
import { ApiAccountFeatureModule } from '@biztobiz/api/account/feature'
import { ApiChapterMemberFeatureModule } from '@biztobiz/api/chapter-member/feature'
import { ApiChapterFeatureModule } from '@biztobiz/api/chapter/feature'
import { ApiMeetingFeatureModule } from '@biztobiz/api/meeting/feature'
import { ApiMeetingPresenceFeatureModule } from '@biztobiz/api/meeting-presence/feature'
import { ApiSubstituteFeatureModule } from '@biztobiz/api/substitute/feature'
import { ApiAttendanceReminderFeatureModule } from '@biztobiz/api/attendance-reminder/feature'
import { ApiUploadFeatureModule } from '@biztobiz/api/upload/feature'
import { ApiSubstituteGroupFeatureModule } from '@biztobiz/api/substitute-group/feature'

import { ApiTerritoryFeatureModule } from '@biztobiz/api/territory/feature'
// Add Imports Here

@Module({
  imports: [
    ApiAuthFeatureModule,
    ApiCoreFeatureModule,
    ApiUserFeatureModule,
    ApiAccountFeatureModule,
    ApiChapterMemberFeatureModule,
    ApiChapterFeatureModule,
    ApiMeetingFeatureModule,
    ApiMeetingPresenceFeatureModule,
    ApiSubstituteFeatureModule,
    ApiAttendanceReminderFeatureModule,
    ApiUploadFeatureModule,
    ApiSubstituteGroupFeatureModule,
    ApiTerritoryFeatureModule,
    // Add Modules Here
  ],
})
export class AppModule {}
