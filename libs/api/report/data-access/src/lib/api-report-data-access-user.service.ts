import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@biztobiz/api/core/data-access'

@Injectable()
export class ApiReportDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async reportReferralsFromChapter(id: string, chapterId: string) {
    const result = await this.data.referral.aggregate({
      where: {
        fromChapter: { id: chapterId },
      },
      _count: true,
    })
    return result?._count
  }

  async reportReferralsToChapter(id: string, chapterId: string) {
    const result = await this.data.referral.aggregate({
      where: {
        toChapter: { id: chapterId },
      },
      _count: true,
    })
    return result?._count
  }

  reportReferralsFromUser(userId: string) {
    return this.data.referral.count({
      where: { from: { id: userId } },
    })
  }

  reportReferralsToUser(userId: string) {
    return this.data.referral.count({
      where: { to: { id: userId } },
    })
  }

  reportReferralsTotal() {
    return this.data.referral.count()
  }

  async reportTransactionsTotalUser(userId: string) {
    const result = await this.data.transaction.aggregate({
      where: {
        user: { id: userId },
      },
      _sum: {
        amount: true,
      },
    })
    return result?._sum?.amount || 0
  }

  async reportTransactionsTotalChapter(chapterId: string) {
    //fix for dollars in biz not showing correct aggregate chapter amount
    // TODO: This line and the following function can be removed eventually
    // await this.updateMissingChapterTransactions()

    const result = await this.data.transaction.aggregate({
      where: {
        chapter: { id: chapterId },
      },
      _sum: {
        amount: true,
      },
    })
    return result?._sum?.amount || 0
  }

  // async updateMissingChapterTransactions() {
  //   const transactions = await this.data.transaction.findMany({
  //     where: { chapter: null },
  //     include: { user: { include: { chapter: true } } },
  //   })
  //
  //   const result = await Promise.all(
  //     transactions.map((t) => {
  //       if (t?.user?.chapter?.chapterId) {
  //         this.data.transaction.update({
  //           where: { id: t.id },
  //           data: {
  //             chapter: { connect: { id: t?.user?.chapter?.chapterId } },
  //           },
  //         })
  //       }
  //     }),
  //   )
  //
  //   return result
  // }
}
