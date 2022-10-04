import { BadRequestException, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient, Role } from '@prisma/client'
import { getGravatarUrl, hashPassword, UserCreateInput } from '@biztobiz/api/auth/data-access'

@Injectable()
export class ApiCoreDataAccessService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super()
  }

  public async onModuleDestroy() {
    await this.$disconnect()
  }

  public async onModuleInit() {
    await this.$connect()
  }

  async createUser(input: Partial<UserCreateInput>) {
    const email = input.email.trim()
    const existing = await this.findUserByEmail(email)
    if (existing) {
      throw new BadRequestException(`Can't create user with email ${email}`)
    }
    const password = hashPassword(input.password)

    // The first user will get the Admin role
    const hasAdmin = await this.user.count({ where: { role: 'Admin' } })
    const role = hasAdmin ? 'User' : 'Admin'

    return this.user.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        username: email,
        avatarUrl: input.avatarUrl || getGravatarUrl(input.email.toLowerCase()),
        password,
        role,
      },
    })
  }

  public findUserByEmail(email: string) {
    return this.user.findUnique({ where: { email } })
  }

  public findUserById(userId: string) {
    return this.user.findUnique({ where: { id: userId } })
  }

  public findUserByUsername(username: string) {
    return this.user.findUnique({ where: { username } })
  }

  async ensureAdminUser(adminId: string): Promise<boolean> {
    const tenant = await this.findUserById(adminId)
    if (tenant.role !== Role.Admin) {
      throw new Error(`This operation needs Admin access`)
    }
    return true
  }

  async usernameDenyList(username: string) {
    const denied = [
      // Add usernames you want to deny
      'admin',
      'administrator',
      'system',
      'owner',
      'info',
      'webmaster',
    ]
    return denied.includes(username)
  }

  async generateCount(dataType: string, input, thisWhere) {
    const total = await this?.['dataType'].count()
    const count = await this.region.count({ where: thisWhere })
    const take = input?.take || 10
    const skip = input?.skip || 0
    const page = Math.floor(skip / take)
    return {
      take,
      skip,
      page,
      count,
      total,
    }
  }
}
