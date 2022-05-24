import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ApiCompanyDataAccessPublicService, Company, CompanyMember } from '@biztobiz/api/company/data-access'
import { User } from '@biztobiz/api/user/data-access'

@Resolver(() => CompanyMember)
export class ApiCompanyMemberPublicResolver {
  constructor(private readonly service: ApiCompanyDataAccessPublicService) {}

  @ResolveField(() => Company, { nullable: true })
  company(@Parent() companyMember: CompanyMember) {
    return companyMember.company
  }

  @ResolveField(() => User, { nullable: true })
  member(@Parent() companyMember: CompanyMember) {
    return companyMember.member
  }
}
