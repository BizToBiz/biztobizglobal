import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class UserListUploadInput extends CorePagingInput {
  @Field({ nullable: true })
  originalFilename?: string
}
