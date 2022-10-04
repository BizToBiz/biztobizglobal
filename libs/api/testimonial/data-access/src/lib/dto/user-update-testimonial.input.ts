import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateTestimonialInput {
  @Field({ nullable: true })
  text?: string
}
