import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiReferralDataAccessAdminService } from './api-referral-data-access-admin.service'
import { ApiReferralDataAccessLeaderService } from './api-referral-data-access-leader.service'
import { ApiReferralDataAccessPublicService } from './api-referral-data-access-public.service'
import { ApiReferralDataAccessUserService } from './api-referral-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiReferralDataAccessAdminService,
    ApiReferralDataAccessLeaderService,
    ApiReferralDataAccessPublicService,
    ApiReferralDataAccessUserService,
  ],
  exports: [
    ApiReferralDataAccessAdminService,
    ApiReferralDataAccessLeaderService,
    ApiReferralDataAccessPublicService,
    ApiReferralDataAccessUserService,
  ],
})
export class ApiReferralDataAccessModule {}
