import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateMeetingPresenceInput,
  AdminListMeetingPresenceInput,
  AdminUpdateMeetingPresenceInput,
  ApiMeetingPresenceDataAccessAdminService,
  MeetingPresence,
} from '@biztobiz/api/meeting-presence/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiMeetingPresenceFeatureAdminResolver {
  constructor(private readonly service: ApiMeetingPresenceDataAccessAdminService) {}

  @Query(() => [MeetingPresence], { nullable: true })
  adminMeetingPresences(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListMeetingPresenceInput, nullable: true })
    input?: AdminListMeetingPresenceInput,
  ) {
    return this.service.adminMeetingPresences(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountMeetingPresences(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListMeetingPresenceInput, nullable: true })
    input?: AdminListMeetingPresenceInput,
  ) {
    return this.service.adminCountMeetingPresences(admin.id, input)
  }

  @Query(() => MeetingPresence, { nullable: true })
  adminMeetingPresence(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingPresenceId') meetingPresenceId: string,
  ) {
    return this.service.adminMeetingPresence(info, admin.id, meetingPresenceId)
  }

  @Mutation(() => MeetingPresence, { nullable: true })
  adminCreateMeetingPresence(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateMeetingPresenceInput,
  ) {
    return this.service.adminCreateMeetingPresence(info, admin.id, input)
  }

  @Mutation(() => MeetingPresence, { nullable: true })
  adminUpdateMeetingPresence(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingPresenceId') meetingPresenceId: string,
    @Args('input') input: AdminUpdateMeetingPresenceInput,
  ) {
    return this.service.adminUpdateMeetingPresence(info, admin.id, meetingPresenceId, input)
  }

  @Mutation(() => MeetingPresence, { nullable: true })
  adminDeleteMeetingPresence(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingPresenceId') meetingPresenceId: string,
  ) {
    return this.service.adminDeleteMeetingPresence(info, admin.id, meetingPresenceId)
  }
}
