import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateIndustryInput {
  @Field({ nullable: true })
  name?: string
}
