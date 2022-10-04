import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiMeetingDataAccessPublicService, Meeting } from '@biztobiz/api/meeting/data-access'

@Resolver(() => Meeting)
export class ApiMeetingFeaturePublicResolver {
  constructor(private readonly service: ApiMeetingDataAccessPublicService) {}

  @ResolveField(() => String, { nullable: true })
  name(@Parent() meeting: Meeting) {
    return `${meeting?.chapter?.name} - ${meeting?.date.toString()}`
  }
}
