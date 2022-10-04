import { Module } from '@nestjs/common'
import { ApiChapterMemberDataAccessModule } from '@biztobiz/api/chapter-member/data-access'

import { ApiChapterMemberFeatureAdminResolver } from './api-chapter-member-feature-admin.resolver'
import { ApiChapterMemberFeaturePublicResolver } from './api-chapter-member-feature-public.resolver'
import { ApiChapterMemberFeatureUserResolver } from './api-chapter-member-feature-user.resolver'

@Module({
  imports: [ApiChapterMemberDataAccessModule],
  providers: [
    ApiChapterMemberFeatureAdminResolver,
    ApiChapterMemberFeaturePublicResolver,
    ApiChapterMemberFeatureUserResolver,
  ],
})
export class ApiChapterMemberFeatureModule {}
