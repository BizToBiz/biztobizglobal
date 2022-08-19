import { Resolver } from '@nestjs/graphql'
import { ApiReportDataAccessPublicService } from '@biztobiz/api/report/data-access'

@Resolver()
export class ApiReportFeaturePublicResolver {
  constructor(private readonly service: ApiReportDataAccessPublicService) {}
}
