import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateTransactionInput {
  @Field({ nullable: true })
  text?: string
}
