import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateAttendanceReminderInput {
  @Field({ nullable: true })
  name?: string
}
