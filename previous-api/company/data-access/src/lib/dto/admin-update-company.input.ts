import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateCompanyInput {
  @Field({ nullable: true })
  name?: string
}
