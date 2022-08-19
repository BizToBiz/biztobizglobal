import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateNotificationInput {
  @Field()
  message: string
}
