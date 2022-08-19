import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateSubstituteInput,
  AdminListSubstituteInput,
  AdminUpdateSubstituteInput,
  ApiSubstituteDataAccessAdminService,
  Substitute,
} from '@biztobiz/api/substitute/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiSubstituteFeatureAdminResolver {
  constructor(private readonly service: ApiSubstituteDataAccessAdminService) {}

  @Query(() => [Substitute], { nullable: true })
  adminSubstitutes(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListSubstituteInput, nullable: true }) input?: AdminListSubstituteInput,
  ) {
    return this.service.adminSubstitutes(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountSubstitutes(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListSubstituteInput, nullable: true }) input?: AdminListSubstituteInput,
  ) {
    return this.service.adminCountSubstitutes(admin.id, input)
  }

  @Query(() => Substitute, { nullable: true })
  adminSubstitute(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteId') substituteId: string,
  ) {
    return this.service.adminSubstitute(info, admin.id, substituteId)
  }

  @Mutation(() => Substitute, { nullable: true })
  adminCreateSubstitute(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateSubstituteInput,
  ) {
    return this.service.adminCreateSubstitute(info, admin.id, input)
  }

  @Mutation(() => Substitute, { nullable: true })
  adminUpdateSubstitute(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteId') substituteId: string,
    @Args('input') input: AdminUpdateSubstituteInput,
  ) {
    return this.service.adminUpdateSubstitute(info, admin.id, substituteId, input)
  }

  @Mutation(() => Substitute, { nullable: true })
  adminDeleteSubstitute(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('substituteId') substituteId: string,
  ) {
    return this.service.adminDeleteSubstitute(info, admin.id, substituteId)
  }
}
