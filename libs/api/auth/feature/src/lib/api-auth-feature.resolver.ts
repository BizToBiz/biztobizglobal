import {
  ApiAuthDataAccessService,
  ForgotPasswordInput,
  LoginInput,
  RegisterInput,
  ResetPasswordInput,
  SpyOnUserInput,
  UserToken,
} from '@biztobiz/api/auth/data-access'
import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Logger, UseGuards } from '@nestjs/common'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver(() => UserToken)
export class ApiAuthFeatureResolver {
  constructor(private readonly service: ApiAuthDataAccessService) {}

  @Query(() => User, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async me(@CtxUser() user: User) {
    return user
  }

  @Mutation(() => UserToken, { nullable: true })
  async login(@Context() context, @Args('input') input: LoginInput): Promise<UserToken> {
    const userToken = await this.service.login(input)
    this.service.setCookie(context.res, userToken.token)
    return userToken
  }

  @Mutation(() => Boolean, { nullable: true })
  async logout(@Context() context) {
    Logger.log('LOGOUT ++++++++')
    this.service.clearCookie(context.res)
    return true
  }

  @Mutation(() => UserToken, { nullable: true })
  async register(@Context() context, @Args('input') input: RegisterInput) {
    Logger.log('register', input)
    const userToken = await this.service.register(input)
    this.service.setCookie(context.res, userToken.token)
    return userToken
  }

  @Mutation(() => Boolean, { nullable: true })
  forgotPassword(@Args('input') input: ForgotPasswordInput): Promise<boolean> {
    return this.service.forgotPassword(input.email)
  }

  @Mutation(() => User, { nullable: true })
  resetPassword(@Args('input') input: ResetPasswordInput): Promise<User> {
    return this.service.resetPassword(input.password, input.token)
  }

  @Mutation(() => UserToken, { nullable: true })
  async spyOnUser(@Context() context, @Args('input') input: SpyOnUserInput): Promise<UserToken> {
    const userToken = await this.service.spyOnUser(input)
    this.service.setCookie(context.res, userToken.token)
    return userToken
  }

  @ResolveField('user')
  user(@Parent() auth: UserToken) {
    return this.service.getUserFromToken(auth.token)
  }
}
