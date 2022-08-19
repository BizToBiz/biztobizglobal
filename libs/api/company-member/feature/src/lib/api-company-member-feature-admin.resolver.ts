import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateCompanyMemberInput,
  AdminListCompanyMemberInput,
  AdminUpdateCompanyMemberInput,
  ApiCompanyMemberDataAccessAdminService,
  CompanyMember,
} from '@biztobiz/api/company-member/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiCompanyMemberFeatureAdminResolver {
  constructor(private readonly service: ApiCompanyMemberDataAccessAdminService) {}

  @Query(() => [CompanyMember], { nullable: true })
  adminCompanyMembers(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListCompanyMemberInput, nullable: true })
    input?: AdminListCompanyMemberInput,
  ) {
    return this.service.adminCompanyMembers(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountCompanyMembers(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCompanyMemberInput, nullable: true })
    input?: AdminListCompanyMemberInput,
  ) {
    return this.service.adminCountCompanyMembers(admin.id, input)
  }

  @Query(() => CompanyMember, { nullable: true })
  adminCompanyMember(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyMemberId') companyMemberId: string,
  ) {
    return this.service.adminCompanyMember(info, admin.id, companyMemberId)
  }

  @Mutation(() => CompanyMember, { nullable: true })
  adminCreateCompanyMember(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateCompanyMemberInput,
  ) {
    return this.service.adminCreateCompanyMember(info, admin.id, input)
  }

  @Mutation(() => CompanyMember, { nullable: true })
  adminUpdateCompanyMember(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyMemberId') companyMemberId: string,
    @Args('input') input: AdminUpdateCompanyMemberInput,
  ) {
    return this.service.adminUpdateCompanyMember(info, admin.id, companyMemberId, input)
  }

  @Mutation(() => CompanyMember, { nullable: true })
  adminDeleteCompanyMember(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyMemberId') companyMemberId: string,
  ) {
    return this.service.adminDeleteCompanyMember(info, admin.id, companyMemberId)
  }
}
