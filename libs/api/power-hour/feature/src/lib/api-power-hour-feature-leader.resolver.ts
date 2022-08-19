import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreatePowerHourInput,
  AdminListPowerHourInput,
  AdminUpdatePowerHourInput,
  ApiPowerHourDataAccessLeaderService,
  PowerHour,
} from '@biztobiz/api/power-hour/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiPowerHourFeatureLeaderResolver {
  constructor(private readonly service: ApiPowerHourDataAccessLeaderService) {}

  @Query(() => [PowerHour], { nullable: true })
  leaderPowerHours(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListPowerHourInput, nullable: true }) input?: AdminListPowerHourInput,
  ) {
    return this.service.leaderPowerHours(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountPowerHours(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListPowerHourInput, nullable: true }) input?: AdminListPowerHourInput,
  ) {
    return this.service.leaderCountPowerHours(leader.id, input)
  }

  @Query(() => PowerHour, { nullable: true })
  leaderPowerHour(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('powerHourId') powerHourId: string) {
    return this.service.leaderPowerHour(info, leader.id, powerHourId)
  }

  @Mutation(() => PowerHour, { nullable: true })
  leaderCreatePowerHour(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreatePowerHourInput,
  ) {
    return this.service.leaderCreatePowerHour(info, leader.id, input)
  }

  @Mutation(() => PowerHour, { nullable: true })
  leaderUpdatePowerHour(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('powerHourId') powerHourId: string,
    @Args('input') input: AdminUpdatePowerHourInput,
  ) {
    return this.service.leaderUpdatePowerHour(info, leader.id, powerHourId, input)
  }

  @Mutation(() => PowerHour, { nullable: true })
  leaderDeletePowerHour(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('powerHourId') powerHourId: string,
  ) {
    return this.service.leaderDeletePowerHour(info, leader.id, powerHourId)
  }
}
