import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminListTransactionInput extends CorePagingInput {
  @Field({ nullable: true })
  text?: string
}
