import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateNotificationInput {
  @Field()
  name: string
}
