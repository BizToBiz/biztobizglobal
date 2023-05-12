import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateUploadInput } from './dto/admin-create-upload.input'
import { AdminListUploadInput } from './dto/admin-list-upload.input'
import { AdminUpdateUploadInput } from './dto/admin-update-upload.input'

@Injectable()
export class ApiUploadDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['originalFilename', 'publicId', 'url']
  private where(input: AdminListUploadInput): Prisma.UploadWhereInput {
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

  leaderUploads(info: GraphQLResolveInfo, leaderId: string, input?: AdminListUploadInput) {
    const select = new PrismaSelect(info).value
    return this.data.upload.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountUploads(leaderId: string, input?: AdminListUploadInput): Promise<CorePaging> {
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

  leaderUpload(info: GraphQLResolveInfo, leaderId: string, uploadId) {
    const select = new PrismaSelect(info).value
    return this.data.upload.findUnique({ where: { id: uploadId }, ...select })
  }

  leaderCreateUpload(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateUploadInput) {
    const select = new PrismaSelect(info).value
    return this.data.upload.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateUpload(info: GraphQLResolveInfo, leaderId: string, uploadId, input: AdminUpdateUploadInput) {
    const select = new PrismaSelect(info).value
    return this.data.upload.update({
      where: { id: uploadId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteUpload(info: GraphQLResolveInfo, leaderId: string, uploadId) {
    return this.data.upload.delete({ where: { id: uploadId } })
  }
}
