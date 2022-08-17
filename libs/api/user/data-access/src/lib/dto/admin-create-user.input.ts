import { Field, InputType } from '@nestjs/graphql'
import { Role } from '../models/role.enum'
import { UserOnlineStatus } from '../models/user-online-status.enum'
import { UserStatus } from '../models/user-status.enum'

@InputType()
export class AdminCreateUserInput {
  @Field({ nullable: true })
  lastSeen?: Date

  @Field(() => UserOnlineStatus, { nullable: true })
  onlineStatus?: UserOnlineStatus

  @Field(() => UserStatus, { nullable: true })
  status?: UserStatus

  @Field({ nullable: true })
  developer?: boolean

  @Field(() => Role)
  role: Role

  @Field()
  firstName: string
}
