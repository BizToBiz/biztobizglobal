import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserCreateChapterInput {
  @Field()
  name: string
}
