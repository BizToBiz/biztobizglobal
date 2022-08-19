import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateCompanyMemberInput {
  @Field()
  location: string
}
