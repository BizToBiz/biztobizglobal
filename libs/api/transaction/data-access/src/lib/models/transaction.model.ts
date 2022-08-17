import { Field, ObjectType } from '@nestjs/graphql'
import { Chapter } from '@biztobiz/api/chapter/data-access'
import { User } from '@biztobiz/api/user/data-access'
import { Referral } from '@biztobiz/api/referral/data-access'

@ObjectType()
export class Transaction {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  amount?: number

  @Field({ nullable: true })
  date?: Date

  @Field({ nullable: true })
  enteredBy?: string

  @Field({ nullable: true })
  enteredOn?: string

  @Field({ nullable: true })
  industry?: string

  @Field({ nullable: true })
  state?: string

  @Field(() => Chapter, { nullable: true })
  chapter?: Chapter

  @Field(() => User, { nullable: true })
  user?: Omit<[User], ''>

  @Field(() => Referral, { nullable: true })
  referral?: Referral
}
