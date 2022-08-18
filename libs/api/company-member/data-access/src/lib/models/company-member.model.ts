import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '@biztobiz/api/user/data-access'
import { Company } from '@biztobiz/api/company/data-access'

@ObjectType()
export class CompanyMember {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  fromDate?: Date

  @Field({ nullable: true })
  thruDate?: Date

  @Field({ nullable: true })
  role?: string

  @Field({ nullable: true })
  location?: string

  @Field(() => Company, { nullable: true })
  company?: Omit<[Company], ''>

  @Field(() => User, { nullable: true })
  member?: Omit<[User], ''>
}
