import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiSmsDataAccessAdminService } from './api-sms-data-access-admin.service'
import { ApiSmsDataAccessPublicService } from './api-sms-data-access-public.service'
import { ApiSmsDataAccessUserService } from './api-sms-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiSmsDataAccessAdminService, ApiSmsDataAccessPublicService, ApiSmsDataAccessUserService],
  exports: [ApiSmsDataAccessAdminService, ApiSmsDataAccessPublicService, ApiSmsDataAccessUserService],
})
export class ApiSmsDataAccessModule {}
