import { Injectable } from '@nestjs/common'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'
import { ApiCoreDataAccessService, CorePaging } from '@biztobiz/api/core/data-access'

import { UserCreateSubstituteInput } from './dto/user-create-substitute.input'
import { UserListSubstituteInput } from './dto/user-list-substitute.input'
import { UserUpdateSubstituteInput } from './dto/user-update-substitute.input'

@Injectable()
export class ApiSubstituteDataAccessUserService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  userSubstitutes(info: GraphQLResolveInfo, userId: string, input?: UserListSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.findMany({
      take: input?.take,
      skip: input?.skip,
      ...select,
    })
  }

  async userCountSubstitutes(userId: string, input?: UserListSubstituteInput): Promise<CorePaging> {
    const total = await this.data.substitute.count()
    return {
      take: input?.take,
      skip: input?.skip,
      total,
    }
  }

  userSubstitute(info: GraphQLResolveInfo, userId: string, substituteId) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.findUnique({ where: { id: substituteId }, ...select })
  }

  userCreateSubstitute(info: GraphQLResolveInfo, userId: string, input: UserCreateSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.create({
      data: { name: input.name },
      ...select,
    })
  }

  userUpdateSubstitute(info: GraphQLResolveInfo, userId: string, substituteId, input: UserUpdateSubstituteInput) {
    const select = new PrismaSelect(info).value
    return this.data.substitute.update({
      where: { id: substituteId },
      data: { name: input.name },
      ...select,
    })
  }

  userDeleteSubstitute(info: GraphQLResolveInfo, userId: string, substituteId) {
    return this.data.substitute.delete({ where: { id: substituteId } })
  }
}
