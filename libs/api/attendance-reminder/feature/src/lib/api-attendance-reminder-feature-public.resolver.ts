import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import {
  ApiAttendanceReminderDataAccessPublicService,
  AttendanceReminder,
} from '@biztobiz/api/attendance-reminder/data-access'

@Resolver(() => AttendanceReminder)
export class ApiAttendanceReminderFeaturePublicResolver {
  constructor(private readonly service: ApiAttendanceReminderDataAccessPublicService) {}

  @ResolveField(() => String, { nullable: true })
  name(@Parent() reminder: AttendanceReminder) {
    return `Sent by ${reminder?.sentBy?.firstName} ${reminder?.sentBy?.lastName} to ${reminder?.sentTo?.firstName} ${reminder?.sentTo?.lastName} in ${reminder?.chapter?.name}`
  }
}
