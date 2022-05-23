import { Field, ObjectType } from '@nestjs/graphql'
import { ChapterMemberRole } from './chapter-member-role.enum'
import { Chapter } from '@biztobiz/api/chapter/data-access'
import { User } from '@biztobiz/api/user/data-access'

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

  @Field(() => Chapter, { nullable: true })
  chapter?: Chapter
  chapterId?: string

  @Field(() => User, { nullable: true })
  member?: User

  @Field({ nullable: true })
  memberId?: string
}
