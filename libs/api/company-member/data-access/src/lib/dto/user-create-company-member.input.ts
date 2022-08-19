import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateCompanyMemberInput {
  @Field()
  location: string
}
