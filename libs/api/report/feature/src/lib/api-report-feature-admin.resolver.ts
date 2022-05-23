import { Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { ApiReportDataAccessAdminService } from '@biztobiz/api/report/data-access'
import { GqlAuthAdminGuard } from '@biztobiz/api/auth/util'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiReportFeatureAdminResolver {
  constructor(private readonly service: ApiReportDataAccessAdminService) {}
}
