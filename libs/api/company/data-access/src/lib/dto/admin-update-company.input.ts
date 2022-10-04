import { Field, InputType } from '@nestjs/graphql'
import { MultiSelectInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminUpdateCompanyInput {
  @Field({ nullable: true })
  name: string

  @Field(() => [MultiSelectInput], { nullable: true })
  members?: MultiSelectInput[]
}
