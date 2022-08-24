import { MultiSelectInput } from '@biztobiz/api/core/data-access'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateSubstituteGroupInput {
  @Field({ nullable: true })
  name: string

  @Field(() => [MultiSelectInput], { nullable: true })
  chapters?: MultiSelectInput[]
}
