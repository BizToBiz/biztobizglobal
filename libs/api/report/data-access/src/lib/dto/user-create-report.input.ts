import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateReportInput {
  @Field()
  name: string
}
