import { UseGuards, ValidationPipe } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
  AccountUpdatePasswordInput,
  AccountUpdateProfileInput,
  ApiAccountDataAccessService,
} from '@biztobiz/api/account/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiAccountFeatureResolver {
  constructor(private readonly service: ApiAccountDataAccessService) {}

  @Query(() => User, { nullable: true })
  accountProfile(@CtxUser() user: User) {
    return this.service.accountProfile(user.id)
  }

  @Query(() => Boolean, { nullable: true })
  accountUsernameAvailable(@CtxUser() user: User, @Args('username') username: string) {
    return this.service.accountUsernameAvailable(user.id, username)
  }

  @Mutation(() => User, { nullable: true })
  accountUpdateProfile(@CtxUser() user: User, @Args('input', new ValidationPipe()) input: AccountUpdateProfileInput) {
    return this.service.accountUpdateProfile(user.id, input)
  }

  @Mutation(() => Boolean, { nullable: true })
  accountResetPassword(@CtxUser() user: User) {
    return this.service.accountResetPassword(user.id)
  }

  @Mutation(() => Boolean, { nullable: true })
  accountUpdatePassword(@CtxUser() user: User, @Args('input', new ValidationPipe()) input: AccountUpdatePasswordInput) {
    return this.service.accountUpdatePassword(user.id, input)
  }
}
