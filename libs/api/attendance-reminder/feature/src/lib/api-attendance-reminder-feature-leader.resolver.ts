import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateAttendanceReminderInput,
  AdminListAttendanceReminderInput,
  AdminUpdateAttendanceReminderInput,
  ApiAttendanceReminderDataAccessLeaderService,
  AttendanceReminder,
} from '@biztobiz/api/attendance-reminder/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiAttendanceReminderFeatureLeaderResolver {
  constructor(private readonly service: ApiAttendanceReminderDataAccessLeaderService) {}

  @Query(() => [AttendanceReminder], { nullable: true })
  leaderAttendanceReminders(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListAttendanceReminderInput, nullable: true })
    input?: AdminListAttendanceReminderInput,
  ) {
    return this.service.leaderAttendanceReminders(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountAttendanceReminders(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListAttendanceReminderInput, nullable: true })
    input?: AdminListAttendanceReminderInput,
  ) {
    return this.service.leaderCountAttendanceReminders(leader.id, input)
  }

  @Query(() => AttendanceReminder, { nullable: true })
  leaderAttendanceReminder(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('attendanceReminderId') attendanceReminderId: string,
  ) {
    return this.service.leaderAttendanceReminder(info, leader.id, attendanceReminderId)
  }

  @Mutation(() => AttendanceReminder, { nullable: true })
  leaderCreateAttendanceReminder(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateAttendanceReminderInput,
  ) {
    return this.service.leaderCreateAttendanceReminder(info, leader.id, input)
  }

  @Mutation(() => AttendanceReminder, { nullable: true })
  leaderUpdateAttendanceReminder(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('attendanceReminderId') attendanceReminderId: string,
    @Args('input') input: AdminUpdateAttendanceReminderInput,
  ) {
    return this.service.leaderUpdateAttendanceReminder(info, leader.id, attendanceReminderId, input)
  }

  @Mutation(() => AttendanceReminder, { nullable: true })
  leaderDeleteAttendanceReminder(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('attendanceReminderId') attendanceReminderId: string,
  ) {
    return this.service.leaderDeleteAttendanceReminder(info, leader.id, attendanceReminderId)
  }
}
