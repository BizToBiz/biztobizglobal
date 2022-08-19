import { Module } from '@nestjs/common'
import { ApiTransactionDataAccessModule } from '@biztobiz/api/transaction/data-access'

import { ApiTransactionFeatureAdminResolver } from './api-transaction-feature-admin.resolver'
import { ApiTransactionFeatureLeaderResolver } from './api-transaction-feature-leader.resolver'
import { ApiTransactionFeaturePublicResolver } from './api-transaction-feature-public.resolver'
import { ApiTransactionFeatureUserResolver } from './api-transaction-feature-user.resolver'

@Module({
  imports: [ApiTransactionDataAccessModule],
  providers: [
    ApiTransactionFeatureAdminResolver,
    ApiTransactionFeatureLeaderResolver,
    ApiTransactionFeaturePublicResolver,
    ApiTransactionFeatureUserResolver,
  ],
})
export class ApiTransactionFeatureModule {}
