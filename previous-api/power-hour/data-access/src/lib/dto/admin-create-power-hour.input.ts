import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreatePowerHourInput {
  @Field()
  name: string
}
