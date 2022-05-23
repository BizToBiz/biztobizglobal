import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateSubstituteGroupInput {
  @Field()
  name: string
}
