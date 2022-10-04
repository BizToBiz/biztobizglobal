import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateCompanyMemberInput {
  @Field({ nullable: true })
  location?: string
}
