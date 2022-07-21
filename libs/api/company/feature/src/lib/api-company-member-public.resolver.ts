import { Resolver } from '@nestjs/graphql'
import { ApiCompanyDataAccessPublicService, CompanyMember } from '@biztobiz/api/company/data-access'

@Resolver(() => CompanyMember)
export class ApiCompanyMemberPublicResolver {
  constructor(private readonly service: ApiCompanyDataAccessPublicService) {}
}
