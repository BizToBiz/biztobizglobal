import { Resolver } from '@nestjs/graphql'
import { ApiMeetingPresenceDataAccessPublicService, MeetingPresence } from '@biztobiz/api/meeting-presence/data-access'

@Resolver(() => MeetingPresence)
export class ApiMeetingPresenceFeaturePublicResolver {
  constructor(private readonly service: ApiMeetingPresenceDataAccessPublicService) {}
}
