import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreatePowerHourInput,
  AdminListPowerHourInput,
  AdminUpdatePowerHourInput,
  ApiPowerHourDataAccessAdminService,
  PowerHour,
} from '@biztobiz/api/power-hour/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiPowerHourFeatureAdminResolver {
  constructor(private readonly service: ApiPowerHourDataAccessAdminService) {}

  @Query(() => [PowerHour], { nullable: true })
  adminPowerHours(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListPowerHourInput, nullable: true }) input?: AdminListPowerHourInput,
  ) {
    return this.service.adminPowerHours(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountPowerHours(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListPowerHourInput, nullable: true }) input?: AdminListPowerHourInput,
  ) {
    return this.service.adminCountPowerHours(admin.id, input)
  }

  @Query(() => PowerHour, { nullable: true })
  adminPowerHour(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('powerHourId') powerHourId: string) {
    return this.service.adminPowerHour(info, admin.id, powerHourId)
  }

  @Mutation(() => PowerHour, { nullable: true })
  adminCreatePowerHour(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreatePowerHourInput,
  ) {
    return this.service.adminCreatePowerHour(info, admin.id, input)
  }

  @Mutation(() => PowerHour, { nullable: true })
  adminUpdatePowerHour(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('powerHourId') powerHourId: string,
    @Args('input') input: AdminUpdatePowerHourInput,
  ) {
    return this.service.adminUpdatePowerHour(info, admin.id, powerHourId, input)
  }

  @Mutation(() => PowerHour, { nullable: true })
  adminDeletePowerHour(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('powerHourId') powerHourId: string,
  ) {
    return this.service.adminDeletePowerHour(info, admin.id, powerHourId)
  }
}
