import { Module } from '@nestjs/common'
import { ApiReportDataAccessModule } from '@biztobiz/api/report/data-access'

import { ApiReportFeatureAdminResolver } from './api-report-feature-admin.resolver'
import { ApiReportFeaturePublicResolver } from './api-report-feature-public.resolver'
import { ApiReportFeatureUserResolver } from './api-report-feature-user.resolver'

@Module({
  imports: [ApiReportDataAccessModule],
  providers: [ApiReportFeatureAdminResolver, ApiReportFeaturePublicResolver, ApiReportFeatureUserResolver],
})
export class ApiReportFeatureModule {}
