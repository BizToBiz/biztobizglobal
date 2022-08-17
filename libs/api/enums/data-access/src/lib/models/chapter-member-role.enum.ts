import { registerEnumType } from '@nestjs/graphql'
import { ChapterMemberRole } from '@prisma/client'

export { ChapterMemberRole }

registerEnumType(ChapterMemberRole, {
  name: 'ChapterMemberRole',
  description: 'Chapter member role',
})
