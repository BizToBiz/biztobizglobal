import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateSubstituteGroupInput {
  @Field({ nullable: true })
  name?: string
}
