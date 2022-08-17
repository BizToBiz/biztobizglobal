import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class RegionsInput {
  @Field({ nullable: true })
  id?: string
}

@InputType()
export class AdminUpdateTerritoryInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  managerId?: string

  @Field(() => [RegionsInput], { nullable: true })
  regions: RegionsInput[]
}
