import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@biztobiz/api/core/data-access'
import { getGravatarUrl, hashPassword, uniqueSuffix } from '@biztobiz/api/auth/data-access'
import { AdminCreateUserInput } from './dto/admin-create-user.input'
import { AdminUpdateUserInput } from './dto/admin-update-user.input'
import { Prisma } from '@prisma/client'
import { PrismaSelect } from '@paljs/plugins'
import { GraphQLResolveInfo } from 'graphql'

@Injectable()
export class ApiUserDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  private readonly searchFields = ['firstName', 'lastName', 'email']
  private where(query = ''): Prisma.UserWhereInput {
    query = query?.trim()
    const terms: string[] = query?.includes(' ') ? query.split(' ') : [query]
    return {
      AND: terms.map((term) => ({
        OR: this.searchFields.map((field) => ({ [field]: { contains: term, mode: 'insensitive' } })),
      })),
    }
  }

  async adminUsers(info: GraphQLResolveInfo, userId: string, input: CorePagingInput) {
    await this.data.ensureAdminUser(userId)
    const select = new PrismaSelect(info).value
    return this.data.user.findMany({
      take: input?.take ?? 20,
      skip: input?.skip ?? 0,
      where: this.where(input?.search),
      ...select,
    })
  }

  async adminCountUsers(adminId: string, input: CorePagingInput): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)
    const take = input?.take ?? 20
    const skip = input?.skip ?? 0
    const total = await this.data.user.count()
    const count = await this.data.user.count({ where: this.where(input?.search) })
    return {
      take,
      skip,
      page: skip / take,
      count,
      total,
    }
  }

  async adminUser(adminId: string, userId: string) {
    await this.data.ensureAdminUser(adminId)
    return this.data.user.findUnique({ where: { id: userId } })
  }

  async adminCreateUser(adminId: string, input: AdminCreateUserInput) {
    await this.data.ensureAdminUser(adminId)
    const email = input.email.trim()
    const avatarUrl = getGravatarUrl(email)
    const username = this.formatUsername(email, input.username)
    await this.ensureUsernameAvailable(username)

    return this.data.user.create({
      data: {
        email: input.email,
        role: input.role,
        firstName: input.firstName,
        lastName: input.lastName,
        avatarUrl,
        username,
      },
    })
  }

  async adminUpdateUser(adminId: string, userId: string, input: AdminUpdateUserInput) {
    await this.data.ensureAdminUser(adminId)
    return this.data.user.update({
      where: { id: userId },
      data: { ...input },
    })
  }

  async adminSetUserPassword(adminId: string, userId: string, password: string) {
    await this.data.ensureAdminUser(adminId)
    return this.data.user.update({
      where: { id: userId },
      data: { password: hashPassword(password) },
    })
  }

  async adminDeleteUser(adminId: string, userId: string) {
    await this.data.ensureAdminUser(adminId)
    return this.data.user.delete({ where: { id: userId } })
  }

  private formatUsername(email: string, username?: string): string {
    return username?.trim() || uniqueSuffix(email.trim().split('@')[0])
  }

  private async ensureUsernameAvailable(username: string): Promise<boolean> {
    const user = await this.data.findUserByUsername(username)
    if (user) {
      throw new Error(`This username is not available`)
    }
    return true
  }
}
