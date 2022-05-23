import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateSmsInput {
  @Field({ nullable: true })
  name?: string
}
