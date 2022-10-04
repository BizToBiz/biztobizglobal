import { Module } from '@nestjs/common'
import { ApiMailerDataAccessService } from './api-mailer-data-access.service'
import { ApiCoreFeatureModule } from '@biztobiz/api/core/feature'

@Module({
  imports: [ApiCoreFeatureModule],
  providers: [ApiMailerDataAccessService],
  exports: [ApiMailerDataAccessService],
})
export class ApiMailerDataAccessModule {}
