import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { UserCreateUploadInput } from './dto/user-create-upload.input'
import { UserListUploadInput } from './dto/user-list-upload.input'
import { UserUpdateUploadInput } from './dto/user-update-upload.input'

@Injectable()
export class ApiUploadDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userUploads(info: GraphQLResolveInfo, userId: string, input?: UserListUploadInput) {
    const select = new PrismaSelect(info).value
    return this.data.upload.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountUploads(userId: string, input?: UserListUploadInput): Promise<CorePaging> {
    const total = await this.data.upload.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  userUpload(info: GraphQLResolveInfo, userId: string, uploadId) {
    const select = new PrismaSelect(info).value
    return this.data.upload.findUnique({ where: { id: uploadId }, ...select })
  }

  userCreateUpload(info: GraphQLResolveInfo, userId: string, input: UserCreateUploadInput) {
    const select = new PrismaSelect(info).value
    return this.data.upload.create({
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateUpload(info: GraphQLResolveInfo, userId: string, uploadId, input: UserUpdateUploadInput) {
    const select = new PrismaSelect(info).value
    return this.data.upload.update({
      where: { id: uploadId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteUpload(info: GraphQLResolveInfo, userId: string, uploadId) {
    return this.data.upload.delete({ where: { id: uploadId } })
  }
}
