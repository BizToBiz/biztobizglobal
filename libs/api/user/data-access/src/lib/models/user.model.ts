import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Role, UserOnlineStatus, UserStatus } from '@biztobiz/api/enums/data-access'
import { ChapterMember } from '@biztobiz/api/chapter-member/data-access'
import { AttendanceReminder } from '@biztobiz/api/attendance-reminder/data-access'
import { Substitute } from '@biztobiz/api/substitute/data-access'
import { Upload } from '@biztobiz/api/upload/data-access'
import { MeetingPresence } from '@biztobiz/api/meeting-presence/data-access'
import { Company } from '@biztobiz/api/company/data-access'
import { Territory } from '@biztobiz/api/territory/data-access'
import { Region } from '@biztobiz/api/region/data-access'

import { PowerHour } from '@biztobiz/api/power-hour/data-access'
import { Referral } from '@biztobiz/api/referral/data-access'
import { Testimonial } from '@biztobiz/api/testimonial/data-access'
import { Transaction } from '@biztobiz/api/transaction/data-access'

import { Notification } from '@biztobiz/api/notification/data-access'

@ObjectType()
export class User {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  lastSeen?: Date

  @Field(() => UserOnlineStatus, { nullable: true })
  onlineStatus?: UserOnlineStatus

  @Field(() => UserStatus, { nullable: true })
  status?: UserStatus

  @Field({ nullable: true })
  developer?: boolean

  @Field(() => Role, { nullable: true })
  role?: Role

  @Field({ nullable: true })
  email?: string

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

  @Field(() => ChapterMember, { nullable: true })
  chapter?: ChapterMember

  @Field(() => [Company], { nullable: 'itemsAndList' })
  companies?: Company[]

  @Field(() => [Notification], { nullable: 'itemsAndList' })
  notificationsSent?: Notification[]

  @Field(() => [Notification], { nullable: 'itemsAndList' })
  notificationsReceived?: Notification[]

  @Field(() => [PowerHour], { nullable: 'itemsAndList' })
  powerHoursFrom?: PowerHour[]

  @Field(() => [PowerHour], { nullable: 'itemsAndList' })
  powerHoursTo?: PowerHour[]

  @Field(() => [Referral], { nullable: 'itemsAndList' })
  referralsSent?: Referral[]

  @Field(() => [Referral], { nullable: 'itemsAndList' })
  referralsFrom?: Referral[]

  @Field(() => [Referral], { nullable: 'itemsAndList' })
  referralsTo?: Referral[]

  @Field(() => [AttendanceReminder], { nullable: 'itemsAndList' })
  reminderSentBy?: AttendanceReminder[]

  @Field(() => [AttendanceReminder], { nullable: 'itemsAndList' })
  reminderSentTo?: AttendanceReminder[]

  @Field(() => [Substitute], { nullable: 'itemsAndList' })
  substituteAccepted?: Substitute[]

  @Field(() => [Substitute], { nullable: 'itemsAndList' })
  substituteInvited?: Substitute[]

  @Field(() => [Substitute], { nullable: 'itemsAndList' })
  substitutesSentBy?: Substitute[]

  @Field(() => [Testimonial], { nullable: 'itemsAndList' })
  testimonialsFrom?: Testimonial[]

  @Field(() => [Testimonial], { nullable: 'itemsAndList' })
  testimonialsto?: Testimonial[]

  @Field(() => [Transaction], { nullable: true })
  transactions?: Transaction[]

  @Field(() => Territory, { nullable: true })
  territoryManaged?: Territory

  @Field(() => Region, { nullable: true })
  regionManaged?: Region

  @Field(() => Upload, { nullable: true })
  avatar?: Upload

  @Field(() => MeetingPresence, { nullable: true })
  presence?: MeetingPresence

  isLeader?: boolean
}
