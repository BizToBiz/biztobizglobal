import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateIndustryInput {
  @Field()
  name: string
}
