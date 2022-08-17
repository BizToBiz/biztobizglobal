import { Module } from '@nestjs/common'
import { ApiReferralDataAccessModule } from '@biztobiz/api/referral/data-access'

import { ApiReferralFeatureAdminResolver } from './api-referral-feature-admin.resolver'
import { ApiReferralFeatureLeaderResolver } from './api-referral-feature-leader.resolver'
import { ApiReferralFeaturePublicResolver } from './api-referral-feature-public.resolver'
import { ApiReferralFeatureUserResolver } from './api-referral-feature-user.resolver'

@Module({
  imports: [ApiReferralDataAccessModule],
  providers: [
    ApiReferralFeatureAdminResolver,
    ApiReferralFeatureLeaderResolver,
    ApiReferralFeaturePublicResolver,
    ApiReferralFeatureUserResolver,
  ],
})
export class ApiReferralFeatureModule {}
