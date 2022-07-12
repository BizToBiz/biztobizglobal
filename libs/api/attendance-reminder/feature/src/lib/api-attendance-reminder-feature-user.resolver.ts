import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateAttendanceReminderInput,
  UserListAttendanceReminderInput,
  UserUpdateAttendanceReminderInput,
  ApiAttendanceReminderDataAccessUserService,
  AttendanceReminder,
} from '@biztobiz/api/attendance-reminder/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiAttendanceReminderFeatureUserResolver {
  constructor(private readonly service: ApiAttendanceReminderDataAccessUserService) {}

  @Query(() => [AttendanceReminder], { nullable: true })
  userAttendanceReminders(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListAttendanceReminderInput, nullable: true })
    input?: UserListAttendanceReminderInput,
  ) {
    return this.service.userAttendanceReminders(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountAttendanceReminders(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListAttendanceReminderInput, nullable: true })
    input?: UserListAttendanceReminderInput,
  ) {
    return this.service.userCountAttendanceReminders(user.id, input)
  }

  @Query(() => AttendanceReminder, { nullable: true })
  userAttendanceReminder(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('attendanceReminderId') attendanceReminderId: string,
  ) {
    return this.service.userAttendanceReminder(info, user.id, attendanceReminderId)
  }

  @Mutation(() => AttendanceReminder, { nullable: true })
  userCreateAttendanceReminder(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateAttendanceReminderInput,
  ) {
    return this.service.userCreateAttendanceReminder(info, user.id, input)
  }

  @Mutation(() => AttendanceReminder, { nullable: true })
  userUpdateAttendanceReminder(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('attendanceReminderId') attendanceReminderId: string,
    @Args('input') input: UserUpdateAttendanceReminderInput,
  ) {
    return this.service.userUpdateAttendanceReminder(info, user.id, attendanceReminderId, input)
  }

  @Mutation(() => AttendanceReminder, { nullable: true })
  userDeleteAttendanceReminder(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('attendanceReminderId') attendanceReminderId: string,
  ) {
    return this.service.userDeleteAttendanceReminder(info, user.id, attendanceReminderId)
  }
}
