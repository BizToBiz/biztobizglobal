import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateMeetingInput {
  @Field({ nullable: true })
  date?: Date
}
