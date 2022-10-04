import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateChapterInput,
  AdminListChapterInput,
  AdminUpdateChapterInput,
  ApiChapterDataAccessLeaderService,
  Chapter,
} from '@biztobiz/api/chapter/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiChapterFeatureLeaderResolver {
  constructor(private readonly service: ApiChapterDataAccessLeaderService) {}

  @Query(() => [Chapter], { nullable: true })
  leaderChapters(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListChapterInput, nullable: true }) input?: AdminListChapterInput,
  ) {
    return this.service.leaderChapters(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountChapters(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListChapterInput, nullable: true }) input?: AdminListChapterInput,
  ) {
    return this.service.leaderCountChapters(leader.id, input)
  }

  @Query(() => Chapter, { nullable: true })
  leaderChapter(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('chapterId') chapterId: string) {
    return this.service.leaderChapter(info, leader.id, chapterId)
  }

  @Mutation(() => Chapter, { nullable: true })
  leaderCreateChapter(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateChapterInput,
  ) {
    return this.service.leaderCreateChapter(info, leader.id, input)
  }

  @Mutation(() => Chapter, { nullable: true })
  leaderUpdateChapter(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterId') chapterId: string,
    @Args('input') input: AdminUpdateChapterInput,
  ) {
    return this.service.leaderUpdateChapter(info, leader.id, chapterId, input)
  }

  @Mutation(() => Chapter, { nullable: true })
  leaderDeleteChapter(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('chapterId') chapterId: string) {
    return this.service.leaderDeleteChapter(info, leader.id, chapterId)
  }
}
