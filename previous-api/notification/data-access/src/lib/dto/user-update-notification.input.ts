import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateNotificationInput {
  @Field({ nullable: true })
  name?: string
}
