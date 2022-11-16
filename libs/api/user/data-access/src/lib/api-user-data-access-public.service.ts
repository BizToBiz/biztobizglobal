import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@biztobiz/api/core/data-access'
import { uniqueSuffix } from '@biztobiz/api/auth/data-access'

@Injectable()
export class ApiUserDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  getUserName(userId: string) {
    return this.data.user.findUnique({ where: { id: userId } }).then((user) => `${user?.firstName} ${user?.lastName}`)
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

  async isLeader(userId: string) {
    return this.data.isLeader(userId)
  }
}
