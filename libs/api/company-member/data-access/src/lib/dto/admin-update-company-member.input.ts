import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateCompanyMemberInput {
  @Field({ nullable: true })
  location?: string
}
