import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateTerritoryInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  managerId?: string
}
