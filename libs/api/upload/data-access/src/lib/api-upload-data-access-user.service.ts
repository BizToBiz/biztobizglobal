import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateUploadInput } from './dto/user-create-upload.input'
import { UserListUploadInput } from './dto/user-list-upload.input'
import { UserUpdateUploadInput } from './dto/user-update-upload.input'

@Injectable()
export class ApiUploadDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['originalFilename', 'publicId', 'url']
  private where(input: UserListUploadInput): Prisma.UploadWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for upload
      // if (input?.regionId) {
      //   return { regionId: input.regionId }
      // }
      // if (input?.memberId) {
      //   return { members: { some: { id: input.memberId } } }
      // }
      return null
    }
    return {
      AND: [
        relationalSearch(),
        ...terms.map((term) => ({
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: Prisma.QueryMode.insensitive } })),
        })),
      ],
    }
  }

  userUploads(info: GraphQLResolveInfo, userId: string, input?: UserListUploadInput) {
    const select = new PrismaSelect(info).value
    return this.data.upload.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountUploads(userId: string, input?: UserListUploadInput): Promise<CorePaging> {
    const total = await this.data.upload.count()
    const count = await this.data.upload.count({ where: this.where(input) })
    const take = input?.take || 10
    const skip = input?.skip || 0
    const page = Math.floor(skip / take)
    return {
      take,
      skip,
      page,
      count,
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
      data: { ...input },
      ...select,
    })
  }

  userUpdateUpload(info: GraphQLResolveInfo, userId: string, uploadId, input: UserUpdateUploadInput) {
    const select = new PrismaSelect(info).value
    return this.data.upload.update({
      where: { id: uploadId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteUpload(info: GraphQLResolveInfo, userId: string, uploadId) {
    return this.data.upload.delete({ where: { id: uploadId } })
  }
}
