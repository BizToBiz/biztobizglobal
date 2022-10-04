import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '@biztobiz/api/user/data-access'

@ObjectType()
export class UserToken {
  @Field({ description: 'JWT Bearer token' })
  token: string

  @Field(() => User)
  user: Omit<[User], ''>
}
