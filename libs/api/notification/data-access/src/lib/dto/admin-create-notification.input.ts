import { Field, InputType } from '@nestjs/graphql'
import { NotificationReferenceType, NotificationType } from '@biztobiz/api/enums/data-access'

@InputType()
export class AdminCreateNotificationInput {
  @Field({ nullable: true })
  read?: boolean

  @Field({ nullable: true })
  message: string

  @Field(() => NotificationType, { nullable: true })
  type?: NotificationType

  @Field({ nullable: true })
  referenceId?: string

  @Field(() => NotificationReferenceType, { nullable: true })
  referenceType?: NotificationReferenceType

  @Field({ nullable: true })
  actorId?: string

  @Field({ nullable: true })
  toId?: string
}
