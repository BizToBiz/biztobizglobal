import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdatePowerHourInput {
  @Field({ nullable: true })
  details?: string
}
