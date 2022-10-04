import { Field, InputType } from '@nestjs/graphql'
import { PowerHourStatus } from '@biztobiz/api/enums/data-access'

@InputType()
export class AdminCreatePowerHourInput {
  @Field({ nullable: true })
  date?: Date

  @Field({ nullable: true })
  time?: string

  @Field({ nullable: true })
  details?: string

  @Field(() => PowerHourStatus, { nullable: true })
  status?: PowerHourStatus

  @Field({ nullable: true })
  fromId?: string

  @Field({ nullable: true })
  toId?: string
}
