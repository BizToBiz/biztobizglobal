import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiSubstituteGroupDataAccessAdminService } from './api-substitute-group-data-access-admin.service'
import { ApiSubstituteGroupDataAccessPublicService } from './api-substitute-group-data-access-public.service'
import { ApiSubstituteGroupDataAccessUserService } from './api-substitute-group-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiSubstituteGroupDataAccessAdminService,
    ApiSubstituteGroupDataAccessPublicService,
    ApiSubstituteGroupDataAccessUserService,
  ],
  exports: [
    ApiSubstituteGroupDataAccessAdminService,
    ApiSubstituteGroupDataAccessPublicService,
    ApiSubstituteGroupDataAccessUserService,
  ],
})
export class ApiSubstituteGroupDataAccessModule {}
