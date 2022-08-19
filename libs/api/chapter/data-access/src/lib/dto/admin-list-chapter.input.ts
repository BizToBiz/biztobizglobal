import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminListChapterInput extends CorePagingInput {
  @Field({ nullable: true })
  memberId?: string

  @Field({ nullable: true })
  regionId?: string

  @Field({ nullable: true })
  substituteGroupId?: string
}
