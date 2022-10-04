import { Field, ObjectType } from '@nestjs/graphql'
import { ChapterMemberRole } from '@biztobiz/api/enums/data-access'
import { User } from '@biztobiz/api/user/data-access'
import { Chapter } from '@biztobiz/api/chapter/data-access'

@ObjectType()
export class ChapterMember {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  isMentor?: boolean

  @Field({ nullable: true })
  isTrainer?: boolean

  @Field(() => ChapterMemberRole, { nullable: true })
  role?: ChapterMemberRole

  @Field(() => Chapter, { nullable: true })
  chapter?: Partial<Chapter>

  @Field(() => User, { nullable: true })
  member?: Partial<User>
}
