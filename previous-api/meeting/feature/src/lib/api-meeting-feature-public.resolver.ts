import { Resolver } from '@nestjs/graphql'
import { ApiMeetingDataAccessPublicService, Meeting } from '@biztobiz/api/meeting/data-access'

@Resolver(() => Meeting)
export class ApiMeetingFeaturePublicResolver {
  constructor(private readonly service: ApiMeetingDataAccessPublicService) {}
}
