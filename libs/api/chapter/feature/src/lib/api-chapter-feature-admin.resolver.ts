import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateChapterInput,
  AdminListChapterInput,
  AdminUpdateChapterInput,
  ApiChapterDataAccessAdminService,
  Chapter,
} from '@biztobiz/api/chapter/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiChapterFeatureAdminResolver {
  constructor(private readonly service: ApiChapterDataAccessAdminService) {}

  @Query(() => [Chapter], { nullable: true })
  adminChapters(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListChapterInput, nullable: true }) input?: AdminListChapterInput,
  ) {
    return this.service.adminChapters(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountChapters(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListChapterInput, nullable: true }) input?: AdminListChapterInput,
  ) {
    return this.service.adminCountChapters(admin.id, input)
  }

  @Query(() => Chapter, { nullable: true })
  adminChapter(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('chapterId') chapterId: string) {
    return this.service.adminChapter(info, admin.id, chapterId)
  }

  @Mutation(() => Chapter, { nullable: true })
  adminCreateChapter(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateChapterInput,
  ) {
    return this.service.adminCreateChapter(info, admin.id, input)
  }

  @Mutation(() => Chapter, { nullable: true })
  adminUpdateChapter(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterId') chapterId: string,
    @Args('input') input: AdminUpdateChapterInput,
  ) {
    return this.service.adminUpdateChapter(info, admin.id, chapterId, input)
  }

  @Mutation(() => Chapter, { nullable: true })
  adminDeleteChapter(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('chapterId') chapterId: string) {
    return this.service.adminDeleteChapter(info, admin.id, chapterId)
  }
}
