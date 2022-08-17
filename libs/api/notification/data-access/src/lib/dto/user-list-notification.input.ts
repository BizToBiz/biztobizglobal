import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class UserListNotificationInput extends CorePagingInput {
  @Field({ nullable: true })
  message?: string
}
