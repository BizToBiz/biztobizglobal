import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateIndustryInput,
  AdminListIndustryInput,
  AdminUpdateIndustryInput,
  ApiIndustryDataAccessLeaderService,
  Industry,
} from '@biztobiz/api/industry/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiIndustryFeatureLeaderResolver {
  constructor(private readonly service: ApiIndustryDataAccessLeaderService) {}

  @Query(() => [Industry], { nullable: true })
  leaderIndustries(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListIndustryInput, nullable: true }) input?: AdminListIndustryInput,
  ) {
    return this.service.leaderIndustries(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountIndustries(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListIndustryInput, nullable: true }) input?: AdminListIndustryInput,
  ) {
    return this.service.leaderCountIndustries(leader.id, input)
  }

  @Query(() => Industry, { nullable: true })
  leaderIndustry(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('industryId') industryId: string) {
    return this.service.leaderIndustry(info, leader.id, industryId)
  }

  @Mutation(() => Industry, { nullable: true })
  leaderCreateIndustry(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateIndustryInput,
  ) {
    return this.service.leaderCreateIndustry(info, leader.id, input)
  }

  @Mutation(() => Industry, { nullable: true })
  leaderUpdateIndustry(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('industryId') industryId: string,
    @Args('input') input: AdminUpdateIndustryInput,
  ) {
    return this.service.leaderUpdateIndustry(info, leader.id, industryId, input)
  }

  @Mutation(() => Industry, { nullable: true })
  leaderDeleteIndustry(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('industryId') industryId: string,
  ) {
    return this.service.leaderDeleteIndustry(info, leader.id, industryId)
  }
}
