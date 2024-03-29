import { Field, ObjectType } from '@nestjs/graphql'
import { Meeting } from '@biztobiz/api/meeting/data-access'
import { User } from '@biztobiz/api/user/data-access'

@ObjectType()
export class Substitute {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field(() => Meeting, { nullable: true })
  meeting?: Partial<Meeting>

  @Field(() => [User], { nullable: true })
  invited?: Partial<User>

  @Field(() => User, { nullable: true })
  sentBy?: Partial<User>

  @Field(() => User, { nullable: true })
  substitute?: Partial<User>
}
