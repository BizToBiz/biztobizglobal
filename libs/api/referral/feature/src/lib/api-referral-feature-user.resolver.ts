import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  ApiReferralDataAccessUserService,
  Referral,
  UserCreateReferralInput,
  UserListReferralInput,
  UserUpdateReferralInput,
} from '@biztobiz/api/referral/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiReferralFeatureUserResolver {
  constructor(private readonly service: ApiReferralDataAccessUserService) {}

  @Query(() => [Referral], { nullable: true })
  userReferrals(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListReferralInput, nullable: true }) input?: UserListReferralInput,
  ) {
    return this.service.userReferrals(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountReferrals(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListReferralInput, nullable: true }) input?: UserListReferralInput,
  ) {
    return this.service.userCountReferrals(user.id, input)
  }

  @Query(() => Referral, { nullable: true })
  userReferral(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('referralId') referralId: string) {
    return this.service.userReferral(info, user.id, referralId)
  }

  @Mutation(() => Referral, { nullable: true })
  userCreateReferral(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateReferralInput,
  ) {
    return this.service.userCreateReferral(info, user.id, input)
  }

  @Mutation(() => Referral, { nullable: true })
  userUpdateReferral(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('referralId') referralId: string,
    @Args('input') input: UserUpdateReferralInput,
  ) {
    return this.service.userUpdateReferral(info, user.id, referralId, input)
  }

  @Mutation(() => Referral, { nullable: true })
  userDeleteReferral(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('referralId') referralId: string) {
    return this.service.userDeleteReferral(info, user.id, referralId)
  }
}
