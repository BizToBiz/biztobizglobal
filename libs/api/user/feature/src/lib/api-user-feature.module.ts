import { Module } from '@nestjs/common'
import { ApiUserDataAccessModule } from '@biztobiz/api/user/data-access'

import { ApiUserFeatureAdminResolver } from './api-user-feature-admin.resolver'
import { ApiUserFeatureLeaderResolver } from './api-user-feature-leader.resolver'
import { ApiUserFeaturePublicResolver } from './api-user-feature-public.resolver'
import { ApiUserFeatureUserResolver } from './api-user-feature-user.resolver'

@Module({
  imports: [ApiUserDataAccessModule],
  providers: [
    ApiUserFeatureAdminResolver,
    ApiUserFeatureLeaderResolver,
    ApiUserFeaturePublicResolver,
    ApiUserFeatureUserResolver,
  ],
})
export class ApiUserFeatureModule {}
