import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateCompanyMemberInput,
  UserListCompanyMemberInput,
  UserUpdateCompanyMemberInput,
  ApiCompanyMemberDataAccessUserService,
  CompanyMember,
} from '@biztobiz/api/company-member/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
export class ApiCompanyMemberFeatureUserResolver {
  constructor(private readonly service: ApiCompanyMemberDataAccessUserService) {}

  @Query(() => [CompanyMember], { nullable: true })
  userCompanyMembers(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListCompanyMemberInput, nullable: true }) input?: UserListCompanyMemberInput,
  ) {
    return this.service.userCompanyMembers(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountCompanyMembers(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListCompanyMemberInput, nullable: true }) input?: UserListCompanyMemberInput,
  ) {
    return this.service.userCountCompanyMembers(user.id, input)
  }

  @Query(() => CompanyMember, { nullable: true })
  userCompanyMember(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyMemberId') companyMemberId: string,
  ) {
    return this.service.userCompanyMember(info, user.id, companyMemberId)
  }

  @Mutation(() => CompanyMember, { nullable: true })
  userCreateCompanyMember(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateCompanyMemberInput,
  ) {
    return this.service.userCreateCompanyMember(info, user.id, input)
  }

  @Mutation(() => CompanyMember, { nullable: true })
  userUpdateCompanyMember(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyMemberId') companyMemberId: string,
    @Args('input') input: UserUpdateCompanyMemberInput,
  ) {
    return this.service.userUpdateCompanyMember(info, user.id, companyMemberId, input)
  }

  @Mutation(() => CompanyMember, { nullable: true })
  userDeleteCompanyMember(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyMemberId') companyMemberId: string,
  ) {
    return this.service.userDeleteCompanyMember(info, user.id, companyMemberId)
  }
}
