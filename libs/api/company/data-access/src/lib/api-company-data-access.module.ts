import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiCompanyDataAccessAdminService } from './api-company-data-access-admin.service'
import { ApiCompanyDataAccessPublicService } from './api-company-data-access-public.service'
import { ApiCompanyDataAccessUserService } from './api-company-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiCompanyDataAccessAdminService, ApiCompanyDataAccessPublicService, ApiCompanyDataAccessUserService],
  exports: [ApiCompanyDataAccessAdminService, ApiCompanyDataAccessPublicService, ApiCompanyDataAccessUserService],
})
export class ApiCompanyDataAccessModule {}
