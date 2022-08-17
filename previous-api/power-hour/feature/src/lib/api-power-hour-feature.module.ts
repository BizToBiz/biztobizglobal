import { Module } from '@nestjs/common'
import { ApiPowerHourDataAccessModule } from '@biztobiz/api/power-hour/data-access'

import { ApiPowerHourFeatureAdminResolver } from './api-power-hour-feature-admin.resolver'
import { ApiPowerHourFeaturePublicResolver } from './api-power-hour-feature-public.resolver'
import { ApiPowerHourFeatureUserResolver } from './api-power-hour-feature-user.resolver'

@Module({
  imports: [ApiPowerHourDataAccessModule],
  providers: [ApiPowerHourFeatureAdminResolver, ApiPowerHourFeaturePublicResolver, ApiPowerHourFeatureUserResolver],
})
export class ApiPowerHourFeatureModule {}
