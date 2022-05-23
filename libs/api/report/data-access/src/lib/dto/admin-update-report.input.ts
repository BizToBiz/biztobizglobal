import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateReportInput {
  @Field({ nullable: true })
  name?: string
}
