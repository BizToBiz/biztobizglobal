import { registerEnumType } from '@nestjs/graphql'
import { ReferralRating } from '@prisma/client'

export { ReferralRating }

registerEnumType(ReferralRating, {
  name: 'ReferralRating',
  description: 'Referral rating',
})
