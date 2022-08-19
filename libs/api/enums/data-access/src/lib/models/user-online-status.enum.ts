import { registerEnumType } from '@nestjs/graphql'
import { UserOnlineStatus } from '@prisma/client'

export { UserOnlineStatus }

registerEnumType(UserOnlineStatus, {
  name: 'UserOnlineStatus',
  description: 'User online status',
})
