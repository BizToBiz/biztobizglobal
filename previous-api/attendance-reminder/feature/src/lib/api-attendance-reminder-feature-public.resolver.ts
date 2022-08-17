import { Resolver } from '@nestjs/graphql'
import {
  ApiAttendanceReminderDataAccessPublicService,
  AttendanceReminder,
} from '@biztobiz/api/attendance-reminder/data-access'

@Resolver(() => AttendanceReminder)
export class ApiAttendanceReminderFeaturePublicResolver {
  constructor(private readonly service: ApiAttendanceReminderDataAccessPublicService) {}
}
