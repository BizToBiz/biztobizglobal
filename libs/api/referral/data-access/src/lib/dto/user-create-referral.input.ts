import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateReferralInput {
  @Field()
  name: string
}
