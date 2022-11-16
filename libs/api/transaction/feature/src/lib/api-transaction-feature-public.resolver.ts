import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiTransactionDataAccessPublicService, Transaction } from '@biztobiz/api/transaction/data-access'
import { ChapterMember } from '@biztobiz/api/chapter-member/data-access'

@Resolver(() => Transaction)
export class ApiTransactionFeaturePublicResolver {
  constructor(private readonly service: ApiTransactionDataAccessPublicService) {}

  @ResolveField(() => String, { nullable: true })
  name(@Parent() transaction: Transaction) {
    return this.service.transactionName(transaction)
  }
}
