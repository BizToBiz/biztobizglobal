import { Module } from '@nestjs/common'
import { ApiChapterDataAccessModule } from '@biztobiz/api/chapter/data-access'

import { ApiChapterFeatureAdminResolver } from './api-chapter-feature-admin.resolver'
import { ApiChapterFeatureLeaderResolver } from './api-chapter-feature-leader.resolver'
import { ApiChapterFeaturePublicResolver } from './api-chapter-feature-public.resolver'
import { ApiChapterFeatureUserResolver } from './api-chapter-feature-user.resolver'

@Module({
  imports: [ApiChapterDataAccessModule],
  providers: [
    ApiChapterFeatureAdminResolver,
    ApiChapterFeatureLeaderResolver,
    ApiChapterFeaturePublicResolver,
    ApiChapterFeatureUserResolver,
  ],
})
export class ApiChapterFeatureModule {}
