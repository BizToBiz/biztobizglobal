import { Field, InputType } from '@nestjs/graphql'
import { ReferralRating } from '@biztobiz/api/enums/data-access'
import { MultiSelectInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminUpdateReferralInput {
  @Field({ nullable: true })
  referralDate?: Date

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

  @Field({ nullable: true })
  fromIndustry?: string

  @Field({ nullable: true })
  toIndustry?: string

  @Field(() => ReferralRating, { nullable: true })
  rating?: ReferralRating

  @Field({ nullable: true })
  fromId?: string

  @Field({ nullable: true })
  toId?: string

  @Field({ nullable: true })
  fromChapterId?: string

  @Field({ nullable: true })
  toChapterId?: string

  @Field({ nullable: true })
  sentById?: string

  @Field(() => [MultiSelectInput], { nullable: true })
  transactions?: MultiSelectInput[]
}
