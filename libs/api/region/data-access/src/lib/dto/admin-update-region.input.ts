import { Field, InputType } from '@nestjs/graphql'
import { MultiSelectInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminUpdateRegionInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  managerId?: string

  @Field({ nullable: true })
  territoryId?: string

  @Field(() => [MultiSelectInput], { nullable: true })
  chapters?: MultiSelectInput[]
}
