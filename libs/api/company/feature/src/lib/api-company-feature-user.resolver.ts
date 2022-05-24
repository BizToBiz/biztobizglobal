import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  ApiCompanyDataAccessUserService,
  Company,
  UserCreateCompanyInput,
  UserListCompanyInput,
  UserUpdateCompanyInput,
} from '@biztobiz/api/company/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiCompanyFeatureUserResolver {
  constructor(private readonly service: ApiCompanyDataAccessUserService) {}

  @Query(() => [Company], { nullable: true })
  userCompanys(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListCompanyInput, nullable: true }) input?: UserListCompanyInput,
  ) {
    return this.service.userCompanys(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountCompanys(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListCompanyInput, nullable: true }) input?: UserListCompanyInput,
  ) {
    return this.service.userCountCompanys(user.id, input)
  }

  @Query(() => Company, { nullable: true })
  userCompany(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('companyId') companyId: string) {
    return this.service.userCompany(info, user.id, companyId)
  }

  @Mutation(() => Company, { nullable: true })
  userCreateCompany(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateCompanyInput,
  ) {
    return this.service.userCreateCompany(info, user.id, input)
  }

  @Mutation(() => Company, { nullable: true })
  userUpdateCompany(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('companyId') companyId: string,
    @Args('input') input: UserUpdateCompanyInput,
  ) {
    return this.service.userUpdateCompany(info, user.id, companyId, input)
  }

  @Mutation(() => Company, { nullable: true })
  userDeleteCompany(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('companyId') companyId: string) {
    return this.service.userDeleteCompany(info, user.id, companyId)
  }
}
