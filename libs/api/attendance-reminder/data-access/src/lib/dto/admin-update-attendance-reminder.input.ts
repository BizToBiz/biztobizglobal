import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateAttendanceReminderInput {
  @Field({ nullable: true })
  name?: string
}
