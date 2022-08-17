import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateTransactionInput,
  AdminListTransactionInput,
  AdminUpdateTransactionInput,
  ApiTransactionDataAccessLeaderService,
  Transaction,
} from '@biztobiz/api/transaction/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthGuard } from '@biztobiz/api/auth/util'
import { UseGuards } from '@nestjs/common'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiTransactionFeatureLeaderResolver {
  constructor(private readonly service: ApiTransactionDataAccessLeaderService) {}

  @Query(() => [Transaction], { nullable: true })
  leaderTransactions(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListTransactionInput, nullable: true }) input?: AdminListTransactionInput,
  ) {
    return this.service.leaderTransactions(info, leader.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  leaderCountTransactions(
    @CtxUser() leader: User,
    @Args({ name: 'input', type: () => AdminListTransactionInput, nullable: true }) input?: AdminListTransactionInput,
  ) {
    return this.service.leaderCountTransactions(leader.id, input)
  }

  @Query(() => Transaction, { nullable: true })
  leaderTransaction(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('transactionId') transactionId: string,
  ) {
    return this.service.leaderTransaction(info, leader.id, transactionId)
  }

  @Mutation(() => Transaction, { nullable: true })
  leaderCreateTransaction(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateTransactionInput,
  ) {
    return this.service.leaderCreateTransaction(info, leader.id, input)
  }

  @Mutation(() => Transaction, { nullable: true })
  leaderUpdateTransaction(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('transactionId') transactionId: string,
    @Args('input') input: AdminUpdateTransactionInput,
  ) {
    return this.service.leaderUpdateTransaction(info, leader.id, transactionId, input)
  }

  @Mutation(() => Transaction, { nullable: true })
  leaderDeleteTransaction(
    @CtxUser() leader: User,
    @Info() info: GraphQLResolveInfo,
    @Args('transactionId') transactionId: string,
  ) {
    return this.service.leaderDeleteTransaction(info, leader.id, transactionId)
  }
}
