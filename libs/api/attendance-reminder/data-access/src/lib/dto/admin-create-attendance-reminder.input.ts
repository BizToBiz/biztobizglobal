import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateAttendanceReminderInput {
  @Field()
  name: string
}
