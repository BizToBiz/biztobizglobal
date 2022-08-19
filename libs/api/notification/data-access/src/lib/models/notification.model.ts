import { Field, ObjectType } from '@nestjs/graphql'
import { NotificationReferenceType, NotificationType } from '@biztobiz/api/enums/data-access'
import { User } from '@biztobiz/api/user/data-access'

@ObjectType()
export class Notification {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  read?: boolean

  @Field(() => NotificationType, { nullable: true })
  type?: NotificationType

  @Field({ nullable: true })
  message?: string

  @Field({ nullable: true })
  referenceId?: string

  @Field(() => NotificationReferenceType, { nullable: true })
  referenceType?: NotificationReferenceType

  @Field(() => User, { nullable: true })
  actor?: Omit<[User], ''>

  @Field(() => User, { nullable: true })
  to?: Omit<[User], ''>
}
