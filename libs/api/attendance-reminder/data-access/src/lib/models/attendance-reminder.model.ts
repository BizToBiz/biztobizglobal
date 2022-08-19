import { Field, ObjectType } from '@nestjs/graphql'
import { Chapter } from '@biztobiz/api/chapter/data-access'
import { User } from '@biztobiz/api/user/data-access'

@ObjectType()
export class AttendanceReminder {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field(() => Chapter, { nullable: true })
  chapter?: () => Chapter

  @Field(() => User, { nullable: true })
  sentBy?: () => User

  @Field(() => User, { nullable: true })
  sentTo?: () => User
}
