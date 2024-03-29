import { Field, ObjectType } from '@nestjs/graphql'
import { ChapterMemberRole } from './chapter-member-role.enum'
import { User } from '@biztobiz/api/user/data-access'
import { Chapter } from '@biztobiz/api/chapter/data-access'

@ObjectType()
export class ChapterMember {
  @Field({ nullable: true })
  id?: string

  @Field(() => ChapterMemberRole, { nullable: true })
  role?: ChapterMemberRole

  @Field({ nullable: true })
  isMentor?: boolean

  @Field({ nullable: true })
  isTrainer?: boolean

  @Field(() => User, { nullable: true })
  member?: Omit<[User], ''>

  @Field(() => Chapter, { nullable: true })
  chapter?: Omit<[Chapter], ''>
}
