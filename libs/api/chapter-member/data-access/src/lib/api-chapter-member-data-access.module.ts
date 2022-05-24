import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiChapterMemberDataAccessAdminService } from './api-chapter-member-data-access-admin.service'
import { ApiChapterMemberDataAccessPublicService } from './api-chapter-member-data-access-public.service'
import { ApiChapterMemberDataAccessUserService } from './api-chapter-member-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiChapterMemberDataAccessAdminService,
    ApiChapterMemberDataAccessPublicService,
    ApiChapterMemberDataAccessUserService,
  ],
  exports: [
    ApiChapterMemberDataAccessAdminService,
    ApiChapterMemberDataAccessPublicService,
    ApiChapterMemberDataAccessUserService,
  ],
})
export class ApiChapterMemberDataAccessModule {}
