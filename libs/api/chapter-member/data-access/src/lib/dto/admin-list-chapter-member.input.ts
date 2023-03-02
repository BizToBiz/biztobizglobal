import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminListChapterMemberInput extends CorePagingInput {
  @Field({ nullable: true })
  chapterId?: string
}
