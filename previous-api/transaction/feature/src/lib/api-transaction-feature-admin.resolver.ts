import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { GraphQLResolveInfo } from 'graphql'
import {
  AdminCreateTransactionInput,
  AdminListTransactionInput,
  AdminUpdateTransactionInput,
  ApiTransactionDataAccessAdminService,
  Transaction,
} from '@biztobiz/api/transaction/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiTransactionFeatureAdminResolver {
  constructor(private readonly service: ApiTransactionDataAccessAdminService) {}

  @Query(() => [Transaction], { nullable: true })
  adminTransactions(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => AdminListTransactionInput, nullable: true }) input?: AdminListTransactionInput,
  ) {
    return this.service.adminTransactions(info, admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountTransactions(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListTransactionInput, nullable: true }) input?: AdminListTransactionInput,
  ) {
    return this.service.adminCountTransactions(admin.id, input)
  }

  @Query(() => Transaction, { nullable: true })
  adminTransaction(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('transactionId') transactionId: string,
  ) {
    return this.service.adminTransaction(info, admin.id, transactionId)
  }

  @Mutation(() => Transaction, { nullable: true })
  adminCreateTransaction(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: AdminCreateTransactionInput,
  ) {
    return this.service.adminCreateTransaction(info, admin.id, input)
  }

  @Mutation(() => Transaction, { nullable: true })
  adminUpdateTransaction(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('transactionId') transactionId: string,
    @Args('input') input: AdminUpdateTransactionInput,
  ) {
    return this.service.adminUpdateTransaction(info, admin.id, transactionId, input)
  }

  @Mutation(() => Transaction, { nullable: true })
  adminDeleteTransaction(
    @CtxUser() admin: User,
    @Info() info: GraphQLResolveInfo,
    @Args('transactionId') transactionId: string,
  ) {
    return this.service.adminDeleteTransaction(info, admin.id, transactionId)
  }
}
