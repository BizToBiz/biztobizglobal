import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateSmsInput {
  @Field()
  name: string
}
