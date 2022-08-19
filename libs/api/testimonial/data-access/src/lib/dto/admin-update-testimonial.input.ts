import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateTestimonialInput {
  @Field({ nullable: true })
  text?: string
}
