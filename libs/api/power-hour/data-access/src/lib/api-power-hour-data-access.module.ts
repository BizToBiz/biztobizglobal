import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@biztobiz/api/core/data-access'

import { ApiPowerHourDataAccessAdminService } from './api-power-hour-data-access-admin.service'
import { ApiPowerHourDataAccessLeaderService } from './api-power-hour-data-access-leader.service'
import { ApiPowerHourDataAccessPublicService } from './api-power-hour-data-access-public.service'
import { ApiPowerHourDataAccessUserService } from './api-power-hour-data-access-user.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [
    ApiPowerHourDataAccessAdminService,
    ApiPowerHourDataAccessLeaderService,
    ApiPowerHourDataAccessPublicService,
    ApiPowerHourDataAccessUserService,
  ],
  exports: [
    ApiPowerHourDataAccessAdminService,
    ApiPowerHourDataAccessLeaderService,
    ApiPowerHourDataAccessPublicService,
    ApiPowerHourDataAccessUserService,
  ],
})
export class ApiPowerHourDataAccessModule {}
