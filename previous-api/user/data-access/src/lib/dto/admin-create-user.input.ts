import { Field, InputType, Int } from '@nestjs/graphql'
import { Role } from '../models/role.enum'
import { UserOnlineStatus } from '../models/user-online-status.enum'
import { UserStatus } from '../models/user-status.enum'

@InputType()
export class AdminCreateUserInput {
  @Field({ nullable: true })
  lastSeen?: Date

  @Field(() => UserOnlineStatus, { nullable: true })
  onlineStatus?: UserOnlineStatus

  @Field(() => UserStatus, { nullable: true })
  status?: UserStatus

  @Field({ nullable: true })
  developer?: boolean

  @Field(() => Role)
  role: Role

  @Field()
  email: string

  @Field({ nullable: true })
  emailConfirmed?: boolean

  @Field({ nullable: true })
  username?: string

  @Field(() => Int, { nullable: true })
  infusionsoftId?: number

  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string

  @Field({ nullable: true })
  password?: string

  @Field({ nullable: true })
  passwordResetToken?: string

  @Field({ nullable: true })
  passwordResetExpires?: Date

  @Field({ nullable: true })
  confirmEmailToken?: string

  @Field({ nullable: true })
  confirmEmailExpires?: Date

  @Field({ nullable: true })
  showGravatar?: boolean

  @Field({ nullable: true })
  avatarUrl?: string

  @Field({ nullable: true })
  applicationDate?: Date

  @Field({ nullable: true })
  inactiveDate?: Date

  @Field({ nullable: true })
  inquiryDate?: Date

  @Field({ nullable: true })
  membershipDate?: Date

  @Field({ nullable: true })
  renewalDate?: Date

  @Field({ nullable: true })
  terminationDate?: Date

  @Field({ nullable: true })
  transferDate?: Date

  @Field({ nullable: true })
  location?: string

  @Field({ nullable: true })
  phone?: string

  @Field({ nullable: true })
  bio?: string

  @Field({ nullable: true })
  facebook?: string

  @Field({ nullable: true })
  twitter?: string

  @Field({ nullable: true })
  youtube?: string

  @Field({ nullable: true })
  linkedin?: string

  @Field({ nullable: true })
  instagram?: string

  @Field({ nullable: true })
  website?: string

  @Field({ nullable: true })
  industry?: string

  @Field({ nullable: true })
  timeInIndustry?: string

  @Field({ nullable: true })
  address?: string

  @Field({ nullable: true })
  address2?: string

  @Field({ nullable: true })
  cell?: string

  @Field({ nullable: true })
  chapterTitle?: string

  @Field({ nullable: true })
  city?: string

  @Field({ nullable: true })
  comments?: string

  @Field({ nullable: true })
  company?: string

  @Field({ nullable: true })
  fax?: string

  @Field({ nullable: true })
  hear?: string

  @Field({ nullable: true })
  hearOther?: string

  @Field({ nullable: true })
  internalComments?: string

  @Field({ nullable: true })
  launchComplete?: boolean

  @Field({ nullable: true })
  mentorName?: string

  @Field({ nullable: true })
  merchantCircle?: string

  @Field({ nullable: true })
  multipleBusinesses?: boolean

  @Field({ nullable: true })
  multipleLocations?: boolean

  @Field(() => Int, { nullable: true })
  numberOfEmployees?: number

  @Field(() => Int, { nullable: true })
  organizer?: number

  @Field({ nullable: true })
  otherBusinesses?: string

  @Field({ nullable: true })
  otherLocations?: string

  @Field({ nullable: true })
  postcode?: string

  @Field(() => Int, { nullable: true })
  promoter?: number

  @Field(() => Int, { nullable: true })
  recognized?: number

  @Field({ nullable: true })
  salesAgentName?: string

  @Field({ nullable: true })
  state?: string

  @Field(() => Int, { nullable: true })
  strategizer?: number

  @Field({ nullable: true })
  substitute?: boolean

  @Field({ nullable: true })
  tagline?: string

  @Field({ nullable: true })
  terminatedByName?: string

  @Field({ nullable: true })
  terminationComments?: string

  @Field({ nullable: true })
  terminationReason?: string

  @Field(() => Int, { nullable: true })
  thinker?: number

  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  type?: string

  @Field({ nullable: true })
  vet?: boolean

  @Field({ nullable: true })
  notifyByEmail?: boolean

  @Field({ nullable: true })
  notifyBySMS?: boolean

  @Field({ nullable: true })
  notifyByWeb?: boolean

  @Field({ nullable: true })
  notifyByMobile?: boolean
}
