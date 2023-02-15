import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class ListTransactionInput extends CorePagingInput {
  @Field({ nullable: true })
  startDate: Date

  @Field({ nullable: true })
  endDate?: Date

  @Field({ nullable: true })
  amount?: number
}
