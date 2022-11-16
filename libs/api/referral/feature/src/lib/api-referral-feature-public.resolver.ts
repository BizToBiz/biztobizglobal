import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiReferralDataAccessPublicService, Referral } from '@biztobiz/api/referral/data-access'

@Resolver(() => Referral)
export class ApiReferralFeaturePublicResolver {
  constructor(private readonly service: ApiReferralDataAccessPublicService) {}

  @ResolveField(() => String, { nullable: true })
  name(@Parent() referral: Referral) {
    return this.service.referralName(referral)
  }
}
