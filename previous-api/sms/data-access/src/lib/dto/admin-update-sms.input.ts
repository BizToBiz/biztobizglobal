import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateSmsInput {
  @Field({ nullable: true })
  name?: string
}
