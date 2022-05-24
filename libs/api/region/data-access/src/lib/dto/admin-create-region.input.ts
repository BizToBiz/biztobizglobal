import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateRegionInput {
  @Field()
  name: string
}
