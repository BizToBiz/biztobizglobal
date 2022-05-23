import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiReportDataAccessAdminService } from './api-report-data-access-admin.service'
import { ApiReportDataAccessPublicService } from './api-report-data-access-public.service'
import { ApiReportDataAccessUserService } from './api-report-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiReportDataAccessAdminService, ApiReportDataAccessPublicService, ApiReportDataAccessUserService],
  exports: [ApiReportDataAccessAdminService, ApiReportDataAccessPublicService, ApiReportDataAccessUserService],
})
export class ApiReportDataAccessModule {}
