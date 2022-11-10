import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@biztobiz/api/core/data-access'
import * as dayjs from 'dayjs'

@Injectable()
export class ApiReferralDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  referralName(referral) {
    return this.data.referral
      .findFirst({
        where: { id: referral.id },
        select: {
          createdAt: true,
          referralDate: true,
          firstName: true,
          lastName: true,
          from: { select: { firstName: true, lastName: true } },
          to: { select: { firstName: true, lastName: true } },
        },
      })
      .then((referral) => {
        return `${referral?.from?.firstName} ${referral?.from?.lastName} referred ${referral?.firstName} ${
          referral?.lastName
        } to ${referral?.to?.firstName} ${referral?.to?.lastName} on ${dayjs(
          referral?.referralDate ?? referral?.createdAt,
        ).format('MM/DD/YYYY')}`
      })
  }
}
