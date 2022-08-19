import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateSubstituteGroupInput,
  AdminListSubstituteGroupInput,
  AdminUpdateSubstituteGroupInput,
  ApiSubstituteGroupDataAccessAdminService,
  SubstituteGroup,
} from '@biztobiz/api/substitute-group/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiSubstituteGroupFeatureAdminResolver {
  constructor(private readonly service: ApiSubstituteGroupDataAccessAdminService) {}

  @Query(() => [SubstituteGroup], { nullable: true })
  adminSubstituteGroups(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListSubstituteGroupInput, nullable: true })
    input?: AdminListSubstituteGroupInput,
  ) {
    return this.service.adminSubstituteGroups(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountSubstituteGroups(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListSubstituteGroupInput, nullable: true })
    input?: AdminListSubstituteGroupInput,
  ) {
    return this.service.adminCountSubstituteGroups(admin.id, input)
  }

  @Query(() => SubstituteGroup, { nullable: true })
  adminSubstituteGroup(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteGroupId') substituteGroupId: string,
  ) {
    return this.service.adminSubstituteGroup(info, admin.id, substituteGroupId)
  }

  @Mutation(() => SubstituteGroup, { nullable: true })
  adminCreateSubstituteGroup(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateSubstituteGroupInput,
  ) {
    return this.service.adminCreateSubstituteGroup(info, admin.id, input)
  }

  @Mutation(() => SubstituteGroup, { nullable: true })
  adminUpdateSubstituteGroup(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteGroupId') substituteGroupId: string,
    @Args('input') input: AdminUpdateSubstituteGroupInput,
  ) {
    return this.service.adminUpdateSubstituteGroup(info, admin.id, substituteGroupId, input)
  }

  @Mutation(() => SubstituteGroup, { nullable: true })
  adminDeleteSubstituteGroup(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteGroupId') substituteGroupId: string,
  ) {
    return this.service.adminDeleteSubstituteGroup(info, admin.id, substituteGroupId)
  }
}
