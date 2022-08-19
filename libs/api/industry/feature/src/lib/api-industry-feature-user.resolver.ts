import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateIndustryInput,
  UserListIndustryInput,
  UserUpdateIndustryInput,
  ApiIndustryDataAccessUserService,
  Industry,
} from '@biztobiz/api/industry/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
export class ApiIndustryFeatureUserResolver {
  constructor(private readonly service: ApiIndustryDataAccessUserService) {}

  @Query(() => [Industry], { nullable: true })
  userIndustries(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListIndustryInput, nullable: true }) input?: UserListIndustryInput,
  ) {
    return this.service.userIndustries(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountIndustries(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListIndustryInput, nullable: true }) input?: UserListIndustryInput,
  ) {
    return this.service.userCountIndustries(user.id, input)
  }

  @Query(() => Industry, { nullable: true })
  userIndustry(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('industryId') industryId: string) {
    return this.service.userIndustry(info, user.id, industryId)
  }

  @Mutation(() => Industry, { nullable: true })
  userCreateIndustry(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateIndustryInput,
  ) {
    return this.service.userCreateIndustry(info, user.id, input)
  }

  @Mutation(() => Industry, { nullable: true })
  userUpdateIndustry(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('industryId') industryId: string,
    @Args('input') input: UserUpdateIndustryInput,
  ) {
    return this.service.userUpdateIndustry(info, user.id, industryId, input)
  }

  @Mutation(() => Industry, { nullable: true })
  userDeleteIndustry(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('industryId') industryId: string) {
    return this.service.userDeleteIndustry(info, user.id, industryId)
  }
}
