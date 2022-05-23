import { Field, ObjectType } from '@nestjs/graphql'
import { CompanyMember } from './company-member.model'

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
