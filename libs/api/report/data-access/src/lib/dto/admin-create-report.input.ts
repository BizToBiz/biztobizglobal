import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateReportInput {
  @Field()
  name: string
}
