import { Module } from '@nestjs/common'
import { ApiAuthFeatureModule } from '@biztobiz/api/auth/feature'
import { ApiUserFeatureModule } from '@biztobiz/api/user/feature'
import { ApiCoreFeatureModule } from '@biztobiz/api/core/feature'
import { ApiSubstituteFeatureModule } from '@biztobiz/api/substitute/feature'
import { ApiAttendanceReminderFeatureModule } from '@biztobiz/api/attendance-reminder/feature'
import { ApiChapterMemberFeatureModule } from '@biztobiz/api/chapter-member/feature'
import { ApiReportFeatureModule } from '@biztobiz/api/report/feature'
import { ApiReferralFeatureModule } from '@biztobiz/api/referral/feature'
import { ApiUploadFeatureModule } from '@biztobiz/api/upload/feature'
import { ApiTransactionFeatureModule } from '@biztobiz/api/transaction/feature'
import { ApiTestimonialFeatureModule } from '@biztobiz/api/testimonial/feature'
import { ApiTerritoryFeatureModule } from '@biztobiz/api/territory/feature'
import { ApiSubstituteGroupFeatureModule } from '@biztobiz/api/substitute-group/feature'
import { ApiRegionFeatureModule } from '@biztobiz/api/region/feature'
import { ApiPowerHourFeatureModule } from '@biztobiz/api/power-hour/feature'
import { ApiNotificationFeatureModule } from '@biztobiz/api/notification/feature'
import { ApiMeetingFeatureModule } from '@biztobiz/api/meeting/feature'
import { ApiCompanyFeatureModule } from '@biztobiz/api/company/feature'
import { ApiChapterFeatureModule } from '@biztobiz/api/chapter/feature'
import { ApiAccountFeatureModule } from '@biztobiz/api/account/feature'

@Module({
  imports: [
    ApiAuthFeatureModule,
    ApiUserFeatureModule,
    ApiCoreFeatureModule,
    ApiSubstituteFeatureModule,
    ApiAttendanceReminderFeatureModule,
    ApiChapterMemberFeatureModule,
    ApiReportFeatureModule,
    ApiReferralFeatureModule,
    ApiUploadFeatureModule,
    ApiTransactionFeatureModule,
    ApiTestimonialFeatureModule,
    ApiTerritoryFeatureModule,
    ApiSubstituteGroupFeatureModule,
    ApiRegionFeatureModule,
    ApiPowerHourFeatureModule,
    ApiNotificationFeatureModule,
    ApiMeetingFeatureModule,
    ApiCompanyFeatureModule,
    ApiChapterFeatureModule,
    ApiAccountFeatureModule,
  ],
})
export class AppModule {}
