import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateUploadInput {
  @Field()
  originalFilename: string
}
