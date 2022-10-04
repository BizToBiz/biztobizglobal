import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiRegionDataAccessAdminService } from './api-region-data-access-admin.service'
import { ApiRegionDataAccessLeaderService } from './api-region-data-access-leader.service'
import { ApiRegionDataAccessPublicService } from './api-region-data-access-public.service'
import { ApiRegionDataAccessUserService } from './api-region-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiRegionDataAccessAdminService,
    ApiRegionDataAccessLeaderService,
    ApiRegionDataAccessPublicService,
    ApiRegionDataAccessUserService,
  ],
  exports: [
    ApiRegionDataAccessAdminService,
    ApiRegionDataAccessLeaderService,
    ApiRegionDataAccessPublicService,
    ApiRegionDataAccessUserService,
  ],
})
export class ApiRegionDataAccessModule {}
