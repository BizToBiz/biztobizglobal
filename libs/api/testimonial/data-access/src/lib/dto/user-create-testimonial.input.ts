import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateTestimonialInput {
  @Field()
  text: string
}
