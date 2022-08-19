import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateTransactionInput {
  @Field({ nullable: true })
  text?: string
}
