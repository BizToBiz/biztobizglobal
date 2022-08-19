import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '@biztobiz/api/user/data-access'
import { Chapter } from '@biztobiz/api/chapter/data-access'

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

  @Field(() => User, { nullable: true })
  user?: Omit<[User], ''>

  @Field(() => Chapter, { nullable: true })
  chapter?: Omit<[Chapter], ''>
}
