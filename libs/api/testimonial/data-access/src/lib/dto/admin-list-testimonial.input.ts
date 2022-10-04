import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@biztobiz/api/core/data-access'

@InputType()
export class AdminListTestimonialInput extends CorePagingInput {
  @Field({ nullable: true })
  text?: string
}
