import { Field, ObjectType } from '@nestjs/graphql'
import { Region } from '@biztobiz/api/region/data-access'
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

  @Field(() => User, { nullable: true })
  manager?: User

  @Field(() => [Region], { nullable: 'itemsAndList' })
  regions?: Region[]
}
