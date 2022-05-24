import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateRegionInput {
  @Field()
  name: string
}
