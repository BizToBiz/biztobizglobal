import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@biztobiz/api/core/data-access'

@Injectable()
export class ApiCoreUtilService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async generateCount(dataType: string, input, where) {
    const total = await this.data['dataType'].count()
    const count = await this.data['dataType'].count({ where: where(input?.search) })
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
