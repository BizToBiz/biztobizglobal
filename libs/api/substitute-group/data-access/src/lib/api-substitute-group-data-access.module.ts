import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiSubstituteGroupDataAccessAdminService } from './api-substitute-group-data-access-admin.service'
import { ApiSubstituteGroupDataAccessLeaderService } from './api-substitute-group-data-access-leader.service'
import { ApiSubstituteGroupDataAccessPublicService } from './api-substitute-group-data-access-public.service'
import { ApiSubstituteGroupDataAccessUserService } from './api-substitute-group-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiSubstituteGroupDataAccessAdminService,
    ApiSubstituteGroupDataAccessLeaderService,
    ApiSubstituteGroupDataAccessPublicService,
    ApiSubstituteGroupDataAccessUserService,
  ],
  exports: [
    ApiSubstituteGroupDataAccessAdminService,
    ApiSubstituteGroupDataAccessLeaderService,
    ApiSubstituteGroupDataAccessPublicService,
    ApiSubstituteGroupDataAccessUserService,
  ],
})
export class ApiSubstituteGroupDataAccessModule {}
