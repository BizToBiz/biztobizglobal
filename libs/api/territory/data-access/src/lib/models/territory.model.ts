import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '@biztobiz/api/user/data-access'

@ObjectType()
export class Territory {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  name?: string

  // @Field(() => [Region], { nullable: 'itemsAndList' })
  // regions?: Region[]

  @Field(() => User, { nullable: true })
  manager?: Omit<[User], ''>
}
