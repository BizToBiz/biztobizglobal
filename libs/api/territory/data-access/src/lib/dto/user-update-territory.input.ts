import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateTerritoryInput {
  @Field({ nullable: true })
  name?: string
}
