import { Resolver } from '@nestjs/graphql'
import { ApiCompanyMemberDataAccessPublicService, CompanyMember } from '@biztobiz/api/company-member/data-access'

@Resolver(() => CompanyMember)
export class ApiCompanyMemberFeaturePublicResolver {
  constructor(private readonly service: ApiCompanyMemberDataAccessPublicService) {}
}
