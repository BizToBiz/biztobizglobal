import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateReferralInput {
  @Field({ nullable: true })
  firstName?: string
}
