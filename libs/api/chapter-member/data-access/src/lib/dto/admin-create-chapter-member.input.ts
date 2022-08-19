import { Field, InputType } from '@nestjs/graphql'
import { ChapterMemberRole } from '@prisma/client'

@InputType()
export class AdminCreateChapterMemberInput {
  @Field(() => ChapterMemberRole, { nullable: true })
  role?: ChapterMemberRole

  @Field({ nullable: true })
  isMentor?: boolean

  @Field({ nullable: true })
  isTrainer?: boolean
}
