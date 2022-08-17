import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateTransactionInput } from './dto/user-create-transaction.input'
import { UserListTransactionInput } from './dto/user-list-transaction.input'
import { UserUpdateTransactionInput } from './dto/user-update-transaction.input'

@Injectable()
export class ApiTransactionDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['text']
  private where(input: UserListTransactionInput): Prisma.TransactionWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

    // TODO: implement leader search query
    // function leaderSearch() {}

    function relationalSearch() {
      // TODO: implement relational search for transaction
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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
        })),
      ],
    }
  }

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
    const count = await this.data.transaction.count({ where: this.where(input) })
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
