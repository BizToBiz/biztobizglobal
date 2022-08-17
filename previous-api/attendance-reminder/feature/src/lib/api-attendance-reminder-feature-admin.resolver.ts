import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateAttendanceReminderInput,
  AdminListAttendanceReminderInput,
  AdminUpdateAttendanceReminderInput,
  ApiAttendanceReminderDataAccessAdminService,
  AttendanceReminder,
} from '@biztobiz/api/attendance-reminder/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiAttendanceReminderFeatureAdminResolver {
  constructor(private readonly service: ApiAttendanceReminderDataAccessAdminService) {}

  @Query(() => [AttendanceReminder], { nullable: true })
  adminAttendanceReminders(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListAttendanceReminderInput, nullable: true })
    input?: AdminListAttendanceReminderInput,
  ) {
    return this.service.adminAttendanceReminders(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountAttendanceReminders(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListAttendanceReminderInput, nullable: true })
    input?: AdminListAttendanceReminderInput,
  ) {
    return this.service.adminCountAttendanceReminders(admin.id, input)
  }

  @Query(() => AttendanceReminder, { nullable: true })
  adminAttendanceReminder(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('attendanceReminderId') attendanceReminderId: string,
  ) {
    return this.service.adminAttendanceReminder(info, admin.id, attendanceReminderId)
  }

  @Mutation(() => AttendanceReminder, { nullable: true })
  adminCreateAttendanceReminder(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateAttendanceReminderInput,
  ) {
    return this.service.adminCreateAttendanceReminder(info, admin.id, input)
  }

  @Mutation(() => AttendanceReminder, { nullable: true })
  adminUpdateAttendanceReminder(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('attendanceReminderId') attendanceReminderId: string,
    @Args('input') input: AdminUpdateAttendanceReminderInput,
  ) {
    return this.service.adminUpdateAttendanceReminder(info, admin.id, attendanceReminderId, input)
  }

  @Mutation(() => AttendanceReminder, { nullable: true })
  adminDeleteAttendanceReminder(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('attendanceReminderId') attendanceReminderId: string,
  ) {
    return this.service.adminDeleteAttendanceReminder(info, admin.id, attendanceReminderId)
  }
}
