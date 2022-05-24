import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateTerritoryInput {
  @Field({ nullable: true })
  name?: string
}
