import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateTestimonialInput {
  @Field()
  text: string

  @Field({ nullable: true })
  fromId?: string

  @Field({ nullable: true })
  toId?: string
}
