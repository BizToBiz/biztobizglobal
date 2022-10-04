import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateTestimonialInput {
  @Field()
  name: string
}
