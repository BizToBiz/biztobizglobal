import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiSubstituteDataAccessAdminService } from './api-substitute-data-access-admin.service'
import { ApiSubstituteDataAccessPublicService } from './api-substitute-data-access-public.service'
import { ApiSubstituteDataAccessUserService } from './api-substitute-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiSubstituteDataAccessAdminService,
    ApiSubstituteDataAccessPublicService,
    ApiSubstituteDataAccessUserService,
  ],
  exports: [
    ApiSubstituteDataAccessAdminService,
    ApiSubstituteDataAccessPublicService,
    ApiSubstituteDataAccessUserService,
  ],
})
export class ApiSubstituteDataAccessModule {}
