import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateReferralInput {
  @Field({ nullable: true })
  firstName?: string
}
