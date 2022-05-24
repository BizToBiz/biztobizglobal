import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Upload {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

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
}
