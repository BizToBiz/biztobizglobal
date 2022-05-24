import { Field, ObjectType } from '@nestjs/graphql'

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

  company?: Record<string, unknown>
  member?: Record<string, unknown>
}
