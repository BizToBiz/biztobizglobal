import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiMeetingPresenceDataAccessPublicService, MeetingPresence } from '@biztobiz/api/meeting-presence/data-access'

@Resolver(() => MeetingPresence)
export class ApiMeetingPresenceFeaturePublicResolver {
  constructor(private readonly service: ApiMeetingPresenceDataAccessPublicService) {}

  @ResolveField(() => String, { nullable: true })
  name(@Parent() presence: MeetingPresence) {
    return `${presence?.member?.firstName} ${presence?.member?.lastName} at Meeting ID: ${presence?.meeting?.id}`
  }
}
