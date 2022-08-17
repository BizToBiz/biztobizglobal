import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateAttendanceReminderInput {
  @Field()
  name: string
}
