import { Field, InputType } from '@nestjs/graphql'
import { Role, UserOnlineStatus, UserStatus } from '@biztobiz/api/enums/data-access'

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
