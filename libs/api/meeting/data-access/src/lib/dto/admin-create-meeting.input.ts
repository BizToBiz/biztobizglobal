import { Field, InputType } from '@nestjs/graphql'
import { MultiSelectInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminCreateMeetingInput {
  @Field()
  date: Date

  @Field({ nullable: true })
  chapterId?: string

  @Field({ nullable: true })
  isVisitorDay?: boolean

  @Field(() => [MultiSelectInput], { nullable: true })
  presence?: MultiSelectInput[]

  @Field(() => [MultiSelectInput], { nullable: true })
  substitutes?: MultiSelectInput[]
}
