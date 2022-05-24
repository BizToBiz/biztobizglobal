import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateTerritoryInput {
  @Field()
  name: string
}
