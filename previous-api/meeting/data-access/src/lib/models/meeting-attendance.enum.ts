import { registerEnumType } from '@nestjs/graphql'
import { MeetingAttendance } from '@prisma/client'

export { MeetingAttendance }

registerEnumType(MeetingAttendance, {
  name: 'MeetingAttendance',
  description: 'Meeting Attendance',
})
