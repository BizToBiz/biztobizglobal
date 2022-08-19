import { Resolver } from '@nestjs/graphql'
import { ApiPowerHourDataAccessPublicService, PowerHour } from '@biztobiz/api/power-hour/data-access'

@Resolver(() => PowerHour)
export class ApiPowerHourFeaturePublicResolver {
  constructor(private readonly service: ApiPowerHourDataAccessPublicService) {}
}
