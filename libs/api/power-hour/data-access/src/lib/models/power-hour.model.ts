import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '@biztobiz/api/user/data-access'
import { PowerHourStatus } from './power-hour-status.enum'

@ObjectType()
export class PowerHour {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  date?: Date

  @Field({ nullable: true })
  time?: string

  @Field({ nullable: true })
  details?: string

  @Field(() => PowerHourStatus, { nullable: true })
  status?: PowerHourStatus

  @Field(() => User, { nullable: true })
  from?: () => User

  @Field(() => User, { nullable: true })
  to?: () => User
}
