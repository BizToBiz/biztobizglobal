import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateSubstituteInput {
  @Field({ nullable: true })
  name?: string
}
