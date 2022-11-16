import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@biztobiz/api/core/data-access'
import * as dayjs from 'dayjs'

@Injectable()
export class ApiTransactionDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  transactionName(transaction) {
    return this.data.transaction
      .findFirst({
        where: { id: transaction.id },
        select: { date: true, amount: true, user: { select: { firstName: true, lastName: true } } },
      })
      .then((transaction) => {
        return `$${transaction?.amount} on ${dayjs(transaction?.date).format('MM/DD/YYYY')} by ${
          transaction?.user?.firstName
        } ${transaction?.user?.lastName}`
      })
  }
}
