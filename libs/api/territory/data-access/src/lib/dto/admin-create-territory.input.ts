import { Field, InputType } from '@nestjs/graphql'
import { RegionsInput } from './admin-update-territory.input'

@InputType()
export class AdminCreateTerritoryInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  managerId?: string

  @Field(() => [RegionsInput], { nullable: true })
  regions?: RegionsInput[]
}
