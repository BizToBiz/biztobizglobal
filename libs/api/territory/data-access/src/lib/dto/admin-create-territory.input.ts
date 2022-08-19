import { Field, InputType } from '@nestjs/graphql'
import { MultiSelectInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminCreateTerritoryInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  managerId?: string

  @Field(() => [MultiSelectInput], { nullable: true })
  regions?: MultiSelectInput[]
}
