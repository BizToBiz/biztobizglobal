import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateUploadInput {
  @Field({ nullable: true })
  originalFilename?: string
}
