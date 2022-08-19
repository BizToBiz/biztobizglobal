import { Field, ObjectType } from '@nestjs/graphql'
import { Chapter } from '@biztobiz/api/chapter/data-access'
import { User } from '@biztobiz/api/user/data-access'
import { ReferralRating } from '@biztobiz/api/enums/data-access'
import { Transaction } from '@biztobiz/api/transaction/data-access'

@ObjectType()
export class Referral {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  referralDate?: Date

  @Field(() => ReferralRating, { nullable: true })
  rating?: ReferralRating

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

  @Field(() => User, { nullable: true })
  sentBy?: Omit<[User], ''>

  @Field(() => User, { nullable: true })
  from?: Omit<[User], ''>

  @Field(() => User, { nullable: true })
  to?: Omit<[User], ''>

  @Field(() => Chapter, { nullable: true })
  fromChapter?: Omit<[Chapter], ''>

  @Field(() => Chapter, { nullable: true })
  toChapter?: Omit<[Chapter], ''>

  @Field(() => [Transaction], { nullable: true })
  transactions?: Transaction[]
}
