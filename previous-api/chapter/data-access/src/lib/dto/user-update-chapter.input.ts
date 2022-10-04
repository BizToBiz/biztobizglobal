import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserUpdateChapterInput {
  @Field({ nullable: true })
  name?: string
}
