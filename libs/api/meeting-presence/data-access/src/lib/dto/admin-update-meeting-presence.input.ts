import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateMeetingPresenceInput {
  @Field({ nullable: true })
  date?: string
}
