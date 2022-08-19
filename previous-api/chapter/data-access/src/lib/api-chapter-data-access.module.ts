import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiChapterDataAccessAdminService } from './api-chapter-data-access-admin.service'
import { ApiChapterDataAccessPublicService } from './api-chapter-data-access-public.service'
import { ApiChapterDataAccessUserService } from './api-chapter-data-access-user.service'
import { ApiChapterDataAccessLeaderService } from './api-chapter-data-access-leader.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiChapterDataAccessAdminService,
    ApiChapterDataAccessPublicService,
    ApiChapterDataAccessLeaderService,
    ApiChapterDataAccessUserService,
  ],
  exports: [
    ApiChapterDataAccessAdminService,
    ApiChapterDataAccessPublicService,
    ApiChapterDataAccessLeaderService,
    ApiChapterDataAccessUserService,
  ],
})
export class ApiChapterDataAccessModule {}
