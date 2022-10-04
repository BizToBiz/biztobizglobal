import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateUploadInput,
  UserListUploadInput,
  UserUpdateUploadInput,
  ApiUploadDataAccessUserService,
  Upload,
} from '@biztobiz/api/upload/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
export class ApiUploadFeatureUserResolver {
  constructor(private readonly service: ApiUploadDataAccessUserService) {}

  @Query(() => [Upload], { nullable: true })
  userUploads(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListUploadInput, nullable: true }) input?: UserListUploadInput,
  ) {
    return this.service.userUploads(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountUploads(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListUploadInput, nullable: true }) input?: UserListUploadInput,
  ) {
    return this.service.userCountUploads(user.id, input)
  }

  @Query(() => Upload, { nullable: true })
  userUpload(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('uploadId') uploadId: string) {
    return this.service.userUpload(info, user.id, uploadId)
  }

  @Mutation(() => Upload, { nullable: true })
  userCreateUpload(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateUploadInput,
  ) {
    return this.service.userCreateUpload(info, user.id, input)
  }

  @Mutation(() => Upload, { nullable: true })
  userUpdateUpload(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('uploadId') uploadId: string,
    @Args('input') input: UserUpdateUploadInput,
  ) {
    return this.service.userUpdateUpload(info, user.id, uploadId, input)
  }

  @Mutation(() => Upload, { nullable: true })
  userDeleteUpload(@CtxUser() user: User, @Info() info: GraphQLResolveInfo, @Args('uploadId') uploadId: string) {
    return this.service.userDeleteUpload(info, user.id, uploadId)
  }
}
