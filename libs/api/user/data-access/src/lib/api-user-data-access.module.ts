import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiUserDataAccessAdminService } from './api-user-data-access-admin.service'
import { ApiUserDataAccessLeaderService } from './api-user-data-access-leader.service'
import { ApiUserDataAccessPublicService } from './api-user-data-access-public.service'
import { ApiUserDataAccessUserService } from './api-user-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiUserDataAccessAdminService,
    ApiUserDataAccessLeaderService,
    ApiUserDataAccessPublicService,
    ApiUserDataAccessUserService,
  ],
  exports: [
    ApiUserDataAccessAdminService,
    ApiUserDataAccessLeaderService,
    ApiUserDataAccessPublicService,
    ApiUserDataAccessUserService,
  ],
})
export class ApiUserDataAccessModule {}
