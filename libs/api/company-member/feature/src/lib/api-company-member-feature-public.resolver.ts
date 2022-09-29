import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiCompanyMemberDataAccessPublicService, CompanyMember } from '@biztobiz/api/company-member/data-access'

@Resolver(() => CompanyMember)
export class ApiCompanyMemberFeaturePublicResolver {
  constructor(private readonly service: ApiCompanyMemberDataAccessPublicService) {}

  @ResolveField(() => String, { nullable: true })
  name(@Parent() companyMember: CompanyMember) {
    return `${companyMember?.company?.name} - ${companyMember?.member?.firstName} ${companyMember?.member?.lastName}`
  }
}
