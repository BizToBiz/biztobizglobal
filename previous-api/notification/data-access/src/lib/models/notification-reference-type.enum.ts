import { registerEnumType } from '@nestjs/graphql'
import { NotificationReferenceType } from '@prisma/client'

export { NotificationReferenceType }

registerEnumType(NotificationReferenceType, {
  name: 'NotificationReferenceType',
  description: 'Notification reference type',
})
