import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiCompanyDataAccessAdminService } from './api-company-data-access-admin.service'
import { ApiCompanyDataAccessLeaderService } from './api-company-data-access-leader.service'
import { ApiCompanyDataAccessPublicService } from './api-company-data-access-public.service'
import { ApiCompanyDataAccessUserService } from './api-company-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiCompanyDataAccessAdminService,
    ApiCompanyDataAccessLeaderService,
    ApiCompanyDataAccessPublicService,
    ApiCompanyDataAccessUserService,
  ],
  exports: [
    ApiCompanyDataAccessAdminService,
    ApiCompanyDataAccessLeaderService,
    ApiCompanyDataAccessPublicService,
    ApiCompanyDataAccessUserService,
  ],
})
export class ApiCompanyDataAccessModule {}
