import { Field, ObjectType } from '@nestjs/graphql'
import { Territory } from '@biztobiz/api/territory/data-access'
import { Chapter } from '@biztobiz/api/chapter/data-access'

@ObjectType()
export class Region {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  createdAt: Date

  @Field({ nullable: true })
  updatedAt: Date

  @Field({ nullable: true })
  name?: string

  @Field(() => [Chapter], { nullable: true })
  chapters?: Chapter[]

  @Field(() => Territory, { nullable: true })
  territory?: () => Territory

  manager?: Record<string, unknown>
}
