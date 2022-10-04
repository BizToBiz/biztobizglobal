import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateMeetingPresenceInput {
  @Field({ nullable: true })
  date?: string
}
