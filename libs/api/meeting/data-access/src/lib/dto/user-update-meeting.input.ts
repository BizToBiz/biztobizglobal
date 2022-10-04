import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateMeetingInput {
  @Field({ nullable: true })
  date?: Date
}
