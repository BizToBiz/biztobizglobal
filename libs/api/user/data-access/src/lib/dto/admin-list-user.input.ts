import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminListUserInput extends CorePagingInput {
  @Field({ nullable: true })
  firstName?: string
}
