import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateTerritoryInput {
  @Field()
  name: string
}
