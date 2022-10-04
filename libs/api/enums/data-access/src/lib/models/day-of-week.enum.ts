import { registerEnumType } from '@nestjs/graphql'
import { DayOfWeek } from '@prisma/client'
export { DayOfWeek }

registerEnumType(DayOfWeek, {
  name: 'DayOfWeek',
  description: 'Day of Week',
})
