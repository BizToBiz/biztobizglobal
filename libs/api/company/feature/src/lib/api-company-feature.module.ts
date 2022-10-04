import { Module } from '@nestjs/common'
import { ApiCompanyDataAccessModule } from '@biztobiz/api/company/data-access'

import { ApiCompanyFeatureAdminResolver } from './api-company-feature-admin.resolver'
import { ApiCompanyFeatureLeaderResolver } from './api-company-feature-leader.resolver'
import { ApiCompanyFeaturePublicResolver } from './api-company-feature-public.resolver'
import { ApiCompanyFeatureUserResolver } from './api-company-feature-user.resolver'

@Module({
  imports: [ApiCompanyDataAccessModule],
  providers: [
    ApiCompanyFeatureAdminResolver,
    ApiCompanyFeatureLeaderResolver,
    ApiCompanyFeaturePublicResolver,
    ApiCompanyFeatureUserResolver,
  ],
})
export class ApiCompanyFeatureModule {}
