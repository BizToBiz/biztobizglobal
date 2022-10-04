import { Module } from '@nestjs/common'
import { ApiAccountDataAccessModule } from '@biztobiz/api/account/data-access'
import { ApiAccountFeatureResolver } from './api-account-feature.resolver'

@Module({
  imports: [ApiAccountDataAccessModule],
  providers: [ApiAccountFeatureResolver],
})
export class ApiAccountFeatureModule {}
