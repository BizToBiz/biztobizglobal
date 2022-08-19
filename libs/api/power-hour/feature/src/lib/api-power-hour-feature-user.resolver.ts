import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreatePowerHourInput,
  UserListPowerHourInput,
  UserUpdatePowerHourInput,
  ApiPowerHourDataAccessUserService,
  PowerHour,
} from '@biztobiz/api/power-hour/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
export class ApiPowerHourFeatureUserResolver {
  constructor(private readonly service: ApiPowerHourDataAccessUserService) {}

  @Query(() => [PowerHour], { nullable: true })
  userPowerHours(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListPowerHourInput, nullable: true }) input?: UserListPowerHourInput,
  ) {
    return this.service.userPowerHours(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountPowerHours(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListPowerHourInput, nullable: true }) input?: UserListPowerHourInput,
  ) {
    return this.service.userCountPowerHours(user.id, input)
  }

  @Query(() => PowerHour, { nullable: true })
  userPowerHour(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('powerHourId') powerHourId: string) {
    return this.service.userPowerHour(info, user.id, powerHourId)
  }

  @Mutation(() => PowerHour, { nullable: true })
  userCreatePowerHour(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreatePowerHourInput,
  ) {
    return this.service.userCreatePowerHour(info, user.id, input)
  }

  @Mutation(() => PowerHour, { nullable: true })
  userUpdatePowerHour(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('powerHourId') powerHourId: string,
    @Args('input') input: UserUpdatePowerHourInput,
  ) {
    return this.service.userUpdatePowerHour(info, user.id, powerHourId, input)
  }

  @Mutation(() => PowerHour, { nullable: true })
  userDeletePowerHour(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('powerHourId') powerHourId: string,
  ) {
    return this.service.userDeletePowerHour(info, user.id, powerHourId)
  }
}
