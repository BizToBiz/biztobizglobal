import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateTransactionInput } from './dto/user-create-transaction.input'
import { UserListTransactionInput } from './dto/user-list-transaction.input'
import { UserUpdateTransactionInput } from './dto/user-update-transaction.input'

@Injectable()
export class ApiTransactionDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userTransactions(info: GraphQLResolveInfo, userId: string, input?: UserListTransactionInput) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.findMany({
      take: input?.take,
      skip: input?.skip,
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
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateTransaction(info: GraphQLResolveInfo, userId: string, transactionId, input: UserUpdateTransactionInput) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.update({
      where: { id: transactionId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteTransaction(info: GraphQLResolveInfo, userId: string, transactionId) {
    return this.data.transaction.delete({ where: { id: transactionId } })
  }
}
