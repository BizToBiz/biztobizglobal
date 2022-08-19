import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateMeetingInput,
  UserListMeetingInput,
  UserUpdateMeetingInput,
  ApiMeetingDataAccessUserService,
  Meeting,
} from '@biztobiz/api/meeting/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
export class ApiMeetingFeatureUserResolver {
  constructor(private readonly service: ApiMeetingDataAccessUserService) {}

  @Query(() => [Meeting], { nullable: true })
  userMeetings(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListMeetingInput, nullable: true }) input?: UserListMeetingInput,
  ) {
    return this.service.userMeetings(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountMeetings(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListMeetingInput, nullable: true }) input?: UserListMeetingInput,
  ) {
    return this.service.userCountMeetings(user.id, input)
  }

  @Query(() => Meeting, { nullable: true })
  userMeeting(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('meetingId') meetingId: string) {
    return this.service.userMeeting(info, user.id, meetingId)
  }

  @Mutation(() => Meeting, { nullable: true })
  userCreateMeeting(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateMeetingInput,
  ) {
    return this.service.userCreateMeeting(info, user.id, input)
  }

  @Mutation(() => Meeting, { nullable: true })
  userUpdateMeeting(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingId') meetingId: string,
    @Args('input') input: UserUpdateMeetingInput,
  ) {
    return this.service.userUpdateMeeting(info, user.id, meetingId, input)
  }

  @Mutation(() => Meeting, { nullable: true })
  userDeleteMeeting(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('meetingId') meetingId: string) {
    return this.service.userDeleteMeeting(info, user.id, meetingId)
  }
}
