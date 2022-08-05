import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateTransactionInput } from './dto/admin-create-transaction.input'
import { AdminListTransactionInput } from './dto/admin-list-transaction.input'
import { AdminUpdateTransactionInput } from './dto/admin-update-transaction.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ApiTransactionDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = []
  private readonly numberFields = ['amount']
  private search(query = null): Prisma.TransactionWhereInput {
    query = query?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]
    if (query) {
      return {
        AND: terms.map((term) => ({
          OR: [
            ...this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
            ...this.numberFields.map((field) => {
              if (isNaN(parseFloat(term))) return
              return { [field]: { equals: parseFloat(query) } }
            }),
          ],
        })),
      }
    }
  }

  adminTransactions(info: GraphQLResolveInfo, adminId: string, input?: AdminListTransactionInput) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
      where: this.search(input?.search),
    })
  }

  async adminCountTransactions(adminId: string, input?: AdminListTransactionInput): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)
    const total = await this.data.transaction.count()
    const count = await this.data.transaction.count({ where: this.search(input?.search) })

    return {
      take: input?.take,
      skip: input?.skip,
      page: input?.skip / input?.take,
      count,
      total,
    }
  }

  adminTransaction(info: GraphQLResolveInfo, adminId: string, transactionId) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.findUnique({ where: { id: transactionId }, ...select })
  }

  async adminCreateTransaction(info: GraphQLResolveInfo, adminId: string, input: AdminCreateTransactionInput) {
    console.log('Input', input)
    const select = new PrismaSelect(info).value
    const transaction = await this.data.transaction.create({
      data: input,
      ...select,
    })
    console.log(transaction)
    return transaction
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
