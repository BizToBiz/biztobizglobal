import { Field, InputType } from '@nestjs/graphql'
import { MeetingAttendance } from '@biztobiz/api/enums/data-access'

@InputType()
export class AdminCreateMeetingPresenceInput {
  @Field(() => MeetingAttendance, { nullable: true })
  attendance?: MeetingAttendance

  @Field({ nullable: true })
  meetingId?: string

  @Field({ nullable: true })
  memberId?: string
}
