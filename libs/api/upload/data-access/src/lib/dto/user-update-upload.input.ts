import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateUploadInput {
  @Field({ nullable: true })
  originalFilename?: string
}
