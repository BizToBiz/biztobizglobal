import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateMeetingPresenceInput,
  UserListMeetingPresenceInput,
  UserUpdateMeetingPresenceInput,
  ApiMeetingPresenceDataAccessUserService,
  MeetingPresence,
} from '@biztobiz/api/meeting-presence/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
export class ApiMeetingPresenceFeatureUserResolver {
  constructor(private readonly service: ApiMeetingPresenceDataAccessUserService) {}

  @Query(() => [MeetingPresence], { nullable: true })
  userMeetingPresences(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListMeetingPresenceInput, nullable: true })
    input?: UserListMeetingPresenceInput,
  ) {
    return this.service.userMeetingPresences(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountMeetingPresences(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListMeetingPresenceInput, nullable: true })
    input?: UserListMeetingPresenceInput,
  ) {
    return this.service.userCountMeetingPresences(user.id, input)
  }

  @Query(() => MeetingPresence, { nullable: true })
  userMeetingPresence(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingPresenceId') meetingPresenceId: string,
  ) {
    return this.service.userMeetingPresence(info, user.id, meetingPresenceId)
  }

  @Mutation(() => MeetingPresence, { nullable: true })
  userCreateMeetingPresence(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateMeetingPresenceInput,
  ) {
    return this.service.userCreateMeetingPresence(info, user.id, input)
  }

  @Mutation(() => MeetingPresence, { nullable: true })
  userUpdateMeetingPresence(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingPresenceId') meetingPresenceId: string,
    @Args('input') input: UserUpdateMeetingPresenceInput,
  ) {
    return this.service.userUpdateMeetingPresence(info, user.id, meetingPresenceId, input)
  }

  @Mutation(() => MeetingPresence, { nullable: true })
  userDeleteMeetingPresence(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingPresenceId') meetingPresenceId: string,
  ) {
    return this.service.userDeleteMeetingPresence(info, user.id, meetingPresenceId)
  }
}
