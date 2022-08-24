import { Field, InputType } from '@nestjs/graphql'
import { MultiSelectInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminUpdateSubstituteInput {
  @Field({ nullable: true })
  meetingId?: string

  @Field(() => [MultiSelectInput], { nullable: true })
  invited?: MultiSelectInput[]

  @Field({ nullable: true })
  sentById?: string

  @Field({ nullable: true })
  substituteId?: string
}
