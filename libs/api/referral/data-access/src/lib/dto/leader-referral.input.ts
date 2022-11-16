import { Field, InputType } from '@nestjs/graphql'
import { ReferralRating } from '@biztobiz/api/enums/data-access'
import { MultiSelectInput } from '@biztobiz/api/core/data-access'

@InputType()
export class LeaderReferralInput {
  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string

  @Field({ nullable: true })
  email?: string

  @Field({ nullable: true })
  phone?: string

  @Field({ nullable: true })
  notes?: string

  @Field(() => ReferralRating, { nullable: true })
  rating?: ReferralRating

  @Field({ nullable: true })
  fromId?: string

  @Field({ nullable: true })
  toId?: string

  @Field(() => [MultiSelectInput], { nullable: true })
  transactions?: MultiSelectInput[]
}
