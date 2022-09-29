import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateUploadInput {
  @Field({ nullable: true })
  format?: string

  @Field({ nullable: true })
  originalFilename: string

  @Field({ nullable: true })
  publicId: string

  @Field({ nullable: true })
  resourceType: string

  @Field({ nullable: true })
  secureUrl: string

  @Field({ nullable: true })
  signature: string

  @Field({ nullable: true })
  thumbnailUrl: string

  @Field({ nullable: true })
  url?: string

  @Field({ nullable: true })
  type?: string

  @Field({ nullable: true })
  userId?: string

  @Field({ nullable: true })
  chapterId?: string
}
