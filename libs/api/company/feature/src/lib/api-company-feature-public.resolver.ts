import { Resolver } from '@nestjs/graphql'
import { ApiCompanyDataAccessPublicService, Company } from '@biztobiz/api/company/data-access'

@Resolver(() => Company)
export class ApiCompanyFeaturePublicResolver {
  constructor(private readonly service: ApiCompanyDataAccessPublicService) {}
}
