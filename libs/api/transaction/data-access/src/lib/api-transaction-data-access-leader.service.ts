import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateTransactionInput } from './dto/admin-create-transaction.input'
import { AdminListTransactionInput } from './dto/admin-list-transaction.input'
import { AdminUpdateTransactionInput } from './dto/admin-update-transaction.input'

@Injectable()
export class ApiTransactionDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['text']
  private where(input: AdminListTransactionInput): Prisma.TransactionWhereInput {
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

  leaderTransactions(info: GraphQLResolveInfo, leaderId: string, input?: AdminListTransactionInput) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async leaderCountTransactions(leaderId: string, input?: AdminListTransactionInput): Promise<CorePaging> {
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

  leaderTransaction(info: GraphQLResolveInfo, leaderId: string, transactionId) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.findUnique({ where: { id: transactionId }, ...select })
  }

  leaderCreateTransaction(info: GraphQLResolveInfo, leaderId: string, input: AdminCreateTransactionInput) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.create({
      data: { ...input },
      ...select,
    })
  }

  leaderUpdateTransaction(
    info: GraphQLResolveInfo,
    leaderId: string,
    transactionId,
    input: AdminUpdateTransactionInput,
  ) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.update({
      where: { id: transactionId },
      data: { ...input },
      ...select,
    })
  }

  leaderDeleteTransaction(info: GraphQLResolveInfo, leaderId: string, transactionId) {
    return this.data.transaction.delete({ where: { id: transactionId } })
  }
}
