import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateReportInput {
  @Field({ nullable: true })
  name?: string
}
