import { Module } from '@nestjs/common'
import { ApiSubstituteDataAccessModule } from '@biztobiz/api/substitute/data-access'

import { ApiSubstituteFeatureAdminResolver } from './api-substitute-feature-admin.resolver'
import { ApiSubstituteFeaturePublicResolver } from './api-substitute-feature-public.resolver'
import { ApiSubstituteFeatureUserResolver } from './api-substitute-feature-user.resolver'

@Module({
  imports: [ApiSubstituteDataAccessModule],
  providers: [ApiSubstituteFeatureAdminResolver, ApiSubstituteFeaturePublicResolver, ApiSubstituteFeatureUserResolver],
})
export class ApiSubstituteFeatureModule {}
