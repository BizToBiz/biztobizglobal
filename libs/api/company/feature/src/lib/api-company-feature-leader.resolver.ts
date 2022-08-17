import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateCompanyInput,
  AdminListCompanyInput,
  AdminUpdateCompanyInput,
  ApiCompanyDataAccessLeaderService,
  Company,
} from '@biztobiz/api/company/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiCompanyFeatureLeaderResolver {
  constructor(private readonly service: ApiCompanyDataAccessLeaderService) {}

  @Query(() => [Company], { nullable: true })
  leaderCompanies(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListCompanyInput, nullable: true }) input?: AdminListCompanyInput,
  ) {
    return this.service.leaderCompanies(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountCompanies(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListCompanyInput, nullable: true }) input?: AdminListCompanyInput,
  ) {
    return this.service.leaderCountCompanies(leader.id, input)
  }

  @Query(() => Company, { nullable: true })
  leaderCompany(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('companyId') companyId: string) {
    return this.service.leaderCompany(info, leader.id, companyId)
  }

  @Mutation(() => Company, { nullable: true })
  leaderCreateCompany(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateCompanyInput,
  ) {
    return this.service.leaderCreateCompany(info, leader.id, input)
  }

  @Mutation(() => Company, { nullable: true })
  leaderUpdateCompany(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyId') companyId: string,
    @Args('input') input: AdminUpdateCompanyInput,
  ) {
    return this.service.leaderUpdateCompany(info, leader.id, companyId, input)
  }

  @Mutation(() => Company, { nullable: true })
  leaderDeleteCompany(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('companyId') companyId: string) {
    return this.service.leaderDeleteCompany(info, leader.id, companyId)
  }
}
