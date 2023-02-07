import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ApiCoreDataAccessService } from '@biztobiz/api/core/data-access'
import { ApiCoreFeatureService } from '@biztobiz/api/core/feature'
import { Response } from 'express'
import {
  generateExpireDate,
  generateToken,
  getGravatarUrl,
  hashPassword,
  validatePassword,
} from './api-auth-data-access.helper'
import { LoginInput } from './dto/login.input'
import { RegisterInput } from './dto/register.input'
import { UserToken } from './models/user-token'
import { UserCreateInput } from './dto/user-create.input'
import { Prisma } from '@prisma/client'
import { ApiMailerDataAccessService } from '@biztobiz/api/mailer/data-access'
import { passwordResetEmail } from './templates/password-reset-email.template'
import { User } from '@biztobiz/api/user/data-access'
import { ChapterMemberRole, Role } from '@biztobiz/api/enums/data-access'
import { SpyOnUserInput } from './dto/spy-on-user.input'

@Injectable()
export class ApiAuthDataAccessService {
  constructor(
    private readonly data: ApiCoreDataAccessService,
    private readonly core: ApiCoreFeatureService,
    private readonly jwtService: JwtService,
    private readonly mailer: ApiMailerDataAccessService,
  ) {}

  async createUser(input: Partial<UserCreateInput>) {
    const password = input.password
    const hashedPassword = hashPassword(password)
    const email = input.email.trim()
    const username = input.username || email

    return this.data.user
      .create({
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          phone: input.phone,
          username,
          avatarUrl: input.avatarUrl || getGravatarUrl(input.email.toLowerCase()),
          password: hashedPassword,
          role: Role.User,
        },
      })
      .catch((e) => {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2002') {
            throw new BadRequestException('This email is already in use')
          }
        }
      })
  }

  async register(payload: RegisterInput) {
    const user = await this.createUser({
      ...payload,
    })

    return this.signUser(user)
  }

  async login(input: LoginInput) {
    const email = input.email.trim()
    const password = input.password.trim()
    const authUser = await this.findUserByEmail(email)

    if (!authUser) {
      throw new NotFoundException(`No user found for email: ${email}`)
    }

    const user: User = authUser

    const isLeader = await this.data.user.findFirst({
      where: {
        AND: [
          { id: user.id },
          {
            OR: [
              { chapter: { role: ChapterMemberRole.Chairman } },
              { chapter: { role: ChapterMemberRole.VicePresident } },
              { chapter: { role: ChapterMemberRole.President } },
              { territoryManaged: { managerId: user.id } },
              { regionManaged: { managerId: user.id } },
            ],
          },
        ],
      },
    })

    user.isLeader = !!isLeader

    const passwordValid = validatePassword(password, user.password)

    if (!passwordValid) {
      throw new BadRequestException('Invalid password')
    }

    return this.signUser(user)
  }

  async spyOnUser(input: SpyOnUserInput) {
    const user = await this.findUserById(input?.userId)
    return this.signUser(user)
  }

  async forgotPassword(email: string): Promise<boolean> {
    const user = await this.findUserByEmail(email)

    if (!user) {
      Logger.warn(`Forgot password reset for non-existing user ${email}`)
      throw new Error(`${email} is not a user`)
    }

    const passwordResetToken = generateToken()
    const passwordResetExpires = generateExpireDate()

    await this.data.user.update({
      where: { id: user.id },
      data: { passwordResetToken, passwordResetExpires },
    })
    await this.mailer.send(passwordResetEmail({ email: email, firstName: user.firstName, passwordResetToken }))
    return true
  }

  async resetPassword(password: string, token: string): Promise<User> {
    const user = await this.data.user.findFirst({ where: { passwordResetToken: token } })

    if (!user) {
      Logger.warn(`There is no user associated with the password reset token ${token}`)
      throw new Error(`This token has been used or is invalid.`)
    }

    if (user.passwordResetExpires.valueOf() < new Date(Date.now()).valueOf()) {
      Logger.warn(`PasswordResetToken ${token} expired on ${user.passwordResetExpires}.`)
      throw new Error(`Your password reset token has expired.`)
    }

    const hashedPassword = hashPassword(password)
    return this.data.user.update({
      where: { id: user.id },
      data: {
        passwordResetToken: null,
        passwordResetExpires: null,
        password: hashedPassword,
      },
    })
  }

  signUser(user): UserToken {
    const token = this.jwtService.sign({ userId: user?.id })
    return { token, user }
  }

  validateUser(userId: string) {
    return this.findUserById(userId)
  }

  getUserFromToken(token: string) {
    const userId = this.jwtService.decode(token)['userId']

    return this.findUserById(userId)
  }

  public findUserByEmail(email: string) {
    return this.data.user.findUnique({ where: { email } })
  }

  public findUserById(userId: string) {
    return this.data.user.findUnique({ where: { id: userId } })
  }

  public findUserByUsername(username: string) {
    return this.data.user.findUnique({ where: { username } })
  }

  public setCookie(res: Response, token: string) {
    console.log(res, this.core.cookie.name)
    return res?.cookie(this.core.cookie.name, token, this.core.cookie.options)
  }

  public clearCookie(res: Response) {
    return res.clearCookie(this.core.cookie.name, this.core.cookie.options)
  }
}
