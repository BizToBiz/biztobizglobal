import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateSubstituteGroupInput {
  @Field()
  name: string
}
