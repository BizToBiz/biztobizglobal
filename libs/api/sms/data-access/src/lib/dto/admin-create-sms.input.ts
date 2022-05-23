import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateSmsInput {
  @Field()
  name: string
}
