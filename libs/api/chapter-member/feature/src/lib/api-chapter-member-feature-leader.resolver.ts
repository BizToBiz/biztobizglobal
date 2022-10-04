import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateChapterMemberInput,
  AdminListChapterMemberInput,
  AdminUpdateChapterMemberInput,
  ApiChapterMemberDataAccessLeaderService,
  ChapterMember,
} from '@biztobiz/api/chapter-member/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'
import { UseGuards } from '@nestjs/common'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiChapterMemberFeatureLeaderResolver {
  constructor(private readonly service: ApiChapterMemberDataAccessLeaderService) {}

  @Query(() => [ChapterMember], { nullable: true })
  leaderChapterMembers(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListChapterMemberInput, nullable: true })
    input?: AdminListChapterMemberInput,
  ) {
    return this.service.leaderChapterMembers(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountChapterMembers(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListChapterMemberInput, nullable: true })
    input?: AdminListChapterMemberInput,
  ) {
    return this.service.leaderCountChapterMembers(leader.id, input)
  }

  @Query(() => ChapterMember, { nullable: true })
  leaderChapterMember(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterMemberId') chapterMemberId: string,
  ) {
    return this.service.leaderChapterMember(info, leader.id, chapterMemberId)
  }

  @Mutation(() => ChapterMember, { nullable: true })
  leaderCreateChapterMember(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateChapterMemberInput,
  ) {
    return this.service.leaderCreateChapterMember(info, leader.id, input)
  }

  @Mutation(() => ChapterMember, { nullable: true })
  leaderUpdateChapterMember(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterMemberId') chapterMemberId: string,
    @Args('input') input: AdminUpdateChapterMemberInput,
  ) {
    return this.service.leaderUpdateChapterMember(info, leader.id, chapterMemberId, input)
  }

  @Mutation(() => ChapterMember, { nullable: true })
  leaderDeleteChapterMember(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterMemberId') chapterMemberId: string,
  ) {
    return this.service.leaderDeleteChapterMember(info, leader.id, chapterMemberId)
  }
}
