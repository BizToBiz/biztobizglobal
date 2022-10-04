import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateReferralInput,
  AdminListReferralInput,
  AdminUpdateReferralInput,
  ApiReferralDataAccessAdminService,
  Referral,
} from '@biztobiz/api/referral/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiReferralFeatureAdminResolver {
  constructor(private readonly service: ApiReferralDataAccessAdminService) {}

  @Query(() => [Referral], { nullable: true })
  adminReferrals(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListReferralInput, nullable: true }) input?: AdminListReferralInput,
  ) {
    return this.service.adminReferrals(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountReferrals(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListReferralInput, nullable: true }) input?: AdminListReferralInput,
  ) {
    return this.service.adminCountReferrals(admin.id, input)
  }

  @Query(() => Referral, { nullable: true })
  adminReferral(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('referralId') referralId: string) {
    return this.service.adminReferral(info, admin.id, referralId)
  }

  @Mutation(() => Referral, { nullable: true })
  adminCreateReferral(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateReferralInput,
  ) {
    return this.service.adminCreateReferral(info, admin.id, input)
  }

  @Mutation(() => Referral, { nullable: true })
  adminUpdateReferral(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('referralId') referralId: string,
    @Args('input') input: AdminUpdateReferralInput,
  ) {
    return this.service.adminUpdateReferral(info, admin.id, referralId, input)
  }

  @Mutation(() => Referral, { nullable: true })
  adminDeleteReferral(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('referralId') referralId: string,
  ) {
    return this.service.adminDeleteReferral(info, admin.id, referralId)
  }
}
