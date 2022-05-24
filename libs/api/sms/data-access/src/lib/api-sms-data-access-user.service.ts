import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { UserCreateSmsInput } from './dto/user-create-sms.input'
import { UserListSmsInput } from './dto/user-list-sms.input'
import { UserUpdateSmsInput } from './dto/user-update-sms.input'

@Injectable()
export class ApiSmsDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userSmss(info: GraphQLResolveInfo, userId: string, input?: UserListSmsInput) {
    const select = new PrismaSelect(info).value
    return this.data.sms.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountSmss(userId: string, input?: UserListSmsInput): Promise<CorePaging> {
    const total = await this.data.sms.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  userSms(info: GraphQLResolveInfo, userId: string, smsId) {
    const select = new PrismaSelect(info).value
    return this.data.sms.findUnique({ where: { id: smsId }, ...select })
  }

  userCreateSms(info: GraphQLResolveInfo, userId: string, input: UserCreateSmsInput) {
    const select = new PrismaSelect(info).value
    return this.data.sms.create({
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateSms(info: GraphQLResolveInfo, userId: string, smsId, input: UserUpdateSmsInput) {
    const select = new PrismaSelect(info).value
    return this.data.sms.update({
      where: { id: smsId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteSms(info: GraphQLResolveInfo, userId: string, smsId) {
    return this.data.sms.delete({ where: { id: smsId } })
  }
}
