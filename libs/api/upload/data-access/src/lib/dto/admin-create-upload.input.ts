import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateUploadInput {
  @Field()
  originalFilename: string
}
