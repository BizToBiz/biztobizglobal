import { Module } from '@nestjs/common'
import { ApiChapterMemberDataAccessModule } from '@biztobiz/api/chapter-member/data-access'

import { ApiChapterMemberFeatureAdminResolver } from './api-chapter-member-feature-admin.resolver'
import { ApiChapterMemberFeatureLeaderResolver } from './api-chapter-member-feature-leader.resolver'
import { ApiChapterMemberFeaturePublicResolver } from './api-chapter-member-feature-public.resolver'
import { ApiChapterMemberFeatureUserResolver } from './api-chapter-member-feature-user.resolver'

@Module({
  imports: [ApiChapterMemberDataAccessModule],
  providers: [
    ApiChapterMemberFeatureAdminResolver,
    ApiChapterMemberFeatureLeaderResolver,
    ApiChapterMemberFeaturePublicResolver,
    ApiChapterMemberFeatureUserResolver,
  ],
})
export class ApiChapterMemberFeatureModule {}
