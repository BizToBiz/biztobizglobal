import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class UserListMeetingPresenceInput extends CorePagingInput {
  @Field({ nullable: true })
  date?: string
}
