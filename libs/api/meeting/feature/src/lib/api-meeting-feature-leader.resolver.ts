import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateMeetingInput,
  AdminListMeetingInput,
  AdminUpdateMeetingInput,
  ApiMeetingDataAccessLeaderService,
  Meeting,
} from '@biztobiz/api/meeting/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiMeetingFeatureLeaderResolver {
  constructor(private readonly service: ApiMeetingDataAccessLeaderService) {}

  @Query(() => [Meeting], { nullable: true })
  leaderMeetings(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListMeetingInput, nullable: true }) input?: AdminListMeetingInput,
  ) {
    return this.service.leaderMeetings(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountMeetings(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListMeetingInput, nullable: true }) input?: AdminListMeetingInput,
  ) {
    return this.service.leaderCountMeetings(leader.id, input)
  }

  @Query(() => Meeting, { nullable: true })
  leaderMeeting(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('meetingId') meetingId: string) {
    return this.service.leaderMeeting(info, leader.id, meetingId)
  }

  @Mutation(() => Meeting, { nullable: true })
  leaderCreateMeeting(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateMeetingInput,
  ) {
    return this.service.leaderCreateMeeting(info, leader.id, input)
  }

  @Mutation(() => Meeting, { nullable: true })
  leaderUpdateMeeting(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingId') meetingId: string,
    @Args('input') input: AdminUpdateMeetingInput,
  ) {
    return this.service.leaderUpdateMeeting(info, leader.id, meetingId, input)
  }

  @Mutation(() => Meeting, { nullable: true })
  leaderDeleteMeeting(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('meetingId') meetingId: string) {
    return this.service.leaderDeleteMeeting(info, leader.id, meetingId)
  }
}
