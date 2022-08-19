import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateMeetingPresenceInput {
  @Field()
  date: string
}
