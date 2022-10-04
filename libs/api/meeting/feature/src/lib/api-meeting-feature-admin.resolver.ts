import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateMeetingInput,
  AdminListMeetingInput,
  AdminUpdateMeetingInput,
  ApiMeetingDataAccessAdminService,
  Meeting,
} from '@biztobiz/api/meeting/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiMeetingFeatureAdminResolver {
  constructor(private readonly service: ApiMeetingDataAccessAdminService) {}

  @Query(() => [Meeting], { nullable: true })
  adminMeetings(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListMeetingInput, nullable: true }) input?: AdminListMeetingInput,
  ) {
    return this.service.adminMeetings(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountMeetings(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListMeetingInput, nullable: true }) input?: AdminListMeetingInput,
  ) {
    return this.service.adminCountMeetings(admin.id, input)
  }

  @Query(() => Meeting, { nullable: true })
  adminMeeting(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('meetingId') meetingId: string) {
    return this.service.adminMeeting(info, admin.id, meetingId)
  }

  @Mutation(() => Meeting, { nullable: true })
  adminCreateMeeting(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateMeetingInput,
  ) {
    return this.service.adminCreateMeeting(info, admin.id, input)
  }

  @Mutation(() => Meeting, { nullable: true })
  adminUpdateMeeting(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('meetingId') meetingId: string,
    @Args('input') input: AdminUpdateMeetingInput,
  ) {
    return this.service.adminUpdateMeeting(info, admin.id, meetingId, input)
  }

  @Mutation(() => Meeting, { nullable: true })
  adminDeleteMeeting(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('meetingId') meetingId: string) {
    return this.service.adminDeleteMeeting(info, admin.id, meetingId)
  }
}
