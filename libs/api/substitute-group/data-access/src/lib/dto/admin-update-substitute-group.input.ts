import { Field, InputType } from '@nestjs/graphql'
import { MultiSelectInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminUpdateSubstituteGroupInput {
  @Field({ nullable: true })
  name: string

  @Field(() => [MultiSelectInput], { nullable: true })
  chapters?: MultiSelectInput[]
}
