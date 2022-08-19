import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateCompanyInput,
  AdminListCompanyInput,
  AdminUpdateCompanyInput,
  ApiCompanyDataAccessAdminService,
  Company,
} from '@biztobiz/api/company/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiCompanyFeatureAdminResolver {
  constructor(private readonly service: ApiCompanyDataAccessAdminService) {}

  @Query(() => [Company], { nullable: true })
  adminCompanies(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListCompanyInput, nullable: true }) input?: AdminListCompanyInput,
  ) {
    return this.service.adminCompanies(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountCompanies(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCompanyInput, nullable: true }) input?: AdminListCompanyInput,
  ) {
    return this.service.adminCountCompanies(admin.id, input)
  }

  @Query(() => Company, { nullable: true })
  adminCompany(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('companyId') companyId: string) {
    return this.service.adminCompany(info, admin.id, companyId)
  }

  @Mutation(() => Company, { nullable: true })
  adminCreateCompany(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateCompanyInput,
  ) {
    return this.service.adminCreateCompany(info, admin.id, input)
  }

  @Mutation(() => Company, { nullable: true })
  adminUpdateCompany(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyId') companyId: string,
    @Args('input') input: AdminUpdateCompanyInput,
  ) {
    return this.service.adminUpdateCompany(info, admin.id, companyId, input)
  }

  @Mutation(() => Company, { nullable: true })
  adminDeleteCompany(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('companyId') companyId: string) {
    return this.service.adminDeleteCompany(info, admin.id, companyId)
  }
}
