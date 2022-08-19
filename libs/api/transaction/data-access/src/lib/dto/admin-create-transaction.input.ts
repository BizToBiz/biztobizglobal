import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateTransactionInput {
  @Field()
  text: string
}
