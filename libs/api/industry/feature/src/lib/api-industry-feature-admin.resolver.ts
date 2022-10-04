import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateIndustryInput,
  AdminListIndustryInput,
  AdminUpdateIndustryInput,
  ApiIndustryDataAccessAdminService,
  Industry,
} from '@biztobiz/api/industry/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiIndustryFeatureAdminResolver {
  constructor(private readonly service: ApiIndustryDataAccessAdminService) {}

  @Query(() => [Industry], { nullable: true })
  adminIndustries(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListIndustryInput, nullable: true }) input?: AdminListIndustryInput,
  ) {
    return this.service.adminIndustries(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountIndustries(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListIndustryInput, nullable: true }) input?: AdminListIndustryInput,
  ) {
    return this.service.adminCountIndustries(admin.id, input)
  }

  @Query(() => Industry, { nullable: true })
  adminIndustry(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('industryId') industryId: string) {
    return this.service.adminIndustry(info, admin.id, industryId)
  }

  @Mutation(() => Industry, { nullable: true })
  adminCreateIndustry(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateIndustryInput,
  ) {
    return this.service.adminCreateIndustry(info, admin.id, input)
  }

  @Mutation(() => Industry, { nullable: true })
  adminUpdateIndustry(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('industryId') industryId: string,
    @Args('input') input: AdminUpdateIndustryInput,
  ) {
    return this.service.adminUpdateIndustry(info, admin.id, industryId, input)
  }

  @Mutation(() => Industry, { nullable: true })
  adminDeleteIndustry(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('industryId') industryId: string,
  ) {
    return this.service.adminDeleteIndustry(info, admin.id, industryId)
  }
}
