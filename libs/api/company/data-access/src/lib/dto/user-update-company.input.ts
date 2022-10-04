import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateCompanyInput {
  @Field({ nullable: true })
  name?: string
}
