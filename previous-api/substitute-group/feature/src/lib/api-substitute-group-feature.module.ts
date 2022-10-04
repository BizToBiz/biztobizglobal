import { Module } from '@nestjs/common'
import { ApiSubstituteGroupDataAccessModule } from '@biztobiz/api/substitute-group/data-access'

import { ApiSubstituteGroupFeatureAdminResolver } from './api-substitute-group-feature-admin.resolver'
import { ApiSubstituteGroupFeaturePublicResolver } from './api-substitute-group-feature-public.resolver'
import { ApiSubstituteGroupFeatureUserResolver } from './api-substitute-group-feature-user.resolver'

@Module({
  imports: [ApiSubstituteGroupDataAccessModule],
  providers: [
    ApiSubstituteGroupFeatureAdminResolver,
    ApiSubstituteGroupFeaturePublicResolver,
    ApiSubstituteGroupFeatureUserResolver,
  ],
})
export class ApiSubstituteGroupFeatureModule {}
