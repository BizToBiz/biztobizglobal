import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminListReportInput extends CorePagingInput {
  @Field({ nullable: true })
  name?: string
}
