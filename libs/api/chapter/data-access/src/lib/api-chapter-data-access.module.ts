import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiChapterDataAccessAdminService } from './api-chapter-data-access-admin.service'
import { ApiChapterDataAccessLeaderService } from './api-chapter-data-access-leader.service'
import { ApiChapterDataAccessPublicService } from './api-chapter-data-access-public.service'
import { ApiChapterDataAccessUserService } from './api-chapter-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiChapterDataAccessAdminService,
    ApiChapterDataAccessLeaderService,
    ApiChapterDataAccessPublicService,
    ApiChapterDataAccessUserService,
  ],
  exports: [
    ApiChapterDataAccessAdminService,
    ApiChapterDataAccessLeaderService,
    ApiChapterDataAccessPublicService,
    ApiChapterDataAccessUserService,
  ],
})
export class ApiChapterDataAccessModule {}
