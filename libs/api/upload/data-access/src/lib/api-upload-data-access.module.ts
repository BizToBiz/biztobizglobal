import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiUploadDataAccessAdminService } from './api-upload-data-access-admin.service'
import { ApiUploadDataAccessPublicService } from './api-upload-data-access-public.service'
import { ApiUploadDataAccessUserService } from './api-upload-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiUploadDataAccessAdminService, ApiUploadDataAccessPublicService, ApiUploadDataAccessUserService],
  exports: [ApiUploadDataAccessAdminService, ApiUploadDataAccessPublicService, ApiUploadDataAccessUserService],
})
export class ApiUploadDataAccessModule {}
