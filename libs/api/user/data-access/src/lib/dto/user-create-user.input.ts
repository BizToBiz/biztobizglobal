import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateUserInput {
  @Field()
  firstName: string
}
