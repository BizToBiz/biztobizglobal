import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateTransactionInput } from './dto/user-create-transaction.input'
import { UserListTransactionInput } from './dto/user-list-transaction.input'
import { UserUpdateTransactionInput } from './dto/user-update-transaction.input'
import { AdminListTransactionInput } from './dto/admin-list-transaction.input'

@Injectable()
export class ApiTransactionDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  transactionWhere(input: AdminListTransactionInput) {
    const whereInput = []
    if (input.userId) {
      whereInput.push({ userId: input.userId })
    }
    if (input.chapterId) {
      whereInput.push({ chapterId: input.chapterId })
    }
    if (input.referralId) {
      whereInput.push({ referralId: input.referralId })
    }
    return {
      where: {
        ...whereInput,
      },
    }
  }

  userTransactions(info: GraphQLResolveInfo, userId: string, input?: AdminListTransactionInput) {
    const select = new PrismaSelect(info).value
    const where = this.transactionWhere(input)
    return this.data.transaction.findMany({
      take: input?.take,
      skip: input?.skip,
      ...where,
      ...select,
    })
  }

  async userCountTransactions(userId: string, input?: UserListTransactionInput): Promise<CorePaging> {
    const total = await this.data.transaction.count()
    return {
      take: input?.take,
      skip: input?.skip,
      total,
    }
  }

  userTransaction(info: GraphQLResolveInfo, userId: string, transactionId) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.findUnique({ where: { id: transactionId }, ...select })
  }

  userCreateTransaction(info: GraphQLResolveInfo, userId: string, input: UserCreateTransactionInput) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.create({
      data: { ...input },
      ...select,
    })
  }

  userUpdateTransaction(info: GraphQLResolveInfo, userId: string, transactionId, input: UserUpdateTransactionInput) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.update({
      where: { id: transactionId },
      data: { ...input },
      ...select,
    })
  }

  userDeleteTransaction(info: GraphQLResolveInfo, userId: string, transactionId) {
    return this.data.transaction.delete({ where: { id: transactionId } })
  }
}
