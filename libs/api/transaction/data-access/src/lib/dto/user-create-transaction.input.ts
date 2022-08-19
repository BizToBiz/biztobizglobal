import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateTransactionInput {
  @Field()
  text: string
}
