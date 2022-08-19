import { Module } from '@nestjs/common'
import { ApiUploadDataAccessModule } from '@biztobiz/api/upload/data-access'

import { ApiUploadFeatureAdminResolver } from './api-upload-feature-admin.resolver'
import { ApiUploadFeatureLeaderResolver } from './api-upload-feature-leader.resolver'
import { ApiUploadFeaturePublicResolver } from './api-upload-feature-public.resolver'
import { ApiUploadFeatureUserResolver } from './api-upload-feature-user.resolver'

@Module({
  imports: [ApiUploadDataAccessModule],
  providers: [
    ApiUploadFeatureAdminResolver,
    ApiUploadFeatureLeaderResolver,
    ApiUploadFeaturePublicResolver,
    ApiUploadFeatureUserResolver,
  ],
})
export class ApiUploadFeatureModule {}
