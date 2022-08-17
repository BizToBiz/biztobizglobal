import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateChapterMemberInput,
  UserListChapterMemberInput,
  UserUpdateChapterMemberInput,
  ApiChapterMemberDataAccessUserService,
  ChapterMember,
} from '@biztobiz/api/chapter-member/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
export class ApiChapterMemberFeatureUserResolver {
  constructor(private readonly service: ApiChapterMemberDataAccessUserService) {}

  @Query(() => [ChapterMember], { nullable: true })
  userChapterMembers(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListChapterMemberInput, nullable: true }) input?: UserListChapterMemberInput,
  ) {
    return this.service.userChapterMembers(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountChapterMembers(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListChapterMemberInput, nullable: true }) input?: UserListChapterMemberInput,
  ) {
    return this.service.userCountChapterMembers(user.id, input)
  }

  @Query(() => ChapterMember, { nullable: true })
  userChapterMember(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterMemberId') chapterMemberId: string,
  ) {
    return this.service.userChapterMember(info, user.id, chapterMemberId)
  }

  @Mutation(() => ChapterMember, { nullable: true })
  userCreateChapterMember(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateChapterMemberInput,
  ) {
    return this.service.userCreateChapterMember(info, user.id, input)
  }

  @Mutation(() => ChapterMember, { nullable: true })
  userUpdateChapterMember(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterMemberId') chapterMemberId: string,
    @Args('input') input: UserUpdateChapterMemberInput,
  ) {
    return this.service.userUpdateChapterMember(info, user.id, chapterMemberId, input)
  }

  @Mutation(() => ChapterMember, { nullable: true })
  userDeleteChapterMember(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('chapterMemberId') chapterMemberId: string,
  ) {
    return this.service.userDeleteChapterMember(info, user.id, chapterMemberId)
  }
}
