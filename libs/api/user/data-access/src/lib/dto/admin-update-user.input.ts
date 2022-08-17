import { Field, InputType, Int } from '@nestjs/graphql'
import { Role, UserOnlineStatus, UserStatus } from '@biztobiz/api/enums/data-access'

@InputType()
export class AdminUpdateUserInput {
  @Field({ nullable: true })
  lastSeen?: Date

  @Field(() => UserOnlineStatus, { nullable: true })
  onlineStatus?: UserOnlineStatus

  @Field(() => UserStatus, { nullable: true })
  status?: UserStatus

  @Field({ nullable: true })
  developer?: boolean

  @Field(() => Role, { nullable: true })
  role?: Role

  @Field({ nullable: true })
  email?: string

  @Field({ nullable: true })
  emailConfirmed?: boolean

  @Field({ nullable: true })
  username?: string

  @Field(() => Int, { nullable: true })
  infusionsoftId?: number

  @Field({ nullable: true })
  firstName?: string
}
