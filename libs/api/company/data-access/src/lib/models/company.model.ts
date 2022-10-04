import { Field, ObjectType } from '@nestjs/graphql'
import { CompanyMember } from '@biztobiz/api/company-member/data-access'

@ObjectType()
export class Company {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  name?: string

  @Field(() => [CompanyMember], { nullable: true })
  members?: CompanyMember[]
}
