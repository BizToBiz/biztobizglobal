import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiCompanyMemberDataAccessAdminService } from './api-company-member-data-access-admin.service'
import { ApiCompanyMemberDataAccessLeaderService } from './api-company-member-data-access-leader.service'
import { ApiCompanyMemberDataAccessPublicService } from './api-company-member-data-access-public.service'
import { ApiCompanyMemberDataAccessUserService } from './api-company-member-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiCompanyMemberDataAccessAdminService,
    ApiCompanyMemberDataAccessLeaderService,
    ApiCompanyMemberDataAccessPublicService,
    ApiCompanyMemberDataAccessUserService,
  ],
  exports: [
    ApiCompanyMemberDataAccessAdminService,
    ApiCompanyMemberDataAccessLeaderService,
    ApiCompanyMemberDataAccessPublicService,
    ApiCompanyMemberDataAccessUserService,
  ],
})
export class ApiCompanyMemberDataAccessModule {}
