import { InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class UserListChapterMemberInput extends CorePagingInput {}
