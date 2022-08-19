import { Module } from '@nestjs/common'
import { ApiCompanyMemberDataAccessModule } from '@biztobiz/api/company-member/data-access'

import { ApiCompanyMemberFeatureAdminResolver } from './api-company-member-feature-admin.resolver'
import { ApiCompanyMemberFeatureLeaderResolver } from './api-company-member-feature-leader.resolver'
import { ApiCompanyMemberFeaturePublicResolver } from './api-company-member-feature-public.resolver'
import { ApiCompanyMemberFeatureUserResolver } from './api-company-member-feature-user.resolver'

@Module({
  imports: [ApiCompanyMemberDataAccessModule],
  providers: [
    ApiCompanyMemberFeatureAdminResolver,
    ApiCompanyMemberFeatureLeaderResolver,
    ApiCompanyMemberFeaturePublicResolver,
    ApiCompanyMemberFeatureUserResolver,
  ],
})
export class ApiCompanyMemberFeatureModule {}
