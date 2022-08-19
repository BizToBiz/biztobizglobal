import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdatePowerHourInput {
  @Field({ nullable: true })
  details?: string
}
