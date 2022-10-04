import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class UserListPowerHourInput extends CorePagingInput {
  @Field({ nullable: true })
  details?: string
}
