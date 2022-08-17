import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateSubstituteInput {
  @Field()
  name: string
}
