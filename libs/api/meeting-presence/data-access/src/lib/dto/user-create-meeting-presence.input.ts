import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateMeetingPresenceInput {
  @Field()
  date: string
}
