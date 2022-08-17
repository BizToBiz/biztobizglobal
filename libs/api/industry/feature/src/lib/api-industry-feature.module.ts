import { Module } from '@nestjs/common'
import { ApiIndustryDataAccessModule } from '@biztobiz/api/industry/data-access'

import { ApiIndustryFeatureAdminResolver } from './api-industry-feature-admin.resolver'
import { ApiIndustryFeatureLeaderResolver } from './api-industry-feature-leader.resolver'
import { ApiIndustryFeaturePublicResolver } from './api-industry-feature-public.resolver'
import { ApiIndustryFeatureUserResolver } from './api-industry-feature-user.resolver'

@Module({
  imports: [ApiIndustryDataAccessModule],
  providers: [
    ApiIndustryFeatureAdminResolver,
    ApiIndustryFeatureLeaderResolver,
    ApiIndustryFeaturePublicResolver,
    ApiIndustryFeatureUserResolver,
  ],
})
export class ApiIndustryFeatureModule {}
