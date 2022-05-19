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
        emails: { create: { email, primary: true } },
        username: email,
        avatarUrl: input.avatarUrl || getGravatarUrl(input.email.toLowerCase()),
        password,
        role,
      },
    })
  }

  findUserByEmail(email: string) {
    return this.email.findUnique({ where: { email } }).owner({ include: { emails: true } })
  }

  findUserById(userId: string) {
    return this.user.findUnique({ where: { id: userId }, include: { emails: true } })
  }

  findUserByUsername(username: string) {
    return this.user.findUnique({ where: { username }, include: { emails: true } })
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
}
