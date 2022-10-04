import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateRegionInput {
  @Field({ nullable: true })
  name?: string
}
