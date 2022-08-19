import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateUploadInput } from './dto/admin-create-upload.input'
import { AdminListUploadInput } from './dto/admin-list-upload.input'
import { AdminUpdateUploadInput } from './dto/admin-update-upload.input'

@Injectable()
export class ApiUploadDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminUploads(info: GraphQLResolveInfo, adminId: string, input?: AdminListUploadInput) {
    const select = new PrismaSelect(info).value
    return this.data.upload.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountUploads(adminId: string, input?: AdminListUploadInput): Promise<CorePaging> {
    const total = await this.data.upload.count()
    return {
      take: input?.take,
      skip: input?.skip,
      total,
    }
  }

  adminUpload(info: GraphQLResolveInfo, adminId: string, uploadId) {
    const select = new PrismaSelect(info).value
    return this.data.upload.findUnique({ where: { id: uploadId }, ...select })
  }

  adminCreateUpload(info: GraphQLResolveInfo, adminId: string, input: AdminCreateUploadInput) {
    const select = new PrismaSelect(info).value
    return this.data.upload.create({
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateUpload(info: GraphQLResolveInfo, adminId: string, uploadId, input: AdminUpdateUploadInput) {
    const select = new PrismaSelect(info).value
    return this.data.upload.update({
      where: { id: uploadId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteUpload(info: GraphQLResolveInfo, adminId: string, uploadId) {
    return this.data.upload.delete({ where: { id: uploadId } })
  }
}
