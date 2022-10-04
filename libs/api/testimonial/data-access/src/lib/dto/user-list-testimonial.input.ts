import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class UserListTestimonialInput extends CorePagingInput {
  @Field({ nullable: true })
  text?: string
}
