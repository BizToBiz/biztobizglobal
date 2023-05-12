import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { AdminCreateTransactionInput } from './dto/admin-create-transaction.input'
import { AdminListTransactionInput } from './dto/admin-list-transaction.input'
import { AdminUpdateTransactionInput } from './dto/admin-update-transaction.input'

@Injectable()
export class ApiTransactionDataAccessAdminService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['id']
  private where(input: AdminListTransactionInput): Prisma.TransactionWhereInput {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]

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
          OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: Prisma.QueryMode.insensitive } })),
        })),
      ],
    }
  }

  adminTransactions(info: GraphQLResolveInfo, adminId: string, input?: AdminListTransactionInput) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.findMany({
      take: input?.take ?? 10,
      skip: input?.skip ?? 0,
      ...select,
    })
  }

  async adminCountTransactions(adminId: string, input?: AdminListTransactionInput): Promise<CorePaging> {
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

  adminTransaction(info: GraphQLResolveInfo, adminId: string, transactionId) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.findUnique({ where: { id: transactionId }, ...select })
  }

  async adminCreateTransaction(info: GraphQLResolveInfo, adminId: string, input: AdminCreateTransactionInput) {
    const select = new PrismaSelect(info).value

    const user = await this.data.user.findUnique({
      where: { id: input.userId },
      select: { id: true, industry: true, chapter: { select: { chapter: { select: { id: true, state: true } } } } },
    })

    const adminUser = await this.data.user.findUnique({
      where: { id: adminId },
      select: { id: true, role: true, firstName: true, lastName: true },
    })

    if (!user) {
      throw new NotFoundException(`User with id ${input?.userId} not found!`)
    }

    // Referral is optional. If it's passed though, we want to make sure it exists.
    let referral
    if (input.referralId) {
      referral = await this.data.referral.findUnique({
        where: { id: input?.referralId },
        select: { id: true },
      })
      if (!referral) {
        throw new NotFoundException(`Referral with id ${input.referralId} not found!`)
      }
    }

    return this.data.transaction.create({
      data: {
        date: input.date,
        amount: input.amount,
        user: { connect: { id: user?.id } },
        chapter: { connect: { id: user?.chapter?.chapter?.id } },
        referral: referral ? { connect: { id: input.referralId } } : undefined,
        enteredBy: `${adminUser.firstName} ${adminUser.lastName}`,
        enteredOn: new Date(),
        industry: user?.industry ? user?.industry : '',
        state: user?.chapter?.chapter?.state ? user?.chapter?.chapter?.state : '',
      },
      ...select,
    })
  }

  async adminUpdateTransaction(
    info: GraphQLResolveInfo,
    adminId: string,
    transactionId,
    input: AdminUpdateTransactionInput,
  ) {
    const select = new PrismaSelect(info).value

    const user = await this.data.user.findUnique({
      where: { id: input.userId },
      select: { id: true, industry: true, chapter: { select: { chapter: { select: { id: true, state: true } } } } },
    })

    if (!user) {
      throw new NotFoundException(`User with id ${input?.userId} not found!`)
    }

    const adminUser = await this.data.user.findUnique({
      where: { id: adminId },
      select: { id: true, role: true, firstName: true, lastName: true },
    })

    // Referral is optional. If it's passed though, we want to make sure it exists.
    let referral
    if (input.referralId) {
      referral = await this.data.referral.findUnique({
        where: { id: input?.referralId },
        select: { id: true },
      })
      if (!referral) {
        throw new NotFoundException(`Referral with id ${input.referralId} not found!`)
      }
    }

    return this.data.transaction.update({
      where: { id: transactionId },
      data: {
        date: input.date,
        amount: input.amount,
        user: { connect: { id: user?.id } },
        chapter: { connect: { id: user?.chapter?.chapter?.id } },
        referral: referral ? { connect: { id: input.referralId } } : undefined,
        enteredBy: `${adminUser.firstName} ${adminUser.lastName}`,
        enteredOn: new Date(),
        industry: user?.industry ? user?.industry : '',
        state: user?.chapter?.chapter?.state ? user?.chapter?.chapter?.state : '',
      },
      ...select,
    })
  }

  adminDeleteTransaction(info: GraphQLResolveInfo, adminId: string, transactionId) {
    return this.data.transaction.delete({ where: { id: transactionId } })
  }
}
