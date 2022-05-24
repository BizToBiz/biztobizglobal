import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateNotificationInput {
  @Field({ nullable: true })
  name?: string
}
