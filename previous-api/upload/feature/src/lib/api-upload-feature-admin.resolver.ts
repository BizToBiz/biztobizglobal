import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateUploadInput,
  AdminListUploadInput,
  AdminUpdateUploadInput,
  ApiUploadDataAccessAdminService,
  Upload,
} from '@biztobiz/api/upload/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiUploadFeatureAdminResolver {
  constructor(private readonly service: ApiUploadDataAccessAdminService) {}

  @Query(() => [Upload], { nullable: true })
  adminUploads(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListUploadInput, nullable: true }) input?: AdminListUploadInput,
  ) {
    return this.service.adminUploads(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountUploads(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListUploadInput, nullable: true }) input?: AdminListUploadInput,
  ) {
    return this.service.adminCountUploads(admin.id, input)
  }

  @Query(() => Upload, { nullable: true })
  adminUpload(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('uploadId') uploadId: string) {
    return this.service.adminUpload(info, admin.id, uploadId)
  }

  @Mutation(() => Upload, { nullable: true })
  adminCreateUpload(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateUploadInput,
  ) {
    return this.service.adminCreateUpload(info, admin.id, input)
  }

  @Mutation(() => Upload, { nullable: true })
  adminUpdateUpload(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('uploadId') uploadId: string,
    @Args('input') input: AdminUpdateUploadInput,
  ) {
    return this.service.adminUpdateUpload(info, admin.id, uploadId, input)
  }

  @Mutation(() => Upload, { nullable: true })
  adminDeleteUpload(@CtxUser() admin: User, @Info() info: GraphQLResolveInfo, @Args('uploadId') uploadId: string) {
    return this.service.adminDeleteUpload(info, admin.id, uploadId)
  }
}
