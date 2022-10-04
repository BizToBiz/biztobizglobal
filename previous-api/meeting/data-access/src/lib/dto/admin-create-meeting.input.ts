import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateMeetingInput {
  @Field()
  name: string
}
