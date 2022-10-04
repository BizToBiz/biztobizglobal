import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateSubstituteGroupInput {
  @Field({ nullable: true })
  name?: string
}
