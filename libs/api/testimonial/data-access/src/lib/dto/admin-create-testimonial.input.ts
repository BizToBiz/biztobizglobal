import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateTestimonialInput {
  @Field()
  name: string
}
