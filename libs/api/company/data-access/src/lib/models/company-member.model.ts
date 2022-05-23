import { Field, ObjectType } from '@nestjs/graphql'
import { Company } from './company.model'
import { User } from '@biztobiz/api/user/data-access'

@ObjectType()
export class CompanyMember {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  fromDate?: Date

  @Field({ nullable: true })
  thruDate?: Date

  @Field({ nullable: true })
  role?: string

  @Field({ nullable: true })
  location?: string

  @Field(() => User, { nullable: true })
  member?: User

  @Field(() => Company, { nullable: true })
  company?: Company
}
