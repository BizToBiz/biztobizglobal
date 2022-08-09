import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateRegionInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  managerId?: string

  @Field({ nullable: true })
  territoryId?: string
}
