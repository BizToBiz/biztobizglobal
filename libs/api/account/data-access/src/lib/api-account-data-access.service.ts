import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@biztobiz/api/core/data-access'
import { hashPassword, validatePassword } from '@biztobiz/api/auth/data-access'
import { AccountUpdatePasswordInput } from './dto/account-update-password.input'
import { AccountUpdateProfileInput } from './dto/account-update-profile.input'

@Injectable()
export class ApiAccountDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  accountProfile(userId: string) {
    return this.data.findUserById(userId)
  }

  accountUpdateProfile(userId: string, input: AccountUpdateProfileInput) {
    return this.data.user.update({
      where: { id: userId },
      data: {
        avatarUrl: input.avatarUrl,
        firstName: input.firstName,
        lastName: input.lastName,
        bio: input.bio,
        phone: input.phone,
      },
    })
  }

  async accountUpdateUsername(userId: string, username: string) {
    const available = await this.accountUsernameAvailable(userId, username)

    if (!available) {
      throw new BadRequestException(`Username ${username} is not available`)
    }

    return this.data.user.update({ where: { id: userId }, data: { username } })
  }

  async accountUsernameAvailable(userId: string, username: string): Promise<boolean> {
    const denied = await this.data.usernameDenyList(username)

    if (denied) {
      throw new BadRequestException(`Username ${username} is not available`)
    }

    const count = await this.data.user.count({
      where: { username },
    })
    return count === 0
  }

  async accountResetPassword(userId: string) {
    Logger.verbose(`TODO: Implement Account Reset Password`)
    // await this.auth.forgotPassword(primary.email)
    return true
  }

  async accountUpdatePassword(userId: string, input: AccountUpdatePasswordInput) {
    const user = await this.data.findUserById(userId)
    // We need to make sure the user provides the correct current password
    await validatePassword(input.currentPassword, user.password)

    // The new password must be the same as the verified new password
    if (input.password !== input.verified) {
      throw new BadRequestException(`Passwords do not match!`)
    }
    // We can now update the password
    await this.data.user.update({ where: { id: userId }, data: { password: hashPassword(input.password) } })
    return true
  }
}
