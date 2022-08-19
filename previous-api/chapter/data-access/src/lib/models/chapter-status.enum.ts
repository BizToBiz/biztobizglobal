import { registerEnumType } from '@nestjs/graphql'
import { ChapterStatus } from '@prisma/client'
export { ChapterStatus }

registerEnumType(ChapterStatus, {
  name: 'ChapterStatus',
  description: 'Chapter status',
})
