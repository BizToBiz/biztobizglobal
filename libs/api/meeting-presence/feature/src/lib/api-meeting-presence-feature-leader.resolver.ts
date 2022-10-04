import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateMeetingPresenceInput,
  AdminListMeetingPresenceInput,
  AdminUpdateMeetingPresenceInput,
  ApiMeetingPresenceDataAccessLeaderService,
  MeetingPresence,
} from '@biztobiz/api/meeting-presence/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiMeetingPresenceFeatureLeaderResolver {
  constructor(private readonly service: ApiMeetingPresenceDataAccessLeaderService) {}

  @Query(() => [MeetingPresence], { nullable: true })
  leaderMeetingPresences(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListMeetingPresenceInput, nullable: true })
    input?: AdminListMeetingPresenceInput,
  ) {
    return this.service.leaderMeetingPresences(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountMeetingPresences(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListMeetingPresenceInput, nullable: true })
    input?: AdminListMeetingPresenceInput,
  ) {
    return this.service.leaderCountMeetingPresences(leader.id, input)
  }

  @Query(() => MeetingPresence, { nullable: true })
  leaderMeetingPresence(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingPresenceId') meetingPresenceId: string,
  ) {
    return this.service.leaderMeetingPresence(info, leader.id, meetingPresenceId)
  }

  @Mutation(() => MeetingPresence, { nullable: true })
  leaderCreateMeetingPresence(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateMeetingPresenceInput,
  ) {
    return this.service.leaderCreateMeetingPresence(info, leader.id, input)
  }

  @Mutation(() => MeetingPresence, { nullable: true })
  leaderUpdateMeetingPresence(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingPresenceId') meetingPresenceId: string,
    @Args('input') input: AdminUpdateMeetingPresenceInput,
  ) {
    return this.service.leaderUpdateMeetingPresence(info, leader.id, meetingPresenceId, input)
  }

  @Mutation(() => MeetingPresence, { nullable: true })
  leaderDeleteMeetingPresence(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingPresenceId') meetingPresenceId: string,
  ) {
    return this.service.leaderDeleteMeetingPresence(info, leader.id, meetingPresenceId)
  }
}
