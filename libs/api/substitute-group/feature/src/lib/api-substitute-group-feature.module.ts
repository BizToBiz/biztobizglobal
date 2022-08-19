import { Module } from '@nestjs/common'
import { ApiSubstituteGroupDataAccessModule } from '@biztobiz/api/substitute-group/data-access'

import { ApiSubstituteGroupFeatureAdminResolver } from './api-substitute-group-feature-admin.resolver'
import { ApiSubstituteGroupFeatureLeaderResolver } from './api-substitute-group-feature-leader.resolver'
import { ApiSubstituteGroupFeaturePublicResolver } from './api-substitute-group-feature-public.resolver'
import { ApiSubstituteGroupFeatureUserResolver } from './api-substitute-group-feature-user.resolver'

@Module({
  imports: [ApiSubstituteGroupDataAccessModule],
  providers: [
    ApiSubstituteGroupFeatureAdminResolver,
    ApiSubstituteGroupFeatureLeaderResolver,
    ApiSubstituteGroupFeaturePublicResolver,
    ApiSubstituteGroupFeatureUserResolver,
  ],
})
export class ApiSubstituteGroupFeatureModule {}
