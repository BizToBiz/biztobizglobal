import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateReferralInput {
  @Field()
  name: string
}
