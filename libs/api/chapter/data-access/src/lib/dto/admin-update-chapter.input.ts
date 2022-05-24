import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateChapterInput {
  @Field({ nullable: true })
  name?: string
}
