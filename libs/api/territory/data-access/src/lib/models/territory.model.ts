import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '@biztobiz/api/user/data-access'
import { Region } from '@biztobiz/api/region/data-access'

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

  @Field(() => User, { nullable: true })
  manager?: Omit<[User], ''>

  @Field(() => [Region], { nullable: 'itemsAndList' })
  regions?: Region[]
}
