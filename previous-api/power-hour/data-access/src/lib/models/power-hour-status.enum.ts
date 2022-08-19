import { registerEnumType } from '@nestjs/graphql'
import { PowerHourStatus } from '@prisma/client'

export { PowerHourStatus }

registerEnumType(PowerHourStatus, {
  name: 'PowerHourStatus',
  description: 'Power Hour Status',
})
