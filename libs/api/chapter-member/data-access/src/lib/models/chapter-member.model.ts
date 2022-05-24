import { Field, ObjectType } from '@nestjs/graphql'
import { ChapterMemberRole } from './chapter-member-role.enum'

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

  member?: Record<string, unknown>
  chapter?: Record<string, unknown>
}
