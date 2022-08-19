import { Module } from '@nestjs/common'
import { ApiRegionDataAccessModule } from '@biztobiz/api/region/data-access'

import { ApiRegionFeatureAdminResolver } from './api-region-feature-admin.resolver'
import { ApiRegionFeatureLeaderResolver } from './api-region-feature-leader.resolver'
import { ApiRegionFeaturePublicResolver } from './api-region-feature-public.resolver'
import { ApiRegionFeatureUserResolver } from './api-region-feature-user.resolver'

@Module({
  imports: [ApiRegionDataAccessModule],
  providers: [
    ApiRegionFeatureAdminResolver,
    ApiRegionFeatureLeaderResolver,
    ApiRegionFeaturePublicResolver,
    ApiRegionFeatureUserResolver,
  ],
})
export class ApiRegionFeatureModule {}
