import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateUploadInput,
  AdminListUploadInput,
  AdminUpdateUploadInput,
  ApiUploadDataAccessLeaderService,
  Upload,
} from '@biztobiz/api/upload/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiUploadFeatureLeaderResolver {
  constructor(private readonly service: ApiUploadDataAccessLeaderService) {}

  @Query(() => [Upload], { nullable: true })
  leaderUploads(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListUploadInput, nullable: true }) input?: AdminListUploadInput,
  ) {
    return this.service.leaderUploads(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountUploads(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListUploadInput, nullable: true }) input?: AdminListUploadInput,
  ) {
    return this.service.leaderCountUploads(leader.id, input)
  }

  @Query(() => Upload, { nullable: true })
  leaderUpload(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('uploadId') uploadId: string) {
    return this.service.leaderUpload(info, leader.id, uploadId)
  }

  @Mutation(() => Upload, { nullable: true })
  leaderCreateUpload(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateUploadInput,
  ) {
    return this.service.leaderCreateUpload(info, leader.id, input)
  }

  @Mutation(() => Upload, { nullable: true })
  leaderUpdateUpload(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('uploadId') uploadId: string,
    @Args('input') input: AdminUpdateUploadInput,
  ) {
    return this.service.leaderUpdateUpload(info, leader.id, uploadId, input)
  }

  @Mutation(() => Upload, { nullable: true })
  leaderDeleteUpload(@CtxUser() leader: User, @Info() info: GraphQLResolveInfo, @Args('uploadId') uploadId: string) {
    return this.service.leaderDeleteUpload(info, leader.id, uploadId)
  }
}
