import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateSmsInput } from './dto/admin-create-sms.input'
import { AdminListSmsInput } from './dto/admin-list-sms.input'
import { AdminUpdateSmsInput } from './dto/admin-update-sms.input'

@Injectable()
export class ApiSmsDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminSmss(info: GraphQLResolveInfo, adminId: string, input?: AdminListSmsInput) {
    const select = new PrismaSelect(info).value
    return this.data.sms.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountSmss(adminId: string, input?: AdminListSmsInput): Promise<CorePaging> {
    const total = await this.data.sms.count()
    return {
      take: input?.take,
      skip: input?.skip,
      total,
    }
  }

  adminSms(info: GraphQLResolveInfo, adminId: string, smsId) {
    const select = new PrismaSelect(info).value
    return this.data.sms.findUnique({ where: { id: smsId }, ...select })
  }

  adminCreateSms(info: GraphQLResolveInfo, adminId: string, input: AdminCreateSmsInput) {
    const select = new PrismaSelect(info).value
    return this.data.sms.create({
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateSms(info: GraphQLResolveInfo, adminId: string, smsId, input: AdminUpdateSmsInput) {
    const select = new PrismaSelect(info).value
    return this.data.sms.update({
      where: { id: smsId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteSms(info: GraphQLResolveInfo, adminId: string, smsId) {
    return this.data.sms.delete({ where: { id: smsId } })
  }
}
