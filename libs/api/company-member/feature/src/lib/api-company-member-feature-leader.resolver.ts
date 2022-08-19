import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateCompanyMemberInput,
  AdminListCompanyMemberInput,
  AdminUpdateCompanyMemberInput,
  ApiCompanyMemberDataAccessLeaderService,
  CompanyMember,
} from '@biztobiz/api/company-member/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiCompanyMemberFeatureLeaderResolver {
  constructor(private readonly service: ApiCompanyMemberDataAccessLeaderService) {}

  @Query(() => [CompanyMember], { nullable: true })
  leaderCompanyMembers(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListCompanyMemberInput, nullable: true })
    input?: AdminListCompanyMemberInput,
  ) {
    return this.service.leaderCompanyMembers(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountCompanyMembers(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListCompanyMemberInput, nullable: true })
    input?: AdminListCompanyMemberInput,
  ) {
    return this.service.leaderCountCompanyMembers(leader.id, input)
  }

  @Query(() => CompanyMember, { nullable: true })
  leaderCompanyMember(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyMemberId') companyMemberId: string,
  ) {
    return this.service.leaderCompanyMember(info, leader.id, companyMemberId)
  }

  @Mutation(() => CompanyMember, { nullable: true })
  leaderCreateCompanyMember(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateCompanyMemberInput,
  ) {
    return this.service.leaderCreateCompanyMember(info, leader.id, input)
  }

  @Mutation(() => CompanyMember, { nullable: true })
  leaderUpdateCompanyMember(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyMemberId') companyMemberId: string,
    @Args('input') input: AdminUpdateCompanyMemberInput,
  ) {
    return this.service.leaderUpdateCompanyMember(info, leader.id, companyMemberId, input)
  }

  @Mutation(() => CompanyMember, { nullable: true })
  leaderDeleteCompanyMember(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyMemberId') companyMemberId: string,
  ) {
    return this.service.leaderDeleteCompanyMember(info, leader.id, companyMemberId)
  }
}
