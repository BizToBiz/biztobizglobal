import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'

import { AdminCreateTransactionInput } from './dto/admin-create-transaction.input'
import { AdminListTransactionInput } from './dto/admin-list-transaction.input'
import { AdminUpdateTransactionInput } from './dto/admin-update-transaction.input'

@Injectable()
export class ApiTransactionDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminTransactions(info: GraphQLResolveInfo, adminId: string, input?: AdminListTransactionInput) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.findMany({
      take: input?.limit,
      skip: input?.skip,
      ...select,
    })
  }

  async adminCountTransactions(adminId: string, input?: AdminListTransactionInput): Promise<CorePaging> {
    const total = await this.data.transaction.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  adminTransaction(info: GraphQLResolveInfo, adminId: string, transactionId) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.findUnique({ where: { id: transactionId }, ...select })
  }

  adminCreateTransaction(info: GraphQLResolveInfo, adminId: string, input: AdminCreateTransactionInput) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.create({
      data: { name: input.name },
      ...select,
    })
  }

  adminUpdateTransaction(info: GraphQLResolveInfo, adminId: string, transactionId, input: AdminUpdateTransactionInput) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.update({
      where: { id: transactionId },
      data: { name: input.name },
      ...select,
    })
  }

  adminDeleteTransaction(info: GraphQLResolveInfo, adminId: string, transactionId) {
    return this.data.transaction.delete({ where: { id: transactionId } })
  }
}
