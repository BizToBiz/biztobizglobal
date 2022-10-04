import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiIndustryDataAccessAdminService } from './api-industry-data-access-admin.service'
import { ApiIndustryDataAccessLeaderService } from './api-industry-data-access-leader.service'
import { ApiIndustryDataAccessPublicService } from './api-industry-data-access-public.service'
import { ApiIndustryDataAccessUserService } from './api-industry-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiIndustryDataAccessAdminService,
    ApiIndustryDataAccessLeaderService,
    ApiIndustryDataAccessPublicService,
    ApiIndustryDataAccessUserService,
  ],
  exports: [
    ApiIndustryDataAccessAdminService,
    ApiIndustryDataAccessLeaderService,
    ApiIndustryDataAccessPublicService,
    ApiIndustryDataAccessUserService,
  ],
})
export class ApiIndustryDataAccessModule {}
