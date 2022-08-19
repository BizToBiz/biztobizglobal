import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateChapterInput,
  UserListChapterInput,
  UserUpdateChapterInput,
  ApiChapterDataAccessUserService,
  Chapter,
} from '@biztobiz/api/chapter/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
export class ApiChapterFeatureUserResolver {
  constructor(private readonly service: ApiChapterDataAccessUserService) {}

  @Query(() => [Chapter], { nullable: true })
  userChapters(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListChapterInput, nullable: true }) input?: UserListChapterInput,
  ) {
    return this.service.userChapters(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountChapters(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListChapterInput, nullable: true }) input?: UserListChapterInput,
  ) {
    return this.service.userCountChapters(user.id, input)
  }

  @Query(() => Chapter, { nullable: true })
  userChapter(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('chapterId') chapterId: string) {
    return this.service.userChapter(info, user.id, chapterId)
  }

  @Mutation(() => Chapter, { nullable: true })
  userCreateChapter(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateChapterInput,
  ) {
    return this.service.userCreateChapter(info, user.id, input)
  }

  @Mutation(() => Chapter, { nullable: true })
  userUpdateChapter(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterId') chapterId: string,
    @Args('input') input: UserUpdateChapterInput,
  ) {
    return this.service.userUpdateChapter(info, user.id, chapterId, input)
  }

  @Mutation(() => Chapter, { nullable: true })
  userDeleteChapter(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('chapterId') chapterId: string) {
    return this.service.userDeleteChapter(info, user.id, chapterId)
  }
}
