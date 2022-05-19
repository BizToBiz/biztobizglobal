import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CorePagingInput {
  @Field({ nullable: true, defaultValue: 20 })
  limit?: number

  @Field({ nullable: true, defaultValue: 0 })
  skip?: number

  @Field({ nullable: true })
  search?: string

  @Field({ nullable: true })
  orderDirection?: 'asc' | 'desc'

  @Field({ nullable: true })
  orderBy?: string
}
