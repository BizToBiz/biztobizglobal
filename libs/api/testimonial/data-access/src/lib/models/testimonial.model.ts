import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '@biztobiz/api/user/data-access'

@ObjectType()
export class Testimonial {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  text?: string

  @Field(() => User, { nullable: true })
  from?: Omit<[User], ''>

  @Field(() => User, { nullable: true })
  to?: Omit<[User], ''>
}
