import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateMeetingInput {
  @Field()
  date: Date
}
