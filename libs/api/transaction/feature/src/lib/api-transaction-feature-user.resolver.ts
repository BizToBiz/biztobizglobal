import { Args, Mutation, Query, Resolver, Info } from '@nestjs/graphql'
import { GraphQLResolveInfo } from 'graphql'
import {
  UserCreateTransactionInput,
  UserListTransactionInput,
  UserUpdateTransactionInput,
  ApiTransactionDataAccessUserService,
  Transaction,
} from '@biztobiz/api/transaction/data-access'
import { CorePaging } from '@biztobiz/api/core/data-access'
import { CtxUser } from '@biztobiz/api/auth/util'
import { User } from '@biztobiz/api/user/data-access'

@Resolver()
export class ApiTransactionFeatureUserResolver {
  constructor(private readonly service: ApiTransactionDataAccessUserService) {}

  @Query(() => [Transaction], { nullable: true })
  userTransactions(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args({ name: 'input', type: () => UserListTransactionInput, nullable: true }) input?: UserListTransactionInput,
  ) {
    return this.service.userTransactions(info, user.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  userCountTransactions(
    @CtxUser() user: User,
    @Args({ name: 'input', type: () => UserListTransactionInput, nullable: true }) input?: UserListTransactionInput,
  ) {
    return this.service.userCountTransactions(user.id, input)
  }

  @Query(() => Transaction, { nullable: true })
  userTransaction(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('transactionId') transactionId: string,
  ) {
    return this.service.userTransaction(info, user.id, transactionId)
  }

  @Mutation(() => Transaction, { nullable: true })
  userCreateTransaction(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('input') input: UserCreateTransactionInput,
  ) {
    return this.service.userCreateTransaction(info, user.id, input)
  }

  @Mutation(() => Transaction, { nullable: true })
  userUpdateTransaction(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('transactionId') transactionId: string,
    @Args('input') input: UserUpdateTransactionInput,
  ) {
    return this.service.userUpdateTransaction(info, user.id, transactionId, input)
  }

  @Mutation(() => Transaction, { nullable: true })
  userDeleteTransaction(
    @CtxUser() user: User,
    @Info() info: GraphQLResolveInfo,
    @Args('transactionId') transactionId: string,
  ) {
    return this.service.userDeleteTransaction(info, user.id, transactionId)
  }
}
