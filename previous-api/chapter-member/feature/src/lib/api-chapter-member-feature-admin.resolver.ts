import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateChapterMemberInput,
  AdminListChapterMemberInput,
  AdminUpdateChapterMemberInput,
  ApiChapterMemberDataAccessAdminService,
  ChapterMember,
} from '@biztobiz/api/chapter-member/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiChapterMemberFeatureAdminResolver {
  constructor(private readonly service: ApiChapterMemberDataAccessAdminService) {}

  @Query(() => [ChapterMember], { nullable: true })
  adminChapterMembers(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListChapterMemberInput, nullable: true })
    input?: AdminListChapterMemberInput,
  ) {
    return this.service.adminChapterMembers(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountChapterMembers(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListChapterMemberInput, nullable: true })
    input?: AdminListChapterMemberInput,
  ) {
    return this.service.adminCountChapterMembers(admin.id, input)
  }

  @Query(() => ChapterMember, { nullable: true })
  adminChapterMember(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterMemberId') chapterMemberId: string,
  ) {
    return this.service.adminChapterMember(info, admin.id, chapterMemberId)
  }

  @Mutation(() => ChapterMember, { nullable: true })
  adminCreateChapterMember(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateChapterMemberInput,
  ) {
    return this.service.adminCreateChapterMember(info, admin.id, input)
  }

  @Mutation(() => ChapterMember, { nullable: true })
  adminUpdateChapterMember(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterMemberId') chapterMemberId: string,
    @Args('input') input: AdminUpdateChapterMemberInput,
  ) {
    return this.service.adminUpdateChapterMember(info, admin.id, chapterMemberId, input)
  }

  @Mutation(() => ChapterMember, { nullable: true })
  adminDeleteChapterMember(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterMemberId') chapterMemberId: string,
  ) {
    return this.service.adminDeleteChapterMember(info, admin.id, chapterMemberId)
  }
}
