import { Field, ObjectType } from '@nestjs/graphql'
import { PowerHourStatus } from '@biztobiz/api/enums/data-access'
import { User } from '@biztobiz/api/user/data-access'

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
  from?: Partial<User>

  @Field(() => User, { nullable: true })
  to?: Partial<User>
}
