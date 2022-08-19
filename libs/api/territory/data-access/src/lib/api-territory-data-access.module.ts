import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiTerritoryDataAccessAdminService } from './api-territory-data-access-admin.service'
import { ApiTerritoryDataAccessLeaderService } from './api-territory-data-access-leader.service'
import { ApiTerritoryDataAccessPublicService } from './api-territory-data-access-public.service'
import { ApiTerritoryDataAccessUserService } from './api-territory-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiTerritoryDataAccessAdminService,
    ApiTerritoryDataAccessLeaderService,
    ApiTerritoryDataAccessPublicService,
    ApiTerritoryDataAccessUserService,
  ],
  exports: [
    ApiTerritoryDataAccessAdminService,
    ApiTerritoryDataAccessLeaderService,
    ApiTerritoryDataAccessPublicService,
    ApiTerritoryDataAccessUserService,
  ],
})
export class ApiTerritoryDataAccessModule {}
