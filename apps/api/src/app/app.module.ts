import { Module } from '@nestjs/common'
import { ApiAuthFeatureModule } from '@biztobiz/api/auth/feature'
import { ApiCoreFeatureModule } from '@biztobiz/api/core/feature'
import { ApiUserFeatureModule } from '@biztobiz/api/user/feature'
import { ApiAccountFeatureModule } from '@biztobiz/api/account/feature'

@Module({
  imports: [ApiAuthFeatureModule, ApiCoreFeatureModule, ApiUserFeatureModule, ApiAccountFeatureModule],
})
export class AppModule {}
