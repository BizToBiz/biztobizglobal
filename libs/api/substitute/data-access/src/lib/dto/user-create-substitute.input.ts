import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateSubstituteInput {
  @Field()
  name: string
}
