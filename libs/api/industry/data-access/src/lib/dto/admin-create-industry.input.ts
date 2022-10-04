import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateIndustryInput {
  @Field()
  name: string
}
