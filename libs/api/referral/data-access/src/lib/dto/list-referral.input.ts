import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class ListReferralInput extends CorePagingInput {
  @Field({ nullable: true })
  firstName?: string
}
