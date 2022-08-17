import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiUploadDataAccessAdminService } from './api-upload-data-access-admin.service'
import { ApiUploadDataAccessLeaderService } from './api-upload-data-access-leader.service'
import { ApiUploadDataAccessPublicService } from './api-upload-data-access-public.service'
import { ApiUploadDataAccessUserService } from './api-upload-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiUploadDataAccessAdminService,
    ApiUploadDataAccessLeaderService,
    ApiUploadDataAccessPublicService,
    ApiUploadDataAccessUserService,
  ],
  exports: [
    ApiUploadDataAccessAdminService,
    ApiUploadDataAccessLeaderService,
    ApiUploadDataAccessPublicService,
    ApiUploadDataAccessUserService,
  ],
})
export class ApiUploadDataAccessModule {}
