import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateUploadInput {
  @Field({ nullable: true })
  name?: string
}
