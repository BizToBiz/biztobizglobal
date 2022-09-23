import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@biztobiz/api/core/data-access'
import { uniqueSuffix } from '@biztobiz/api/auth/data-access'
import { ChapterMemberRole } from '@biztobiz/api/enums/data-access'

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
    const user = await this.data.user.findFirst({
      where: {
        AND: [
          { id: userId },
          {
            OR: [
              { chapter: { role: ChapterMemberRole.Chairman } },
              { chapter: { role: ChapterMemberRole.VicePresident } },
              { chapter: { role: ChapterMemberRole.President } },
              { territoryManaged: { managerId: userId } },
              { regionManaged: { managerId: userId } },
            ],
          },
        ],
      },
    })

    return !!user
  }
}
