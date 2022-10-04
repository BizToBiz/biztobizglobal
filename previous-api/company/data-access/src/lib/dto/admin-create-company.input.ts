import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateCompanyInput {
  @Field()
  name: string
}
