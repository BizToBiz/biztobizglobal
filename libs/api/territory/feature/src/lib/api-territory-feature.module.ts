import { Module } from '@nestjs/common'
import { ApiTerritoryDataAccessModule } from '@biztobiz/api/territory/data-access'

import { ApiTerritoryFeatureAdminResolver } from './api-territory-feature-admin.resolver'
import { ApiTerritoryFeatureLeaderResolver } from './api-territory-feature-leader.resolver'
import { ApiTerritoryFeaturePublicResolver } from './api-territory-feature-public.resolver'
import { ApiTerritoryFeatureUserResolver } from './api-territory-feature-user.resolver'

@Module({
  imports: [ApiTerritoryDataAccessModule],
  providers: [
    ApiTerritoryFeatureAdminResolver,
    ApiTerritoryFeatureLeaderResolver,
    ApiTerritoryFeaturePublicResolver,
    ApiTerritoryFeatureUserResolver,
  ],
})
export class ApiTerritoryFeatureModule {}
