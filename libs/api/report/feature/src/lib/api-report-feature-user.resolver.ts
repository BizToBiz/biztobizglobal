import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql'
import { ForbiddenException, UseGuards } from '@nestjs/common'
import { ApiReportDataAccessUserService } from '@biztobiz/api/report/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { Role, User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiReportFeatureUserResolver {
  constructor(private readonly data: ApiReportDataAccessUserService) {}

  @Query(() => Int)
  reportReferralsFromChapter(@CtxUser() user: User, @Args('chapterId') chapterId: string) {
    return this.data.reportReferralsFromChapter(user.id, chapterId)
  }

  @Query(() => Int)
  reportReferralsToChapter(@CtxUser() user: User, @Args('chapterId') chapterId: string) {
    return this.data.reportReferralsToChapter(user.id, chapterId)
  }

  @Query(() => Int)
  reportReferralsFromUser(@CtxUser() user: User) {
    return this.data.reportReferralsFromUser(user.id)
  }

  @Query(() => Int)
  reportReferralsToUser(@CtxUser() user: User) {
    return this.data.reportReferralsToUser(user.id)
  }

  @Query(() => Int)
  reportReferralsTotal(@CtxUser() user: User) {
    if (user.role !== Role.Admin) {
      throw new ForbiddenException(`You need to have Admin access`)
    }
    return this.data.reportReferralsTotal()
  }

  @Query(() => Float)
  reportTransactionsTotalUser(@CtxUser() user: User) {
    return this.data.reportTransactionsTotalUser(user.id)
  }

  @Query(() => Float)
  reportTransactionsTotalChapter(@Args('chapterId') chapterId: string) {
    return this.data.reportTransactionsTotalChapter(chapterId)
  }
}
