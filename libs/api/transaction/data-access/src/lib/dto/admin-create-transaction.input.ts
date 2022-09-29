import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateTransactionInput {
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

  @Field({ nullable: true })
  chapterId?: string

  @Field({ nullable: true })
  userId?: string

  @Field({ nullable: true })
  referralId?: string
}
