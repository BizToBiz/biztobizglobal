import { Resolver } from '@nestjs/graphql'
import { ApiTransactionDataAccessPublicService, Transaction } from '@biztobiz/api/transaction/data-access'

@Resolver(() => Transaction)
export class ApiTransactionFeaturePublicResolver {
  constructor(private readonly service: ApiTransactionDataAccessPublicService) {}
}
