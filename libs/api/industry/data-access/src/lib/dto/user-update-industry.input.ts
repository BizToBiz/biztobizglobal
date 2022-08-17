import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateIndustryInput {
  @Field({ nullable: true })
  name?: string
}
