import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '@biztobiz/api/core/data-access'

@Injectable()
export class ApiTestimonialDataAccessPublicService {
  constructor(private readonly data: ApiCoreDataAccessService) {}
}
