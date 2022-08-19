import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiTransactionDataAccessAdminService } from './api-transaction-data-access-admin.service'
import { ApiTransactionDataAccessLeaderService } from './api-transaction-data-access-leader.service'
import { ApiTransactionDataAccessPublicService } from './api-transaction-data-access-public.service'
import { ApiTransactionDataAccessUserService } from './api-transaction-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiTransactionDataAccessAdminService,
    ApiTransactionDataAccessLeaderService,
    ApiTransactionDataAccessPublicService,
    ApiTransactionDataAccessUserService,
  ],
  exports: [
    ApiTransactionDataAccessAdminService,
    ApiTransactionDataAccessLeaderService,
    ApiTransactionDataAccessPublicService,
    ApiTransactionDataAccessUserService,
  ],
})
export class ApiTransactionDataAccessModule {}
