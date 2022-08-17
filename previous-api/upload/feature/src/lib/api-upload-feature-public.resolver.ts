import { Resolver } from '@nestjs/graphql'
import { ApiUploadDataAccessPublicService, Upload } from '@biztobiz/api/upload/data-access'

@Resolver(() => Upload)
export class ApiUploadFeaturePublicResolver {
  constructor(private readonly service: ApiUploadDataAccessPublicService) {}
}
