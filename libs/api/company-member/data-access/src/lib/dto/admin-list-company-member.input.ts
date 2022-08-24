import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminListCompanyMemberInput extends CorePagingInput {
  @Field({ nullable: true })
  fromDate?: Date

  @Field({ nullable: true })
  thruDate?: Date

  @Field({ nullable: true })
  role?: string

  @Field({ nullable: true })
  location?: string

  @Field({ nullable: true })
  companyId?: string

  @Field({ nullable: true })
  memberId?: string
}
