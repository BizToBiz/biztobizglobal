import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { Prisma } from '@prisma/client'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'
import { AdminListTransactionInput } from './dto/admin-list-transaction.input'
import { CreateUpdateTransactionInput } from './dto/create-update-transaction.input'
import { ChapterMemberRole } from '@biztobiz/api/enums/data-access'

@Injectable()
export class ApiTransactionDataAccessLeaderService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private async leaderChapters(leaderId: string): Promise<string[]> {
    const chapters = await this.data.chapter.findMany({
      where: {
        OR: [
          {
            members: {
              some: {
                OR: [
                  { memberId: leaderId, role: ChapterMemberRole.President },
                  { memberId: leaderId, role: ChapterMemberRole.VicePresident },
                  { memberId: leaderId, role: ChapterMemberRole.Chairman },
                ],
              },
            },
          },
          {
            region: { manager: { id: leaderId } },
          },
          {
            region: { territory: { manager: { id: leaderId } } },
          },
        ],
      },
    })
    return chapters.map((chapter) => chapter.id)
  }

  private async where(input: AdminListTransactionInput, leaderId: string): Promise<Prisma.TransactionWhereInput> {
    const query = input?.search?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]
    const leaderChapters = await this.leaderChapters(leaderId)

    console.log(leaderChapters)

    function leaderSearch(): Prisma.TransactionWhereInput {
      return {
        OR: [{ user: { chapter: { chapterId: { in: leaderChapters } } } }, { chapter: { id: { in: leaderChapters } } }],
      }
    }

    function relationalSearch(): Prisma.TransactionWhereInput {
      // TODO: implement relational search for transaction
      // if (input?.regionId) {
      //   return { regionId: input.regionId }
      // }
      // if (input?.memberId) {
      //   return { members: { some: { id: input.memberId } } }
      // }
      return null
    }

    function dateSearch(): Prisma.TransactionWhereInput {
      if (input?.startDate && input?.endDate) {
        return {
          AND: [{ date: { gte: input.startDate } }, { date: { lte: input.endDate } }],
        }
      } else if (input?.startDate) {
        return {
          date: { gte: input.startDate },
        }
      } else if (input?.endDate) {
        return {
          date: { lte: input.endDate },
        }
      }
      return null
    }

    function amountSearch(): Prisma.TransactionWhereInput {
      if (input?.amount) {
        return { amount: { equals: input.amount } }
      }
      return null
    }

    return {
      AND: [
        leaderSearch(),
        relationalSearch(),
        dateSearch(),
        amountSearch(),
        // ...(terms &&
        //   terms.map((term) => ({
        //     OR: [
        //       { referral: { firstName: { contains: term } } },
        //       { referral: { lastName: { contains: term } } },
        //       { referral: { from: { firstName: { contains: term } } } },
        //       { referral: { from: { lastName: { contains: term } } } },
        //       { referral: { to: { firstName: { contains: term } } } },
        //       { referral: { to: { lastName: { contains: term } } } },
        //     ],
        //   }))),
      ],
    }
  }

  getOrderBy(orderByValue: string, orderDirection) {
    switch (orderByValue) {
      case 'transactionDate':
        return { date: orderDirection }
      case 'amount':
        return { amount: orderDirection }
      case 'referralFrom':
        return { referral: { from: { firstName: orderDirection } } }
      case 'referralTo':
        return { referral: { to: { firstName: orderDirection } } }
      case 'firstName':
        return { referral: { firstName: orderDirection } }
      case 'lastName':
        return { referral: { lastName: orderDirection } }
      default:
        return { createdAt: 'desc' }
    }
  }

  async leaderTransactions(info: GraphQLResolveInfo, leaderId: string, input?: AdminListTransactionInput) {
    const orderBy = this.getOrderBy(input?.orderBy, input?.orderDirection ?? 'desc')
    const select = new PrismaSelect(info).value

    const where = await this.where(input, leaderId)
    console.log(JSON.stringify(where))

    return this.data.transaction.findMany({
      take: input?.take ?? 10,
      skip: input?.skip ?? 0,
      orderBy: orderBy,
      where: where,
      ...select,
    })
  }

  async leaderCountTransactions(leaderId: string, input?: AdminListTransactionInput): Promise<CorePaging> {
    const total = await this.data.transaction.count()
    const count = await this.data.transaction.count({ where: await this.where(input, leaderId) })
    const sum = await this.data.transaction
      .aggregate({
        _sum: { amount: true },
        where: await this.where(input, leaderId),
      })
      .then((r) => r._sum.amount)
    const take = input?.take || 10
    const skip = input?.skip || 0
    const page = Math.floor(skip / take)
    return {
      take,
      skip,
      page,
      count,
      total,
      sum,
    }
  }

  leaderTransaction(info: GraphQLResolveInfo, leaderId: string, transactionId) {
    const select = new PrismaSelect(info).value
    return this.data.transaction.findUnique({ where: { id: transactionId }, ...select })
  }

  async leaderCreateTransaction(info: GraphQLResolveInfo, leaderId: string, input: CreateUpdateTransactionInput) {
    const select = new PrismaSelect(info).value

    const user = await this.data.user.findUnique({
      where: { id: input.userId },
      select: { id: true, industry: true, chapter: { select: { chapter: { select: { id: true, state: true } } } } },
    })

    const adminUser = await this.data.user.findUnique({
      where: { id: leaderId },
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

  async leaderUpdateTransaction(
    info: GraphQLResolveInfo,
    leaderId: string,
    transactionId,
    input: CreateUpdateTransactionInput,
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
      where: { id: leaderId },
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

  leaderDeleteTransaction(info: GraphQLResolveInfo, leaderId: string, transactionId) {
    return this.data.transaction.delete({ where: { id: transactionId } })
  }
}
