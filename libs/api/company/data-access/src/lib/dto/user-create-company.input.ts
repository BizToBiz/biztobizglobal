import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateCompanyInput {
  @Field()
  name: string
}
