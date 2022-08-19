import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateReferralInput,
  AdminListReferralInput,
  AdminUpdateReferralInput,
  ApiReferralDataAccessLeaderService,
  Referral,
} from '@biztobiz/api/referral/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiReferralFeatureLeaderResolver {
  constructor(private readonly service: ApiReferralDataAccessLeaderService) {}

  @Query(() => [Referral], { nullable: true })
  leaderReferrals(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListReferralInput, nullable: true }) input?: AdminListReferralInput,
  ) {
    return this.service.leaderReferrals(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountReferrals(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListReferralInput, nullable: true }) input?: AdminListReferralInput,
  ) {
    return this.service.leaderCountReferrals(leader.id, input)
  }

  @Query(() => Referral, { nullable: true })
  leaderReferral(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('referralId') referralId: string) {
    return this.service.leaderReferral(info, leader.id, referralId)
  }

  @Mutation(() => Referral, { nullable: true })
  leaderCreateReferral(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateReferralInput,
  ) {
    return this.service.leaderCreateReferral(info, leader.id, input)
  }

  @Mutation(() => Referral, { nullable: true })
  leaderUpdateReferral(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('referralId') referralId: string,
    @Args('input') input: AdminUpdateReferralInput,
  ) {
    return this.service.leaderUpdateReferral(info, leader.id, referralId, input)
  }

  @Mutation(() => Referral, { nullable: true })
  leaderDeleteReferral(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('referralId') referralId: string,
  ) {
    return this.service.leaderDeleteReferral(info, leader.id, referralId)
  }
}
