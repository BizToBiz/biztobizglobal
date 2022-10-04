import { Field, ObjectType } from '@nestjs/graphql'
import { Chapter } from '@biztobiz/api/chapter/data-access'
import { User } from '@biztobiz/api/user/data-access'
import { Territory } from '@biztobiz/api/territory/data-access'

@ObjectType()
export class Region {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  createdAt: Date

  @Field({ nullable: true })
  updatedAt: Date

  @Field({ nullable: true })
  name?: string

  @Field(() => [Chapter], { nullable: true })
  chapters?: Chapter[]

  @Field(() => Territory, { nullable: true })
  territory?: Omit<[Territory], ''>

  @Field(() => User, { nullable: true })
  manager?: Omit<[User], ''>
}
