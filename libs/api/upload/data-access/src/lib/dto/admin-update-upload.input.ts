import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateUploadInput {
  @Field({ nullable: true })
  name?: string
}
