import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateSubstituteInput {
  @Field({ nullable: true })
  name?: string
}
