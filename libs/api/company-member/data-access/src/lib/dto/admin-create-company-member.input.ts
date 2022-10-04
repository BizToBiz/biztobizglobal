import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateCompanyMemberInput {
  @Field({ nullable: true })
  fromDate?: Date

  @Field({ nullable: true })
  thruDate?: Date

  @Field({ nullable: true })
  role?: string

  @Field({ nullable: true })
  location?: string

  @Field({ nullable: true })
  companyId?: string

  @Field({ nullable: true })
  memberId?: string
}
