import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminListCompanyMemberInput extends CorePagingInput {
  @Field({ nullable: true })
  location?: string
}
