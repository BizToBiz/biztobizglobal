import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AccountUpdatePasswordInput = {
  currentPassword: Scalars['String']
  password: Scalars['String']
  verified: Scalars['String']
}

export type AccountUpdateProfileInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  bio?: InputMaybe<Scalars['String']>
  dob?: InputMaybe<Scalars['DateTime']>
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

export type AdminCreateAttendanceReminderInput = {
  chapterId?: InputMaybe<Scalars['String']>
  sentById?: InputMaybe<Scalars['String']>
  sentToId?: InputMaybe<Scalars['String']>
}

export type AdminCreateChapterInput = {
  attendanceReminders?: InputMaybe<Array<MultiSelectInput>>
  avatarEmail?: InputMaybe<Scalars['String']>
  avatarId?: InputMaybe<Scalars['String']>
  avatarUrl?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  establishedDate?: InputMaybe<Scalars['DateTime']>
  facebook?: InputMaybe<Scalars['String']>
  latitude?: InputMaybe<Scalars['String']>
  longitude?: InputMaybe<Scalars['String']>
  meetingDay?: InputMaybe<DayOfWeek>
  meetingDetails?: InputMaybe<Scalars['String']>
  meetingTime?: InputMaybe<Scalars['String']>
  meetings?: InputMaybe<Array<MultiSelectInput>>
  members?: InputMaybe<Array<MultiSelectInput>>
  name?: InputMaybe<Scalars['String']>
  referralsFrom?: InputMaybe<Array<MultiSelectInput>>
  referralsTo?: InputMaybe<Array<MultiSelectInput>>
  regionId?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  status?: InputMaybe<ChapterStatus>
  substituteGroupId?: InputMaybe<Scalars['String']>
  transactions?: InputMaybe<Array<MultiSelectInput>>
}

export type AdminCreateChapterMemberInput = {
  chapterId?: InputMaybe<Scalars['String']>
  isMentor?: InputMaybe<Scalars['Boolean']>
  isTrainer?: InputMaybe<Scalars['Boolean']>
  memberId?: InputMaybe<Scalars['String']>
  role?: InputMaybe<ChapterMemberRole>
}

export type AdminCreateCompanyInput = {
  members?: InputMaybe<Array<MultiSelectInput>>
  name?: InputMaybe<Scalars['String']>
}

export type AdminCreateCompanyMemberInput = {
  location: Scalars['String']
}

export type AdminCreateIndustryInput = {
  name: Scalars['String']
}

export type AdminCreateMeetingInput = {
  chapterId?: InputMaybe<Scalars['String']>
  date: Scalars['DateTime']
  isVisitorDay?: InputMaybe<Scalars['Boolean']>
}

export type AdminCreateMeetingPresenceInput = {
  date: Scalars['String']
}

export type AdminCreateNotificationInput = {
  actorId?: InputMaybe<Scalars['String']>
  message?: InputMaybe<Scalars['String']>
  read?: InputMaybe<Scalars['Boolean']>
  referenceId?: InputMaybe<Scalars['String']>
  referenceType?: InputMaybe<NotificationReferenceType>
  toId?: InputMaybe<Scalars['String']>
  type?: InputMaybe<NotificationType>
}

export type AdminCreatePowerHourInput = {
  details: Scalars['String']
}

export type AdminCreateReferralInput = {
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  fromChapterId?: InputMaybe<Scalars['String']>
  fromId?: InputMaybe<Scalars['String']>
  fromIndustry?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  notes?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  rating?: InputMaybe<ReferralRating>
  sentById?: InputMaybe<Scalars['String']>
  toChapterId?: InputMaybe<Scalars['String']>
  toId?: InputMaybe<Scalars['String']>
  toIndustry?: InputMaybe<Scalars['String']>
}

export type AdminCreateRegionInput = {
  managerId?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  territoryId?: InputMaybe<Scalars['String']>
}

export type AdminCreateSubstituteGroupInput = {
  name: Scalars['String']
}

export type AdminCreateSubstituteInput = {
  name: Scalars['String']
}

export type AdminCreateTerritoryInput = {
  managerId?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  regions?: InputMaybe<Array<MultiSelectInput>>
}

export type AdminCreateTestimonialInput = {
  text: Scalars['String']
}

export type AdminCreateTransactionInput = {
  text: Scalars['String']
}

export type AdminCreateUploadInput = {
  originalFilename: Scalars['String']
}

export type AdminCreateUserInput = {
  address?: InputMaybe<Scalars['String']>
  address2?: InputMaybe<Scalars['String']>
  applicationDate?: InputMaybe<Scalars['DateTime']>
  avatarId?: InputMaybe<Scalars['String']>
  avatarUrl?: InputMaybe<Scalars['String']>
  bio?: InputMaybe<Scalars['String']>
  cell?: InputMaybe<Scalars['String']>
  chapterId?: InputMaybe<Scalars['String']>
  chapterTitle?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  comments?: InputMaybe<Scalars['String']>
  companies?: InputMaybe<Array<MultiSelectInput>>
  company?: InputMaybe<Scalars['String']>
  confirmEmailExpires?: InputMaybe<Scalars['DateTime']>
  confirmEmailToken?: InputMaybe<Scalars['String']>
  developer?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  emailConfirmed?: InputMaybe<Scalars['Boolean']>
  facebook?: InputMaybe<Scalars['String']>
  fax?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  hear?: InputMaybe<Scalars['String']>
  hearOther?: InputMaybe<Scalars['String']>
  inactiveDate?: InputMaybe<Scalars['DateTime']>
  industry?: InputMaybe<Scalars['String']>
  infusionsoftId?: InputMaybe<Scalars['Int']>
  inquiryDate?: InputMaybe<Scalars['DateTime']>
  instagram?: InputMaybe<Scalars['String']>
  internalComments?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  lastSeen?: InputMaybe<Scalars['DateTime']>
  launchComplete?: InputMaybe<Scalars['Boolean']>
  linkedin?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  membershipDate?: InputMaybe<Scalars['DateTime']>
  mentorName?: InputMaybe<Scalars['String']>
  merchantCircle?: InputMaybe<Scalars['String']>
  multipleBusinesses?: InputMaybe<Scalars['Boolean']>
  multipleLocations?: InputMaybe<Scalars['Boolean']>
  nofificationsSent?: InputMaybe<Array<MultiSelectInput>>
  notificationsReceived?: InputMaybe<Array<MultiSelectInput>>
  notifyByEmail?: InputMaybe<Scalars['Boolean']>
  notifyByMobile?: InputMaybe<Scalars['Boolean']>
  notifyBySMS?: InputMaybe<Scalars['Boolean']>
  notifyByWeb?: InputMaybe<Scalars['Boolean']>
  numberOfEmployees?: InputMaybe<Scalars['Int']>
  onlineStatus?: InputMaybe<UserOnlineStatus>
  organizer?: InputMaybe<Scalars['Int']>
  otherBusinesses?: InputMaybe<Scalars['String']>
  otherLocations?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  passwordResetExpires?: InputMaybe<Scalars['DateTime']>
  passwordResetToken?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  postcode?: InputMaybe<Scalars['String']>
  powerHoursFrom?: InputMaybe<Array<MultiSelectInput>>
  powerHoursTo?: InputMaybe<Array<MultiSelectInput>>
  presence?: InputMaybe<Array<MultiSelectInput>>
  promoter?: InputMaybe<Scalars['Int']>
  recognized?: InputMaybe<Scalars['Int']>
  referralsFrom?: InputMaybe<Array<MultiSelectInput>>
  referralsSent?: InputMaybe<Array<MultiSelectInput>>
  referralsTo?: InputMaybe<Array<MultiSelectInput>>
  regionManagedId?: InputMaybe<Scalars['String']>
  reminderSentBy?: InputMaybe<Array<MultiSelectInput>>
  reminderSentTo?: InputMaybe<Array<MultiSelectInput>>
  renewalDate?: InputMaybe<Scalars['DateTime']>
  role?: InputMaybe<Role>
  salesAgentName?: InputMaybe<Scalars['String']>
  showGravatar?: InputMaybe<Scalars['Boolean']>
  state?: InputMaybe<Scalars['String']>
  status?: InputMaybe<UserStatus>
  strategizer?: InputMaybe<Scalars['Int']>
  substitute?: InputMaybe<Scalars['Boolean']>
  substituteAccepted?: InputMaybe<Array<MultiSelectInput>>
  substituteInvited?: InputMaybe<Array<MultiSelectInput>>
  tagline?: InputMaybe<Scalars['String']>
  terminatedByName?: InputMaybe<Scalars['String']>
  terminationComments?: InputMaybe<Scalars['String']>
  terminationDate?: InputMaybe<Scalars['DateTime']>
  terminationReason?: InputMaybe<Scalars['String']>
  territoryManagedId?: InputMaybe<Scalars['String']>
  testimonialsFrom?: InputMaybe<Array<MultiSelectInput>>
  testimonialsTo?: InputMaybe<Array<MultiSelectInput>>
  thinker?: InputMaybe<Scalars['Int']>
  timeInIndustry?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  transactions?: InputMaybe<Array<MultiSelectInput>>
  transferDate?: InputMaybe<Scalars['DateTime']>
  twitter?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
  vet?: InputMaybe<Scalars['Boolean']>
  website?: InputMaybe<Scalars['String']>
  youtube?: InputMaybe<Scalars['String']>
}

export type AdminListAttendanceReminderInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListChapterInput = {
  memberId?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  regionId?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  substituteGroupId?: InputMaybe<Scalars['String']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListChapterMemberInput = {
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListCompanyInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListCompanyMemberInput = {
  location?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListIndustryInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListMeetingInput = {
  date?: InputMaybe<Scalars['DateTime']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListMeetingPresenceInput = {
  date?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListNotificationInput = {
  message?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListPowerHourInput = {
  details?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListReferralInput = {
  firstName?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListRegionInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListSubstituteGroupInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListSubstituteInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListTerritoryInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListTestimonialInput = {
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
}

export type AdminListTransactionInput = {
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
}

export type AdminListUploadInput = {
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  originalFilename?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListUserInput = {
  firstName?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminUpdateAttendanceReminderInput = {
  chapterId?: InputMaybe<Scalars['String']>
  sentById?: InputMaybe<Scalars['String']>
  sentToId?: InputMaybe<Scalars['String']>
}

export type AdminUpdateChapterInput = {
  attendanceReminders?: InputMaybe<Array<MultiSelectInput>>
  avatarEmail?: InputMaybe<Scalars['String']>
  avatarId?: InputMaybe<Scalars['String']>
  avatarUrl?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  establishedDate?: InputMaybe<Scalars['DateTime']>
  facebook?: InputMaybe<Scalars['String']>
  latitude?: InputMaybe<Scalars['String']>
  longitude?: InputMaybe<Scalars['String']>
  meetingDay?: InputMaybe<DayOfWeek>
  meetingDetails?: InputMaybe<Scalars['String']>
  meetingTime?: InputMaybe<Scalars['String']>
  meetings?: InputMaybe<Array<MultiSelectInput>>
  members?: InputMaybe<Array<MultiSelectInput>>
  name?: InputMaybe<Scalars['String']>
  referralsFrom?: InputMaybe<Array<MultiSelectInput>>
  referralsTo?: InputMaybe<Array<MultiSelectInput>>
  regionId?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  status?: InputMaybe<ChapterStatus>
  substituteGroupId?: InputMaybe<Scalars['String']>
  transactions?: InputMaybe<Array<MultiSelectInput>>
}

export type AdminUpdateChapterMemberInput = {
  chapterId?: InputMaybe<Scalars['String']>
  isMentor?: InputMaybe<Scalars['Boolean']>
  isTrainer?: InputMaybe<Scalars['Boolean']>
  memberId?: InputMaybe<Scalars['String']>
  role?: InputMaybe<ChapterMemberRole>
}

export type AdminUpdateCompanyInput = {
  members?: InputMaybe<Array<MultiSelectInput>>
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateCompanyMemberInput = {
  location?: InputMaybe<Scalars['String']>
}

export type AdminUpdateIndustryInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateMeetingInput = {
  date?: InputMaybe<Scalars['DateTime']>
}

export type AdminUpdateMeetingPresenceInput = {
  date?: InputMaybe<Scalars['String']>
}

export type AdminUpdateNotificationInput = {
  message?: InputMaybe<Scalars['String']>
}

export type AdminUpdatePowerHourInput = {
  details?: InputMaybe<Scalars['String']>
}

export type AdminUpdateReferralInput = {
  firstName?: InputMaybe<Scalars['String']>
}

export type AdminUpdateRegionInput = {
  managerId?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  territoryId?: InputMaybe<Scalars['String']>
}

export type AdminUpdateSubstituteGroupInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateSubstituteInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateTerritoryInput = {
  managerId?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  regions?: InputMaybe<Array<MultiSelectInput>>
}

export type AdminUpdateTestimonialInput = {
  text?: InputMaybe<Scalars['String']>
}

export type AdminUpdateTransactionInput = {
  text?: InputMaybe<Scalars['String']>
}

export type AdminUpdateUploadInput = {
  originalFilename?: InputMaybe<Scalars['String']>
}

export type AdminUpdateUserInput = {
  address?: InputMaybe<Scalars['String']>
  address2?: InputMaybe<Scalars['String']>
  applicationDate?: InputMaybe<Scalars['DateTime']>
  avatarId?: InputMaybe<Scalars['String']>
  avatarUrl?: InputMaybe<Scalars['String']>
  bio?: InputMaybe<Scalars['String']>
  cell?: InputMaybe<Scalars['String']>
  chapterId?: InputMaybe<Scalars['String']>
  chapterTitle?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  comments?: InputMaybe<Scalars['String']>
  companies?: InputMaybe<Array<MultiSelectInput>>
  company?: InputMaybe<Scalars['String']>
  confirmEmailExpires?: InputMaybe<Scalars['DateTime']>
  confirmEmailToken?: InputMaybe<Scalars['String']>
  developer?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  emailConfirmed?: InputMaybe<Scalars['Boolean']>
  facebook?: InputMaybe<Scalars['String']>
  fax?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  hear?: InputMaybe<Scalars['String']>
  hearOther?: InputMaybe<Scalars['String']>
  inactiveDate?: InputMaybe<Scalars['DateTime']>
  industry?: InputMaybe<Scalars['String']>
  infusionsoftId?: InputMaybe<Scalars['Int']>
  inquiryDate?: InputMaybe<Scalars['DateTime']>
  instagram?: InputMaybe<Scalars['String']>
  internalComments?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  lastSeen?: InputMaybe<Scalars['DateTime']>
  launchComplete?: InputMaybe<Scalars['Boolean']>
  linkedin?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  membershipDate?: InputMaybe<Scalars['DateTime']>
  mentorName?: InputMaybe<Scalars['String']>
  merchantCircle?: InputMaybe<Scalars['String']>
  multipleBusinesses?: InputMaybe<Scalars['Boolean']>
  multipleLocations?: InputMaybe<Scalars['Boolean']>
  nofificationsSent?: InputMaybe<Array<MultiSelectInput>>
  notificationsReceived?: InputMaybe<Array<MultiSelectInput>>
  notifyByEmail?: InputMaybe<Scalars['Boolean']>
  notifyByMobile?: InputMaybe<Scalars['Boolean']>
  notifyBySMS?: InputMaybe<Scalars['Boolean']>
  notifyByWeb?: InputMaybe<Scalars['Boolean']>
  numberOfEmployees?: InputMaybe<Scalars['Int']>
  onlineStatus?: InputMaybe<UserOnlineStatus>
  organizer?: InputMaybe<Scalars['Int']>
  otherBusinesses?: InputMaybe<Scalars['String']>
  otherLocations?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  passwordResetExpires?: InputMaybe<Scalars['DateTime']>
  passwordResetToken?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  postcode?: InputMaybe<Scalars['String']>
  powerHoursFrom?: InputMaybe<Array<MultiSelectInput>>
  powerHoursTo?: InputMaybe<Array<MultiSelectInput>>
  presence?: InputMaybe<Array<MultiSelectInput>>
  promoter?: InputMaybe<Scalars['Int']>
  recognized?: InputMaybe<Scalars['Int']>
  referralsFrom?: InputMaybe<Array<MultiSelectInput>>
  referralsSent?: InputMaybe<Array<MultiSelectInput>>
  referralsTo?: InputMaybe<Array<MultiSelectInput>>
  regionManagedId?: InputMaybe<Scalars['String']>
  reminderSentBy?: InputMaybe<Array<MultiSelectInput>>
  reminderSentTo?: InputMaybe<Array<MultiSelectInput>>
  renewalDate?: InputMaybe<Scalars['DateTime']>
  role?: InputMaybe<Role>
  salesAgentName?: InputMaybe<Scalars['String']>
  showGravatar?: InputMaybe<Scalars['Boolean']>
  state?: InputMaybe<Scalars['String']>
  status?: InputMaybe<UserStatus>
  strategizer?: InputMaybe<Scalars['Int']>
  substitute?: InputMaybe<Scalars['Boolean']>
  substituteAccepted?: InputMaybe<Array<MultiSelectInput>>
  substituteInvited?: InputMaybe<Array<MultiSelectInput>>
  tagline?: InputMaybe<Scalars['String']>
  terminatedByName?: InputMaybe<Scalars['String']>
  terminationComments?: InputMaybe<Scalars['String']>
  terminationDate?: InputMaybe<Scalars['DateTime']>
  terminationReason?: InputMaybe<Scalars['String']>
  territoryManagedId?: InputMaybe<Scalars['String']>
  testimonialsFrom?: InputMaybe<Array<MultiSelectInput>>
  testimonialsTo?: InputMaybe<Array<MultiSelectInput>>
  thinker?: InputMaybe<Scalars['Int']>
  timeInIndustry?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  transactions?: InputMaybe<Array<MultiSelectInput>>
  transferDate?: InputMaybe<Scalars['DateTime']>
  twitter?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
  vet?: InputMaybe<Scalars['Boolean']>
  website?: InputMaybe<Scalars['String']>
  youtube?: InputMaybe<Scalars['String']>
}

export type AttendanceReminder = {
  __typename?: 'AttendanceReminder'
  chapter?: Maybe<Chapter>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  sentBy?: Maybe<User>
  sentTo?: Maybe<User>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type Chapter = {
  __typename?: 'Chapter'
  attendanceReminders?: Maybe<Array<AttendanceReminder>>
  avatar?: Maybe<Upload>
  avatarEmail?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  establishedDate?: Maybe<Scalars['DateTime']>
  facebook?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  latitude?: Maybe<Scalars['String']>
  longitude?: Maybe<Scalars['String']>
  meetingDay?: Maybe<DayOfWeek>
  meetingDetails?: Maybe<Scalars['String']>
  meetingTime?: Maybe<Scalars['String']>
  meetings?: Maybe<Array<Meeting>>
  members?: Maybe<Array<ChapterMember>>
  name?: Maybe<Scalars['String']>
  referralsFrom?: Maybe<Array<Referral>>
  referralsTo?: Maybe<Array<Referral>>
  region?: Maybe<Region>
  state?: Maybe<Scalars['String']>
  status?: Maybe<ChapterStatus>
  substituteGroup?: Maybe<SubstituteGroup>
  transactions?: Maybe<Array<Transaction>>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ChapterMember = {
  __typename?: 'ChapterMember'
  chapter?: Maybe<Chapter>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  isMentor?: Maybe<Scalars['Boolean']>
  isTrainer?: Maybe<Scalars['Boolean']>
  member?: Maybe<User>
  name?: Maybe<Scalars['String']>
  role?: Maybe<ChapterMemberRole>
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** Chapter member role */
export enum ChapterMemberRole {
  Chairman = 'Chairman',
  Member = 'Member',
  President = 'President',
  VicePresident = 'VicePresident',
}

/** Chapter status */
export enum ChapterStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Inquiry = 'Inquiry',
  NowForming = 'NowForming',
  PhaseOne = 'PhaseOne',
  Shutdown = 'Shutdown',
}

export type Company = {
  __typename?: 'Company'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  members?: Maybe<Array<CompanyMember>>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CompanyMember = {
  __typename?: 'CompanyMember'
  company?: Maybe<Company>
  createdAt?: Maybe<Scalars['DateTime']>
  fromDate?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  member?: Maybe<User>
  role?: Maybe<Scalars['String']>
  thruDate?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CorePaging = {
  __typename?: 'CorePaging'
  count?: Maybe<Scalars['Float']>
  page?: Maybe<Scalars['Float']>
  skip?: Maybe<Scalars['Float']>
  take?: Maybe<Scalars['Float']>
  total?: Maybe<Scalars['Float']>
}

/** Day of Week */
export enum DayOfWeek {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Unknown = 'Unknown',
  Wednesday = 'Wednesday',
}

export type ForgotPasswordInput = {
  email: Scalars['String']
}

export type Industry = {
  __typename?: 'Industry'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
  remember?: InputMaybe<Scalars['Boolean']>
}

export type Meeting = {
  __typename?: 'Meeting'
  chapter?: Maybe<Chapter>
  createdAt?: Maybe<Scalars['DateTime']>
  date?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  isVisitorDay?: Maybe<Scalars['Boolean']>
  presence?: Maybe<Array<MeetingPresence>>
  substitutes?: Maybe<Array<Substitute>>
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** Meeting Attendance */
export enum MeetingAttendance {
  Absent = 'Absent',
  Excused = 'Excused',
  Invited = 'Invited',
  Present = 'Present',
  Substitute = 'Substitute',
  Unknown = 'Unknown',
}

export type MeetingPresence = {
  __typename?: 'MeetingPresence'
  attendance?: Maybe<MeetingAttendance>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  meeting?: Maybe<Meeting>
  member?: Maybe<User>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type MultiSelectInput = {
  id?: InputMaybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  accountResetPassword?: Maybe<Scalars['Boolean']>
  accountUpdatePassword?: Maybe<Scalars['Boolean']>
  accountUpdateProfile?: Maybe<User>
  adminCreateAttendanceReminder?: Maybe<AttendanceReminder>
  adminCreateChapter?: Maybe<Chapter>
  adminCreateChapterMember?: Maybe<ChapterMember>
  adminCreateCompany?: Maybe<Company>
  adminCreateCompanyMember?: Maybe<CompanyMember>
  adminCreateIndustry?: Maybe<Industry>
  adminCreateMeeting?: Maybe<Meeting>
  adminCreateMeetingPresence?: Maybe<MeetingPresence>
  adminCreateNotification?: Maybe<Notification>
  adminCreatePowerHour?: Maybe<PowerHour>
  adminCreateReferral?: Maybe<Referral>
  adminCreateRegion?: Maybe<Region>
  adminCreateSubstitute?: Maybe<Substitute>
  adminCreateSubstituteGroup?: Maybe<SubstituteGroup>
  adminCreateTerritory?: Maybe<Territory>
  adminCreateTestimonial?: Maybe<Testimonial>
  adminCreateTransaction?: Maybe<Transaction>
  adminCreateUpload?: Maybe<Upload>
  adminCreateUser?: Maybe<User>
  adminDeleteAttendanceReminder?: Maybe<AttendanceReminder>
  adminDeleteChapter?: Maybe<Chapter>
  adminDeleteChapterMember?: Maybe<ChapterMember>
  adminDeleteCompany?: Maybe<Company>
  adminDeleteCompanyMember?: Maybe<CompanyMember>
  adminDeleteIndustry?: Maybe<Industry>
  adminDeleteMeeting?: Maybe<Meeting>
  adminDeleteMeetingPresence?: Maybe<MeetingPresence>
  adminDeleteNotification?: Maybe<Notification>
  adminDeletePowerHour?: Maybe<PowerHour>
  adminDeleteReferral?: Maybe<Referral>
  adminDeleteRegion?: Maybe<Region>
  adminDeleteSubstitute?: Maybe<Substitute>
  adminDeleteSubstituteGroup?: Maybe<SubstituteGroup>
  adminDeleteTerritory?: Maybe<Territory>
  adminDeleteTestimonial?: Maybe<Testimonial>
  adminDeleteTransaction?: Maybe<Transaction>
  adminDeleteUpload?: Maybe<Upload>
  adminDeleteUser?: Maybe<User>
  adminUpdateAttendanceReminder?: Maybe<AttendanceReminder>
  adminUpdateChapter?: Maybe<Chapter>
  adminUpdateChapterMember?: Maybe<ChapterMember>
  adminUpdateCompany?: Maybe<Company>
  adminUpdateCompanyMember?: Maybe<CompanyMember>
  adminUpdateIndustry?: Maybe<Industry>
  adminUpdateMeeting?: Maybe<Meeting>
  adminUpdateMeetingPresence?: Maybe<MeetingPresence>
  adminUpdateNotification?: Maybe<Notification>
  adminUpdatePowerHour?: Maybe<PowerHour>
  adminUpdateReferral?: Maybe<Referral>
  adminUpdateRegion?: Maybe<Region>
  adminUpdateSubstitute?: Maybe<Substitute>
  adminUpdateSubstituteGroup?: Maybe<SubstituteGroup>
  adminUpdateTerritory?: Maybe<Territory>
  adminUpdateTestimonial?: Maybe<Testimonial>
  adminUpdateTransaction?: Maybe<Transaction>
  adminUpdateUpload?: Maybe<Upload>
  adminUpdateUser?: Maybe<User>
  forgotPassword?: Maybe<Scalars['Boolean']>
  intercomPub?: Maybe<IntercomMessage>
  leaderCreateAttendanceReminder?: Maybe<AttendanceReminder>
  leaderCreateChapter?: Maybe<Chapter>
  leaderCreateChapterMember?: Maybe<ChapterMember>
  leaderCreateCompany?: Maybe<Company>
  leaderCreateCompanyMember?: Maybe<CompanyMember>
  leaderCreateIndustry?: Maybe<Industry>
  leaderCreateMeeting?: Maybe<Meeting>
  leaderCreateMeetingPresence?: Maybe<MeetingPresence>
  leaderCreateNotification?: Maybe<Notification>
  leaderCreatePowerHour?: Maybe<PowerHour>
  leaderCreateReferral?: Maybe<Referral>
  leaderCreateRegion?: Maybe<Region>
  leaderCreateSubstitute?: Maybe<Substitute>
  leaderCreateSubstituteGroup?: Maybe<SubstituteGroup>
  leaderCreateTerritory?: Maybe<Territory>
  leaderCreateTestimonial?: Maybe<Testimonial>
  leaderCreateTransaction?: Maybe<Transaction>
  leaderCreateUpload?: Maybe<Upload>
  leaderCreateUser?: Maybe<User>
  leaderDeleteAttendanceReminder?: Maybe<AttendanceReminder>
  leaderDeleteChapter?: Maybe<Chapter>
  leaderDeleteChapterMember?: Maybe<ChapterMember>
  leaderDeleteCompany?: Maybe<Company>
  leaderDeleteCompanyMember?: Maybe<CompanyMember>
  leaderDeleteIndustry?: Maybe<Industry>
  leaderDeleteMeeting?: Maybe<Meeting>
  leaderDeleteMeetingPresence?: Maybe<MeetingPresence>
  leaderDeleteNotification?: Maybe<Notification>
  leaderDeletePowerHour?: Maybe<PowerHour>
  leaderDeleteReferral?: Maybe<Referral>
  leaderDeleteRegion?: Maybe<Region>
  leaderDeleteSubstitute?: Maybe<Substitute>
  leaderDeleteSubstituteGroup?: Maybe<SubstituteGroup>
  leaderDeleteTerritory?: Maybe<Territory>
  leaderDeleteTestimonial?: Maybe<Testimonial>
  leaderDeleteTransaction?: Maybe<Transaction>
  leaderDeleteUpload?: Maybe<Upload>
  leaderDeleteUser?: Maybe<User>
  leaderUpdateAttendanceReminder?: Maybe<AttendanceReminder>
  leaderUpdateChapter?: Maybe<Chapter>
  leaderUpdateChapterMember?: Maybe<ChapterMember>
  leaderUpdateCompany?: Maybe<Company>
  leaderUpdateCompanyMember?: Maybe<CompanyMember>
  leaderUpdateIndustry?: Maybe<Industry>
  leaderUpdateMeeting?: Maybe<Meeting>
  leaderUpdateMeetingPresence?: Maybe<MeetingPresence>
  leaderUpdateNotification?: Maybe<Notification>
  leaderUpdatePowerHour?: Maybe<PowerHour>
  leaderUpdateReferral?: Maybe<Referral>
  leaderUpdateRegion?: Maybe<Region>
  leaderUpdateSubstitute?: Maybe<Substitute>
  leaderUpdateSubstituteGroup?: Maybe<SubstituteGroup>
  leaderUpdateTerritory?: Maybe<Territory>
  leaderUpdateTestimonial?: Maybe<Testimonial>
  leaderUpdateTransaction?: Maybe<Transaction>
  leaderUpdateUpload?: Maybe<Upload>
  leaderUpdateUser?: Maybe<User>
  login?: Maybe<UserToken>
  logout?: Maybe<Scalars['Boolean']>
  register?: Maybe<UserToken>
  resetPassword?: Maybe<User>
  userCreateAttendanceReminder?: Maybe<AttendanceReminder>
  userCreateChapter?: Maybe<Chapter>
  userCreateChapterMember?: Maybe<ChapterMember>
  userCreateCompany?: Maybe<Company>
  userCreateCompanyMember?: Maybe<CompanyMember>
  userCreateIndustry?: Maybe<Industry>
  userCreateMeeting?: Maybe<Meeting>
  userCreateMeetingPresence?: Maybe<MeetingPresence>
  userCreateNotification?: Maybe<Notification>
  userCreatePowerHour?: Maybe<PowerHour>
  userCreateReferral?: Maybe<Referral>
  userCreateRegion?: Maybe<Region>
  userCreateSubstitute?: Maybe<Substitute>
  userCreateSubstituteGroup?: Maybe<SubstituteGroup>
  userCreateTerritory?: Maybe<Territory>
  userCreateTestimonial?: Maybe<Testimonial>
  userCreateTransaction?: Maybe<Transaction>
  userCreateUpload?: Maybe<Upload>
  userCreateUser?: Maybe<User>
  userDeleteAttendanceReminder?: Maybe<AttendanceReminder>
  userDeleteChapter?: Maybe<Chapter>
  userDeleteChapterMember?: Maybe<ChapterMember>
  userDeleteCompany?: Maybe<Company>
  userDeleteCompanyMember?: Maybe<CompanyMember>
  userDeleteIndustry?: Maybe<Industry>
  userDeleteMeeting?: Maybe<Meeting>
  userDeleteMeetingPresence?: Maybe<MeetingPresence>
  userDeleteNotification?: Maybe<Notification>
  userDeletePowerHour?: Maybe<PowerHour>
  userDeleteReferral?: Maybe<Referral>
  userDeleteRegion?: Maybe<Region>
  userDeleteSubstitute?: Maybe<Substitute>
  userDeleteSubstituteGroup?: Maybe<SubstituteGroup>
  userDeleteTerritory?: Maybe<Territory>
  userDeleteTestimonial?: Maybe<Testimonial>
  userDeleteTransaction?: Maybe<Transaction>
  userDeleteUpload?: Maybe<Upload>
  userDeleteUser?: Maybe<User>
  userUpdateAttendanceReminder?: Maybe<AttendanceReminder>
  userUpdateChapter?: Maybe<Chapter>
  userUpdateChapterMember?: Maybe<ChapterMember>
  userUpdateCompany?: Maybe<Company>
  userUpdateCompanyMember?: Maybe<CompanyMember>
  userUpdateIndustry?: Maybe<Industry>
  userUpdateMeeting?: Maybe<Meeting>
  userUpdateMeetingPresence?: Maybe<MeetingPresence>
  userUpdateNotification?: Maybe<Notification>
  userUpdatePowerHour?: Maybe<PowerHour>
  userUpdateReferral?: Maybe<Referral>
  userUpdateRegion?: Maybe<Region>
  userUpdateSubstitute?: Maybe<Substitute>
  userUpdateSubstituteGroup?: Maybe<SubstituteGroup>
  userUpdateTerritory?: Maybe<Territory>
  userUpdateTestimonial?: Maybe<Testimonial>
  userUpdateTransaction?: Maybe<Transaction>
  userUpdateUpload?: Maybe<Upload>
  userUpdateUser?: Maybe<User>
}

export type MutationAccountUpdatePasswordArgs = {
  input: AccountUpdatePasswordInput
}

export type MutationAccountUpdateProfileArgs = {
  input: AccountUpdateProfileInput
}

export type MutationAdminCreateAttendanceReminderArgs = {
  input: AdminCreateAttendanceReminderInput
}

export type MutationAdminCreateChapterArgs = {
  input: AdminCreateChapterInput
}

export type MutationAdminCreateChapterMemberArgs = {
  input: AdminCreateChapterMemberInput
}

export type MutationAdminCreateCompanyArgs = {
  input: AdminCreateCompanyInput
}

export type MutationAdminCreateCompanyMemberArgs = {
  input: AdminCreateCompanyMemberInput
}

export type MutationAdminCreateIndustryArgs = {
  input: AdminCreateIndustryInput
}

export type MutationAdminCreateMeetingArgs = {
  input: AdminCreateMeetingInput
}

export type MutationAdminCreateMeetingPresenceArgs = {
  input: AdminCreateMeetingPresenceInput
}

export type MutationAdminCreateNotificationArgs = {
  input: AdminCreateNotificationInput
}

export type MutationAdminCreatePowerHourArgs = {
  input: AdminCreatePowerHourInput
}

export type MutationAdminCreateReferralArgs = {
  input: AdminCreateReferralInput
}

export type MutationAdminCreateRegionArgs = {
  input: AdminCreateRegionInput
}

export type MutationAdminCreateSubstituteArgs = {
  input: AdminCreateSubstituteInput
}

export type MutationAdminCreateSubstituteGroupArgs = {
  input: AdminCreateSubstituteGroupInput
}

export type MutationAdminCreateTerritoryArgs = {
  input: AdminCreateTerritoryInput
}

export type MutationAdminCreateTestimonialArgs = {
  input: AdminCreateTestimonialInput
}

export type MutationAdminCreateTransactionArgs = {
  input: AdminCreateTransactionInput
}

export type MutationAdminCreateUploadArgs = {
  input: AdminCreateUploadInput
}

export type MutationAdminCreateUserArgs = {
  input: AdminCreateUserInput
}

export type MutationAdminDeleteAttendanceReminderArgs = {
  attendanceReminderId: Scalars['String']
}

export type MutationAdminDeleteChapterArgs = {
  chapterId: Scalars['String']
}

export type MutationAdminDeleteChapterMemberArgs = {
  chapterMemberId: Scalars['String']
}

export type MutationAdminDeleteCompanyArgs = {
  companyId: Scalars['String']
}

export type MutationAdminDeleteCompanyMemberArgs = {
  companyMemberId: Scalars['String']
}

export type MutationAdminDeleteIndustryArgs = {
  industryId: Scalars['String']
}

export type MutationAdminDeleteMeetingArgs = {
  meetingId: Scalars['String']
}

export type MutationAdminDeleteMeetingPresenceArgs = {
  meetingPresenceId: Scalars['String']
}

export type MutationAdminDeleteNotificationArgs = {
  notificationId: Scalars['String']
}

export type MutationAdminDeletePowerHourArgs = {
  powerHourId: Scalars['String']
}

export type MutationAdminDeleteReferralArgs = {
  referralId: Scalars['String']
}

export type MutationAdminDeleteRegionArgs = {
  regionId: Scalars['String']
}

export type MutationAdminDeleteSubstituteArgs = {
  substituteId: Scalars['String']
}

export type MutationAdminDeleteSubstituteGroupArgs = {
  substituteGroupId: Scalars['String']
}

export type MutationAdminDeleteTerritoryArgs = {
  territoryId: Scalars['String']
}

export type MutationAdminDeleteTestimonialArgs = {
  testimonialId: Scalars['String']
}

export type MutationAdminDeleteTransactionArgs = {
  transactionId: Scalars['String']
}

export type MutationAdminDeleteUploadArgs = {
  uploadId: Scalars['String']
}

export type MutationAdminDeleteUserArgs = {
  userId: Scalars['String']
}

export type MutationAdminUpdateAttendanceReminderArgs = {
  attendanceReminderId: Scalars['String']
  input: AdminUpdateAttendanceReminderInput
}

export type MutationAdminUpdateChapterArgs = {
  chapterId: Scalars['String']
  input: AdminUpdateChapterInput
}

export type MutationAdminUpdateChapterMemberArgs = {
  chapterMemberId: Scalars['String']
  input: AdminUpdateChapterMemberInput
}

export type MutationAdminUpdateCompanyArgs = {
  companyId: Scalars['String']
  input: AdminUpdateCompanyInput
}

export type MutationAdminUpdateCompanyMemberArgs = {
  companyMemberId: Scalars['String']
  input: AdminUpdateCompanyMemberInput
}

export type MutationAdminUpdateIndustryArgs = {
  industryId: Scalars['String']
  input: AdminUpdateIndustryInput
}

export type MutationAdminUpdateMeetingArgs = {
  input: AdminUpdateMeetingInput
  meetingId: Scalars['String']
}

export type MutationAdminUpdateMeetingPresenceArgs = {
  input: AdminUpdateMeetingPresenceInput
  meetingPresenceId: Scalars['String']
}

export type MutationAdminUpdateNotificationArgs = {
  input: AdminUpdateNotificationInput
  notificationId: Scalars['String']
}

export type MutationAdminUpdatePowerHourArgs = {
  input: AdminUpdatePowerHourInput
  powerHourId: Scalars['String']
}

export type MutationAdminUpdateReferralArgs = {
  input: AdminUpdateReferralInput
  referralId: Scalars['String']
}

export type MutationAdminUpdateRegionArgs = {
  input: AdminUpdateRegionInput
  regionId: Scalars['String']
}

export type MutationAdminUpdateSubstituteArgs = {
  input: AdminUpdateSubstituteInput
  substituteId: Scalars['String']
}

export type MutationAdminUpdateSubstituteGroupArgs = {
  input: AdminUpdateSubstituteGroupInput
  substituteGroupId: Scalars['String']
}

export type MutationAdminUpdateTerritoryArgs = {
  input: AdminUpdateTerritoryInput
  territoryId: Scalars['String']
}

export type MutationAdminUpdateTestimonialArgs = {
  input: AdminUpdateTestimonialInput
  testimonialId: Scalars['String']
}

export type MutationAdminUpdateTransactionArgs = {
  input: AdminUpdateTransactionInput
  transactionId: Scalars['String']
}

export type MutationAdminUpdateUploadArgs = {
  input: AdminUpdateUploadInput
  uploadId: Scalars['String']
}

export type MutationAdminUpdateUserArgs = {
  input: AdminUpdateUserInput
  userId: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput
}

export type MutationIntercomPubArgs = {
  payload?: InputMaybe<Scalars['JSON']>
  scope?: InputMaybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationLeaderCreateAttendanceReminderArgs = {
  input: AdminCreateAttendanceReminderInput
}

export type MutationLeaderCreateChapterArgs = {
  input: AdminCreateChapterInput
}

export type MutationLeaderCreateChapterMemberArgs = {
  input: AdminCreateChapterMemberInput
}

export type MutationLeaderCreateCompanyArgs = {
  input: AdminCreateCompanyInput
}

export type MutationLeaderCreateCompanyMemberArgs = {
  input: AdminCreateCompanyMemberInput
}

export type MutationLeaderCreateIndustryArgs = {
  input: AdminCreateIndustryInput
}

export type MutationLeaderCreateMeetingArgs = {
  input: AdminCreateMeetingInput
}

export type MutationLeaderCreateMeetingPresenceArgs = {
  input: AdminCreateMeetingPresenceInput
}

export type MutationLeaderCreateNotificationArgs = {
  input: AdminCreateNotificationInput
}

export type MutationLeaderCreatePowerHourArgs = {
  input: AdminCreatePowerHourInput
}

export type MutationLeaderCreateReferralArgs = {
  input: AdminCreateReferralInput
}

export type MutationLeaderCreateRegionArgs = {
  input: AdminCreateRegionInput
}

export type MutationLeaderCreateSubstituteArgs = {
  input: AdminCreateSubstituteInput
}

export type MutationLeaderCreateSubstituteGroupArgs = {
  input: AdminCreateSubstituteGroupInput
}

export type MutationLeaderCreateTerritoryArgs = {
  input: AdminCreateTerritoryInput
}

export type MutationLeaderCreateTestimonialArgs = {
  input: AdminCreateTestimonialInput
}

export type MutationLeaderCreateTransactionArgs = {
  input: AdminCreateTransactionInput
}

export type MutationLeaderCreateUploadArgs = {
  input: AdminCreateUploadInput
}

export type MutationLeaderCreateUserArgs = {
  input: AdminCreateUserInput
}

export type MutationLeaderDeleteAttendanceReminderArgs = {
  attendanceReminderId: Scalars['String']
}

export type MutationLeaderDeleteChapterArgs = {
  chapterId: Scalars['String']
}

export type MutationLeaderDeleteChapterMemberArgs = {
  chapterMemberId: Scalars['String']
}

export type MutationLeaderDeleteCompanyArgs = {
  companyId: Scalars['String']
}

export type MutationLeaderDeleteCompanyMemberArgs = {
  companyMemberId: Scalars['String']
}

export type MutationLeaderDeleteIndustryArgs = {
  industryId: Scalars['String']
}

export type MutationLeaderDeleteMeetingArgs = {
  meetingId: Scalars['String']
}

export type MutationLeaderDeleteMeetingPresenceArgs = {
  meetingPresenceId: Scalars['String']
}

export type MutationLeaderDeleteNotificationArgs = {
  notificationId: Scalars['String']
}

export type MutationLeaderDeletePowerHourArgs = {
  powerHourId: Scalars['String']
}

export type MutationLeaderDeleteReferralArgs = {
  referralId: Scalars['String']
}

export type MutationLeaderDeleteRegionArgs = {
  regionId: Scalars['String']
}

export type MutationLeaderDeleteSubstituteArgs = {
  substituteId: Scalars['String']
}

export type MutationLeaderDeleteSubstituteGroupArgs = {
  substituteGroupId: Scalars['String']
}

export type MutationLeaderDeleteTerritoryArgs = {
  territoryId: Scalars['String']
}

export type MutationLeaderDeleteTestimonialArgs = {
  testimonialId: Scalars['String']
}

export type MutationLeaderDeleteTransactionArgs = {
  transactionId: Scalars['String']
}

export type MutationLeaderDeleteUploadArgs = {
  uploadId: Scalars['String']
}

export type MutationLeaderDeleteUserArgs = {
  userId: Scalars['String']
}

export type MutationLeaderUpdateAttendanceReminderArgs = {
  attendanceReminderId: Scalars['String']
  input: AdminUpdateAttendanceReminderInput
}

export type MutationLeaderUpdateChapterArgs = {
  chapterId: Scalars['String']
  input: AdminUpdateChapterInput
}

export type MutationLeaderUpdateChapterMemberArgs = {
  chapterMemberId: Scalars['String']
  input: AdminUpdateChapterMemberInput
}

export type MutationLeaderUpdateCompanyArgs = {
  companyId: Scalars['String']
  input: AdminUpdateCompanyInput
}

export type MutationLeaderUpdateCompanyMemberArgs = {
  companyMemberId: Scalars['String']
  input: AdminUpdateCompanyMemberInput
}

export type MutationLeaderUpdateIndustryArgs = {
  industryId: Scalars['String']
  input: AdminUpdateIndustryInput
}

export type MutationLeaderUpdateMeetingArgs = {
  input: AdminUpdateMeetingInput
  meetingId: Scalars['String']
}

export type MutationLeaderUpdateMeetingPresenceArgs = {
  input: AdminUpdateMeetingPresenceInput
  meetingPresenceId: Scalars['String']
}

export type MutationLeaderUpdateNotificationArgs = {
  input: AdminUpdateNotificationInput
  notificationId: Scalars['String']
}

export type MutationLeaderUpdatePowerHourArgs = {
  input: AdminUpdatePowerHourInput
  powerHourId: Scalars['String']
}

export type MutationLeaderUpdateReferralArgs = {
  input: AdminUpdateReferralInput
  referralId: Scalars['String']
}

export type MutationLeaderUpdateRegionArgs = {
  input: AdminUpdateRegionInput
  regionId: Scalars['String']
}

export type MutationLeaderUpdateSubstituteArgs = {
  input: AdminUpdateSubstituteInput
  substituteId: Scalars['String']
}

export type MutationLeaderUpdateSubstituteGroupArgs = {
  input: AdminUpdateSubstituteGroupInput
  substituteGroupId: Scalars['String']
}

export type MutationLeaderUpdateTerritoryArgs = {
  input: AdminUpdateTerritoryInput
  territoryId: Scalars['String']
}

export type MutationLeaderUpdateTestimonialArgs = {
  input: AdminUpdateTestimonialInput
  testimonialId: Scalars['String']
}

export type MutationLeaderUpdateTransactionArgs = {
  input: AdminUpdateTransactionInput
  transactionId: Scalars['String']
}

export type MutationLeaderUpdateUploadArgs = {
  input: AdminUpdateUploadInput
  uploadId: Scalars['String']
}

export type MutationLeaderUpdateUserArgs = {
  input: AdminUpdateUserInput
  userId: Scalars['String']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput
}

export type MutationUserCreateAttendanceReminderArgs = {
  input: UserCreateAttendanceReminderInput
}

export type MutationUserCreateChapterArgs = {
  input: UserCreateChapterInput
}

export type MutationUserCreateChapterMemberArgs = {
  input: UserCreateChapterMemberInput
}

export type MutationUserCreateCompanyArgs = {
  input: UserCreateCompanyInput
}

export type MutationUserCreateCompanyMemberArgs = {
  input: UserCreateCompanyMemberInput
}

export type MutationUserCreateIndustryArgs = {
  input: UserCreateIndustryInput
}

export type MutationUserCreateMeetingArgs = {
  input: UserCreateMeetingInput
}

export type MutationUserCreateMeetingPresenceArgs = {
  input: UserCreateMeetingPresenceInput
}

export type MutationUserCreateNotificationArgs = {
  input: UserCreateNotificationInput
}

export type MutationUserCreatePowerHourArgs = {
  input: UserCreatePowerHourInput
}

export type MutationUserCreateReferralArgs = {
  input: UserCreateReferralInput
}

export type MutationUserCreateRegionArgs = {
  input: UserCreateRegionInput
}

export type MutationUserCreateSubstituteArgs = {
  input: UserCreateSubstituteInput
}

export type MutationUserCreateSubstituteGroupArgs = {
  input: UserCreateSubstituteGroupInput
}

export type MutationUserCreateTerritoryArgs = {
  input: UserCreateTerritoryInput
}

export type MutationUserCreateTestimonialArgs = {
  input: UserCreateTestimonialInput
}

export type MutationUserCreateTransactionArgs = {
  input: UserCreateTransactionInput
}

export type MutationUserCreateUploadArgs = {
  input: UserCreateUploadInput
}

export type MutationUserCreateUserArgs = {
  input: UserCreateUserInput
}

export type MutationUserDeleteAttendanceReminderArgs = {
  attendanceReminderId: Scalars['String']
}

export type MutationUserDeleteChapterArgs = {
  chapterId: Scalars['String']
}

export type MutationUserDeleteChapterMemberArgs = {
  chapterMemberId: Scalars['String']
}

export type MutationUserDeleteCompanyArgs = {
  companyId: Scalars['String']
}

export type MutationUserDeleteCompanyMemberArgs = {
  companyMemberId: Scalars['String']
}

export type MutationUserDeleteIndustryArgs = {
  industryId: Scalars['String']
}

export type MutationUserDeleteMeetingArgs = {
  meetingId: Scalars['String']
}

export type MutationUserDeleteMeetingPresenceArgs = {
  meetingPresenceId: Scalars['String']
}

export type MutationUserDeleteNotificationArgs = {
  notificationId: Scalars['String']
}

export type MutationUserDeletePowerHourArgs = {
  powerHourId: Scalars['String']
}

export type MutationUserDeleteReferralArgs = {
  referralId: Scalars['String']
}

export type MutationUserDeleteRegionArgs = {
  regionId: Scalars['String']
}

export type MutationUserDeleteSubstituteArgs = {
  substituteId: Scalars['String']
}

export type MutationUserDeleteSubstituteGroupArgs = {
  substituteGroupId: Scalars['String']
}

export type MutationUserDeleteTerritoryArgs = {
  territoryId: Scalars['String']
}

export type MutationUserDeleteTestimonialArgs = {
  testimonialId: Scalars['String']
}

export type MutationUserDeleteTransactionArgs = {
  transactionId: Scalars['String']
}

export type MutationUserDeleteUploadArgs = {
  uploadId: Scalars['String']
}

export type MutationUserDeleteUserArgs = {
  userId: Scalars['String']
}

export type MutationUserUpdateAttendanceReminderArgs = {
  attendanceReminderId: Scalars['String']
  input: UserUpdateAttendanceReminderInput
}

export type MutationUserUpdateChapterArgs = {
  chapterId: Scalars['String']
  input: UserUpdateChapterInput
}

export type MutationUserUpdateChapterMemberArgs = {
  chapterMemberId: Scalars['String']
  input: UserUpdateChapterMemberInput
}

export type MutationUserUpdateCompanyArgs = {
  companyId: Scalars['String']
  input: UserUpdateCompanyInput
}

export type MutationUserUpdateCompanyMemberArgs = {
  companyMemberId: Scalars['String']
  input: UserUpdateCompanyMemberInput
}

export type MutationUserUpdateIndustryArgs = {
  industryId: Scalars['String']
  input: UserUpdateIndustryInput
}

export type MutationUserUpdateMeetingArgs = {
  input: UserUpdateMeetingInput
  meetingId: Scalars['String']
}

export type MutationUserUpdateMeetingPresenceArgs = {
  input: UserUpdateMeetingPresenceInput
  meetingPresenceId: Scalars['String']
}

export type MutationUserUpdateNotificationArgs = {
  input: UserUpdateNotificationInput
  notificationId: Scalars['String']
}

export type MutationUserUpdatePowerHourArgs = {
  input: UserUpdatePowerHourInput
  powerHourId: Scalars['String']
}

export type MutationUserUpdateReferralArgs = {
  input: UserUpdateReferralInput
  referralId: Scalars['String']
}

export type MutationUserUpdateRegionArgs = {
  input: UserUpdateRegionInput
  regionId: Scalars['String']
}

export type MutationUserUpdateSubstituteArgs = {
  input: UserUpdateSubstituteInput
  substituteId: Scalars['String']
}

export type MutationUserUpdateSubstituteGroupArgs = {
  input: UserUpdateSubstituteGroupInput
  substituteGroupId: Scalars['String']
}

export type MutationUserUpdateTerritoryArgs = {
  input: UserUpdateTerritoryInput
  territoryId: Scalars['String']
}

export type MutationUserUpdateTestimonialArgs = {
  input: UserUpdateTestimonialInput
  testimonialId: Scalars['String']
}

export type MutationUserUpdateTransactionArgs = {
  input: UserUpdateTransactionInput
  transactionId: Scalars['String']
}

export type MutationUserUpdateUploadArgs = {
  input: UserUpdateUploadInput
  uploadId: Scalars['String']
}

export type MutationUserUpdateUserArgs = {
  input: UserUpdateUserInput
  userId: Scalars['String']
}

export type Notification = {
  __typename?: 'Notification'
  actor?: Maybe<User>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  read?: Maybe<Scalars['Boolean']>
  referenceId?: Maybe<Scalars['String']>
  referenceType?: Maybe<NotificationReferenceType>
  to?: Maybe<User>
  type?: Maybe<NotificationType>
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** Notification reference type */
export enum NotificationReferenceType {
  PowerHour = 'PowerHour',
  Referral = 'Referral',
  SharedContact = 'SharedContact',
  Substitute = 'Substitute',
  Testimonial = 'Testimonial',
}

/** Notification type */
export enum NotificationType {
  ContactInfoShared = 'ContactInfoShared',
  PowerHourAccepted = 'PowerHourAccepted',
  PowerHourCountered = 'PowerHourCountered',
  PowerHourDeclined = 'PowerHourDeclined',
  PowerHourReceived = 'PowerHourReceived',
  ReferralReceived = 'ReferralReceived',
  SubstituteAccepted = 'SubstituteAccepted',
  SubstituteRequested = 'SubstituteRequested',
  TestimonialReceived = 'TestimonialReceived',
}

export type PowerHour = {
  __typename?: 'PowerHour'
  createdAt?: Maybe<Scalars['DateTime']>
  date?: Maybe<Scalars['DateTime']>
  details?: Maybe<Scalars['String']>
  from?: Maybe<User>
  id?: Maybe<Scalars['String']>
  status?: Maybe<PowerHourStatus>
  time?: Maybe<Scalars['String']>
  to?: Maybe<User>
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** Power Hour Status */
export enum PowerHourStatus {
  Accepted = 'Accepted',
  Countered = 'Countered',
  Declined = 'Declined',
  Proposed = 'Proposed',
}

export type Query = {
  __typename?: 'Query'
  accountProfile?: Maybe<User>
  accountUsernameAvailable?: Maybe<Scalars['Boolean']>
  adminAttendanceReminder?: Maybe<AttendanceReminder>
  adminAttendanceReminders?: Maybe<Array<AttendanceReminder>>
  adminChapter?: Maybe<Chapter>
  adminChapterMember?: Maybe<ChapterMember>
  adminChapterMembers?: Maybe<Array<ChapterMember>>
  adminChapters?: Maybe<Array<Chapter>>
  adminCompanies?: Maybe<Array<Company>>
  adminCompany?: Maybe<Company>
  adminCompanyMember?: Maybe<CompanyMember>
  adminCompanyMembers?: Maybe<Array<CompanyMember>>
  adminCountAttendanceReminders?: Maybe<CorePaging>
  adminCountChapterMembers?: Maybe<CorePaging>
  adminCountChapters?: Maybe<CorePaging>
  adminCountCompanies?: Maybe<CorePaging>
  adminCountCompanyMembers?: Maybe<CorePaging>
  adminCountIndustries?: Maybe<CorePaging>
  adminCountMeetingPresences?: Maybe<CorePaging>
  adminCountMeetings?: Maybe<CorePaging>
  adminCountNotifications?: Maybe<CorePaging>
  adminCountPowerHours?: Maybe<CorePaging>
  adminCountReferrals?: Maybe<CorePaging>
  adminCountRegions?: Maybe<CorePaging>
  adminCountSubstituteGroups?: Maybe<CorePaging>
  adminCountSubstitutes?: Maybe<CorePaging>
  adminCountTerritories?: Maybe<CorePaging>
  adminCountTestimonials?: Maybe<CorePaging>
  adminCountTransactions?: Maybe<CorePaging>
  adminCountUploads?: Maybe<CorePaging>
  adminCountUsers?: Maybe<CorePaging>
  adminIndustries?: Maybe<Array<Industry>>
  adminIndustry?: Maybe<Industry>
  adminMeeting?: Maybe<Meeting>
  adminMeetingPresence?: Maybe<MeetingPresence>
  adminMeetingPresences?: Maybe<Array<MeetingPresence>>
  adminMeetings?: Maybe<Array<Meeting>>
  adminNotification?: Maybe<Notification>
  adminNotifications?: Maybe<Array<Notification>>
  adminPowerHour?: Maybe<PowerHour>
  adminPowerHours?: Maybe<Array<PowerHour>>
  adminReferral?: Maybe<Referral>
  adminReferrals?: Maybe<Array<Referral>>
  adminRegion?: Maybe<Region>
  adminRegions?: Maybe<Array<Region>>
  adminSubstitute?: Maybe<Substitute>
  adminSubstituteGroup?: Maybe<SubstituteGroup>
  adminSubstituteGroups?: Maybe<Array<SubstituteGroup>>
  adminSubstitutes?: Maybe<Array<Substitute>>
  adminTerritories?: Maybe<Array<Territory>>
  adminTerritory?: Maybe<Territory>
  adminTestimonial?: Maybe<Testimonial>
  adminTestimonials?: Maybe<Array<Testimonial>>
  adminTransaction?: Maybe<Transaction>
  adminTransactions?: Maybe<Array<Transaction>>
  adminUpload?: Maybe<Upload>
  adminUploads?: Maybe<Array<Upload>>
  adminUser?: Maybe<User>
  adminUsers?: Maybe<Array<User>>
  leaderAttendanceReminder?: Maybe<AttendanceReminder>
  leaderAttendanceReminders?: Maybe<Array<AttendanceReminder>>
  leaderChapter?: Maybe<Chapter>
  leaderChapterMember?: Maybe<ChapterMember>
  leaderChapterMembers?: Maybe<Array<ChapterMember>>
  leaderChapters?: Maybe<Array<Chapter>>
  leaderCompanies?: Maybe<Array<Company>>
  leaderCompany?: Maybe<Company>
  leaderCompanyMember?: Maybe<CompanyMember>
  leaderCompanyMembers?: Maybe<Array<CompanyMember>>
  leaderCountAttendanceReminders?: Maybe<CorePaging>
  leaderCountChapterMembers?: Maybe<CorePaging>
  leaderCountChapters?: Maybe<CorePaging>
  leaderCountCompanies?: Maybe<CorePaging>
  leaderCountCompanyMembers?: Maybe<CorePaging>
  leaderCountIndustries?: Maybe<CorePaging>
  leaderCountMeetingPresences?: Maybe<CorePaging>
  leaderCountMeetings?: Maybe<CorePaging>
  leaderCountNotifications?: Maybe<CorePaging>
  leaderCountPowerHours?: Maybe<CorePaging>
  leaderCountReferrals?: Maybe<CorePaging>
  leaderCountRegions?: Maybe<CorePaging>
  leaderCountSubstituteGroups?: Maybe<CorePaging>
  leaderCountSubstitutes?: Maybe<CorePaging>
  leaderCountTerritories?: Maybe<CorePaging>
  leaderCountTestimonials?: Maybe<CorePaging>
  leaderCountTransactions?: Maybe<CorePaging>
  leaderCountUploads?: Maybe<CorePaging>
  leaderCountUsers?: Maybe<CorePaging>
  leaderIndustries?: Maybe<Array<Industry>>
  leaderIndustry?: Maybe<Industry>
  leaderMeeting?: Maybe<Meeting>
  leaderMeetingPresence?: Maybe<MeetingPresence>
  leaderMeetingPresences?: Maybe<Array<MeetingPresence>>
  leaderMeetings?: Maybe<Array<Meeting>>
  leaderNotification?: Maybe<Notification>
  leaderNotifications?: Maybe<Array<Notification>>
  leaderPowerHour?: Maybe<PowerHour>
  leaderPowerHours?: Maybe<Array<PowerHour>>
  leaderReferral?: Maybe<Referral>
  leaderReferrals?: Maybe<Array<Referral>>
  leaderRegion?: Maybe<Region>
  leaderRegions?: Maybe<Array<Region>>
  leaderSubstitute?: Maybe<Substitute>
  leaderSubstituteGroup?: Maybe<SubstituteGroup>
  leaderSubstituteGroups?: Maybe<Array<SubstituteGroup>>
  leaderSubstitutes?: Maybe<Array<Substitute>>
  leaderTerritories?: Maybe<Array<Territory>>
  leaderTerritory?: Maybe<Territory>
  leaderTestimonial?: Maybe<Testimonial>
  leaderTestimonials?: Maybe<Array<Testimonial>>
  leaderTransaction?: Maybe<Transaction>
  leaderTransactions?: Maybe<Array<Transaction>>
  leaderUpload?: Maybe<Upload>
  leaderUploads?: Maybe<Array<Upload>>
  leaderUser?: Maybe<User>
  leaderUsers?: Maybe<Array<User>>
  me?: Maybe<User>
  uptime?: Maybe<Scalars['Float']>
  userAttendanceReminder?: Maybe<AttendanceReminder>
  userAttendanceReminders?: Maybe<Array<AttendanceReminder>>
  userChapter?: Maybe<Chapter>
  userChapterMember?: Maybe<ChapterMember>
  userChapterMembers?: Maybe<Array<ChapterMember>>
  userChapters?: Maybe<Array<Chapter>>
  userCompanies?: Maybe<Array<Company>>
  userCompany?: Maybe<Company>
  userCompanyMember?: Maybe<CompanyMember>
  userCompanyMembers?: Maybe<Array<CompanyMember>>
  userCountAttendanceReminders?: Maybe<CorePaging>
  userCountChapterMembers?: Maybe<CorePaging>
  userCountChapters?: Maybe<CorePaging>
  userCountCompanies?: Maybe<CorePaging>
  userCountCompanyMembers?: Maybe<CorePaging>
  userCountIndustries?: Maybe<CorePaging>
  userCountMeetingPresences?: Maybe<CorePaging>
  userCountMeetings?: Maybe<CorePaging>
  userCountNotifications?: Maybe<CorePaging>
  userCountPowerHours?: Maybe<CorePaging>
  userCountReferrals?: Maybe<CorePaging>
  userCountRegions?: Maybe<CorePaging>
  userCountSubstituteGroups?: Maybe<CorePaging>
  userCountSubstitutes?: Maybe<CorePaging>
  userCountTerritories?: Maybe<CorePaging>
  userCountTestimonials?: Maybe<CorePaging>
  userCountTransactions?: Maybe<CorePaging>
  userCountUploads?: Maybe<CorePaging>
  userCountUsers?: Maybe<CorePaging>
  userIndustries?: Maybe<Array<Industry>>
  userIndustry?: Maybe<Industry>
  userMeeting?: Maybe<Meeting>
  userMeetingPresence?: Maybe<MeetingPresence>
  userMeetingPresences?: Maybe<Array<MeetingPresence>>
  userMeetings?: Maybe<Array<Meeting>>
  userNotification?: Maybe<Notification>
  userNotifications?: Maybe<Array<Notification>>
  userPowerHour?: Maybe<PowerHour>
  userPowerHours?: Maybe<Array<PowerHour>>
  userReferral?: Maybe<Referral>
  userReferrals?: Maybe<Array<Referral>>
  userRegion?: Maybe<Region>
  userRegions?: Maybe<Array<Region>>
  userSubstitute?: Maybe<Substitute>
  userSubstituteGroup?: Maybe<SubstituteGroup>
  userSubstituteGroups?: Maybe<Array<SubstituteGroup>>
  userSubstitutes?: Maybe<Array<Substitute>>
  userTerritories?: Maybe<Array<Territory>>
  userTerritory?: Maybe<Territory>
  userTestimonial?: Maybe<Testimonial>
  userTestimonials?: Maybe<Array<Testimonial>>
  userTransaction?: Maybe<Transaction>
  userTransactions?: Maybe<Array<Transaction>>
  userUpload?: Maybe<Upload>
  userUploads?: Maybe<Array<Upload>>
  userUser?: Maybe<User>
  userUsers?: Maybe<Array<User>>
}

export type QueryAccountUsernameAvailableArgs = {
  username: Scalars['String']
}

export type QueryAdminAttendanceReminderArgs = {
  attendanceReminderId: Scalars['String']
}

export type QueryAdminAttendanceRemindersArgs = {
  input?: InputMaybe<AdminListAttendanceReminderInput>
}

export type QueryAdminChapterArgs = {
  chapterId: Scalars['String']
}

export type QueryAdminChapterMemberArgs = {
  chapterMemberId: Scalars['String']
}

export type QueryAdminChapterMembersArgs = {
  input?: InputMaybe<AdminListChapterMemberInput>
}

export type QueryAdminChaptersArgs = {
  input?: InputMaybe<AdminListChapterInput>
}

export type QueryAdminCompaniesArgs = {
  input?: InputMaybe<AdminListCompanyInput>
}

export type QueryAdminCompanyArgs = {
  companyId: Scalars['String']
}

export type QueryAdminCompanyMemberArgs = {
  companyMemberId: Scalars['String']
}

export type QueryAdminCompanyMembersArgs = {
  input?: InputMaybe<AdminListCompanyMemberInput>
}

export type QueryAdminCountAttendanceRemindersArgs = {
  input?: InputMaybe<AdminListAttendanceReminderInput>
}

export type QueryAdminCountChapterMembersArgs = {
  input?: InputMaybe<AdminListChapterMemberInput>
}

export type QueryAdminCountChaptersArgs = {
  input?: InputMaybe<AdminListChapterInput>
}

export type QueryAdminCountCompaniesArgs = {
  input?: InputMaybe<AdminListCompanyInput>
}

export type QueryAdminCountCompanyMembersArgs = {
  input?: InputMaybe<AdminListCompanyMemberInput>
}

export type QueryAdminCountIndustriesArgs = {
  input?: InputMaybe<AdminListIndustryInput>
}

export type QueryAdminCountMeetingPresencesArgs = {
  input?: InputMaybe<AdminListMeetingPresenceInput>
}

export type QueryAdminCountMeetingsArgs = {
  input?: InputMaybe<AdminListMeetingInput>
}

export type QueryAdminCountNotificationsArgs = {
  input?: InputMaybe<AdminListNotificationInput>
}

export type QueryAdminCountPowerHoursArgs = {
  input?: InputMaybe<AdminListPowerHourInput>
}

export type QueryAdminCountReferralsArgs = {
  input?: InputMaybe<AdminListReferralInput>
}

export type QueryAdminCountRegionsArgs = {
  input?: InputMaybe<AdminListRegionInput>
}

export type QueryAdminCountSubstituteGroupsArgs = {
  input?: InputMaybe<AdminListSubstituteGroupInput>
}

export type QueryAdminCountSubstitutesArgs = {
  input?: InputMaybe<AdminListSubstituteInput>
}

export type QueryAdminCountTerritoriesArgs = {
  input?: InputMaybe<AdminListTerritoryInput>
}

export type QueryAdminCountTestimonialsArgs = {
  input?: InputMaybe<AdminListTestimonialInput>
}

export type QueryAdminCountTransactionsArgs = {
  input?: InputMaybe<AdminListTransactionInput>
}

export type QueryAdminCountUploadsArgs = {
  input?: InputMaybe<AdminListUploadInput>
}

export type QueryAdminCountUsersArgs = {
  input?: InputMaybe<AdminListUserInput>
}

export type QueryAdminIndustriesArgs = {
  input?: InputMaybe<AdminListIndustryInput>
}

export type QueryAdminIndustryArgs = {
  industryId: Scalars['String']
}

export type QueryAdminMeetingArgs = {
  meetingId: Scalars['String']
}

export type QueryAdminMeetingPresenceArgs = {
  meetingPresenceId: Scalars['String']
}

export type QueryAdminMeetingPresencesArgs = {
  input?: InputMaybe<AdminListMeetingPresenceInput>
}

export type QueryAdminMeetingsArgs = {
  input?: InputMaybe<AdminListMeetingInput>
}

export type QueryAdminNotificationArgs = {
  notificationId: Scalars['String']
}

export type QueryAdminNotificationsArgs = {
  input?: InputMaybe<AdminListNotificationInput>
}

export type QueryAdminPowerHourArgs = {
  powerHourId: Scalars['String']
}

export type QueryAdminPowerHoursArgs = {
  input?: InputMaybe<AdminListPowerHourInput>
}

export type QueryAdminReferralArgs = {
  referralId: Scalars['String']
}

export type QueryAdminReferralsArgs = {
  input?: InputMaybe<AdminListReferralInput>
}

export type QueryAdminRegionArgs = {
  regionId: Scalars['String']
}

export type QueryAdminRegionsArgs = {
  input?: InputMaybe<AdminListRegionInput>
}

export type QueryAdminSubstituteArgs = {
  substituteId: Scalars['String']
}

export type QueryAdminSubstituteGroupArgs = {
  substituteGroupId: Scalars['String']
}

export type QueryAdminSubstituteGroupsArgs = {
  input?: InputMaybe<AdminListSubstituteGroupInput>
}

export type QueryAdminSubstitutesArgs = {
  input?: InputMaybe<AdminListSubstituteInput>
}

export type QueryAdminTerritoriesArgs = {
  input?: InputMaybe<AdminListTerritoryInput>
}

export type QueryAdminTerritoryArgs = {
  territoryId: Scalars['String']
}

export type QueryAdminTestimonialArgs = {
  testimonialId: Scalars['String']
}

export type QueryAdminTestimonialsArgs = {
  input?: InputMaybe<AdminListTestimonialInput>
}

export type QueryAdminTransactionArgs = {
  transactionId: Scalars['String']
}

export type QueryAdminTransactionsArgs = {
  input?: InputMaybe<AdminListTransactionInput>
}

export type QueryAdminUploadArgs = {
  uploadId: Scalars['String']
}

export type QueryAdminUploadsArgs = {
  input?: InputMaybe<AdminListUploadInput>
}

export type QueryAdminUserArgs = {
  userId: Scalars['String']
}

export type QueryAdminUsersArgs = {
  input?: InputMaybe<AdminListUserInput>
}

export type QueryLeaderAttendanceReminderArgs = {
  attendanceReminderId: Scalars['String']
}

export type QueryLeaderAttendanceRemindersArgs = {
  input?: InputMaybe<AdminListAttendanceReminderInput>
}

export type QueryLeaderChapterArgs = {
  chapterId: Scalars['String']
}

export type QueryLeaderChapterMemberArgs = {
  chapterMemberId: Scalars['String']
}

export type QueryLeaderChapterMembersArgs = {
  input?: InputMaybe<AdminListChapterMemberInput>
}

export type QueryLeaderChaptersArgs = {
  input?: InputMaybe<AdminListChapterInput>
}

export type QueryLeaderCompaniesArgs = {
  input?: InputMaybe<AdminListCompanyInput>
}

export type QueryLeaderCompanyArgs = {
  companyId: Scalars['String']
}

export type QueryLeaderCompanyMemberArgs = {
  companyMemberId: Scalars['String']
}

export type QueryLeaderCompanyMembersArgs = {
  input?: InputMaybe<AdminListCompanyMemberInput>
}

export type QueryLeaderCountAttendanceRemindersArgs = {
  input?: InputMaybe<AdminListAttendanceReminderInput>
}

export type QueryLeaderCountChapterMembersArgs = {
  input?: InputMaybe<AdminListChapterMemberInput>
}

export type QueryLeaderCountChaptersArgs = {
  input?: InputMaybe<AdminListChapterInput>
}

export type QueryLeaderCountCompaniesArgs = {
  input?: InputMaybe<AdminListCompanyInput>
}

export type QueryLeaderCountCompanyMembersArgs = {
  input?: InputMaybe<AdminListCompanyMemberInput>
}

export type QueryLeaderCountIndustriesArgs = {
  input?: InputMaybe<AdminListIndustryInput>
}

export type QueryLeaderCountMeetingPresencesArgs = {
  input?: InputMaybe<AdminListMeetingPresenceInput>
}

export type QueryLeaderCountMeetingsArgs = {
  input?: InputMaybe<AdminListMeetingInput>
}

export type QueryLeaderCountNotificationsArgs = {
  input?: InputMaybe<AdminListNotificationInput>
}

export type QueryLeaderCountPowerHoursArgs = {
  input?: InputMaybe<AdminListPowerHourInput>
}

export type QueryLeaderCountReferralsArgs = {
  input?: InputMaybe<AdminListReferralInput>
}

export type QueryLeaderCountRegionsArgs = {
  input?: InputMaybe<AdminListRegionInput>
}

export type QueryLeaderCountSubstituteGroupsArgs = {
  input?: InputMaybe<AdminListSubstituteGroupInput>
}

export type QueryLeaderCountSubstitutesArgs = {
  input?: InputMaybe<AdminListSubstituteInput>
}

export type QueryLeaderCountTerritoriesArgs = {
  input?: InputMaybe<AdminListTerritoryInput>
}

export type QueryLeaderCountTestimonialsArgs = {
  input?: InputMaybe<AdminListTestimonialInput>
}

export type QueryLeaderCountTransactionsArgs = {
  input?: InputMaybe<AdminListTransactionInput>
}

export type QueryLeaderCountUploadsArgs = {
  input?: InputMaybe<AdminListUploadInput>
}

export type QueryLeaderCountUsersArgs = {
  input?: InputMaybe<AdminListUserInput>
}

export type QueryLeaderIndustriesArgs = {
  input?: InputMaybe<AdminListIndustryInput>
}

export type QueryLeaderIndustryArgs = {
  industryId: Scalars['String']
}

export type QueryLeaderMeetingArgs = {
  meetingId: Scalars['String']
}

export type QueryLeaderMeetingPresenceArgs = {
  meetingPresenceId: Scalars['String']
}

export type QueryLeaderMeetingPresencesArgs = {
  input?: InputMaybe<AdminListMeetingPresenceInput>
}

export type QueryLeaderMeetingsArgs = {
  input?: InputMaybe<AdminListMeetingInput>
}

export type QueryLeaderNotificationArgs = {
  notificationId: Scalars['String']
}

export type QueryLeaderNotificationsArgs = {
  input?: InputMaybe<AdminListNotificationInput>
}

export type QueryLeaderPowerHourArgs = {
  powerHourId: Scalars['String']
}

export type QueryLeaderPowerHoursArgs = {
  input?: InputMaybe<AdminListPowerHourInput>
}

export type QueryLeaderReferralArgs = {
  referralId: Scalars['String']
}

export type QueryLeaderReferralsArgs = {
  input?: InputMaybe<AdminListReferralInput>
}

export type QueryLeaderRegionArgs = {
  regionId: Scalars['String']
}

export type QueryLeaderRegionsArgs = {
  input?: InputMaybe<AdminListRegionInput>
}

export type QueryLeaderSubstituteArgs = {
  substituteId: Scalars['String']
}

export type QueryLeaderSubstituteGroupArgs = {
  substituteGroupId: Scalars['String']
}

export type QueryLeaderSubstituteGroupsArgs = {
  input?: InputMaybe<AdminListSubstituteGroupInput>
}

export type QueryLeaderSubstitutesArgs = {
  input?: InputMaybe<AdminListSubstituteInput>
}

export type QueryLeaderTerritoriesArgs = {
  input?: InputMaybe<AdminListTerritoryInput>
}

export type QueryLeaderTerritoryArgs = {
  territoryId: Scalars['String']
}

export type QueryLeaderTestimonialArgs = {
  testimonialId: Scalars['String']
}

export type QueryLeaderTestimonialsArgs = {
  input?: InputMaybe<AdminListTestimonialInput>
}

export type QueryLeaderTransactionArgs = {
  transactionId: Scalars['String']
}

export type QueryLeaderTransactionsArgs = {
  input?: InputMaybe<AdminListTransactionInput>
}

export type QueryLeaderUploadArgs = {
  uploadId: Scalars['String']
}

export type QueryLeaderUploadsArgs = {
  input?: InputMaybe<AdminListUploadInput>
}

export type QueryLeaderUserArgs = {
  userId: Scalars['String']
}

export type QueryLeaderUsersArgs = {
  input?: InputMaybe<AdminListUserInput>
}

export type QueryUserAttendanceReminderArgs = {
  attendanceReminderId: Scalars['String']
}

export type QueryUserAttendanceRemindersArgs = {
  input?: InputMaybe<UserListAttendanceReminderInput>
}

export type QueryUserChapterArgs = {
  chapterId: Scalars['String']
}

export type QueryUserChapterMemberArgs = {
  chapterMemberId: Scalars['String']
}

export type QueryUserChapterMembersArgs = {
  input?: InputMaybe<UserListChapterMemberInput>
}

export type QueryUserChaptersArgs = {
  input?: InputMaybe<UserListChapterInput>
}

export type QueryUserCompaniesArgs = {
  input?: InputMaybe<UserListCompanyInput>
}

export type QueryUserCompanyArgs = {
  companyId: Scalars['String']
}

export type QueryUserCompanyMemberArgs = {
  companyMemberId: Scalars['String']
}

export type QueryUserCompanyMembersArgs = {
  input?: InputMaybe<UserListCompanyMemberInput>
}

export type QueryUserCountAttendanceRemindersArgs = {
  input?: InputMaybe<UserListAttendanceReminderInput>
}

export type QueryUserCountChapterMembersArgs = {
  input?: InputMaybe<UserListChapterMemberInput>
}

export type QueryUserCountChaptersArgs = {
  input?: InputMaybe<UserListChapterInput>
}

export type QueryUserCountCompaniesArgs = {
  input?: InputMaybe<UserListCompanyInput>
}

export type QueryUserCountCompanyMembersArgs = {
  input?: InputMaybe<UserListCompanyMemberInput>
}

export type QueryUserCountIndustriesArgs = {
  input?: InputMaybe<UserListIndustryInput>
}

export type QueryUserCountMeetingPresencesArgs = {
  input?: InputMaybe<UserListMeetingPresenceInput>
}

export type QueryUserCountMeetingsArgs = {
  input?: InputMaybe<UserListMeetingInput>
}

export type QueryUserCountNotificationsArgs = {
  input?: InputMaybe<UserListNotificationInput>
}

export type QueryUserCountPowerHoursArgs = {
  input?: InputMaybe<UserListPowerHourInput>
}

export type QueryUserCountReferralsArgs = {
  input?: InputMaybe<UserListReferralInput>
}

export type QueryUserCountRegionsArgs = {
  input?: InputMaybe<UserListRegionInput>
}

export type QueryUserCountSubstituteGroupsArgs = {
  input?: InputMaybe<UserListSubstituteGroupInput>
}

export type QueryUserCountSubstitutesArgs = {
  input?: InputMaybe<UserListSubstituteInput>
}

export type QueryUserCountTerritoriesArgs = {
  input?: InputMaybe<UserListTerritoryInput>
}

export type QueryUserCountTestimonialsArgs = {
  input?: InputMaybe<UserListTestimonialInput>
}

export type QueryUserCountTransactionsArgs = {
  input?: InputMaybe<UserListTransactionInput>
}

export type QueryUserCountUploadsArgs = {
  input?: InputMaybe<UserListUploadInput>
}

export type QueryUserCountUsersArgs = {
  input?: InputMaybe<UserListUserInput>
}

export type QueryUserIndustriesArgs = {
  input?: InputMaybe<UserListIndustryInput>
}

export type QueryUserIndustryArgs = {
  industryId: Scalars['String']
}

export type QueryUserMeetingArgs = {
  meetingId: Scalars['String']
}

export type QueryUserMeetingPresenceArgs = {
  meetingPresenceId: Scalars['String']
}

export type QueryUserMeetingPresencesArgs = {
  input?: InputMaybe<UserListMeetingPresenceInput>
}

export type QueryUserMeetingsArgs = {
  input?: InputMaybe<UserListMeetingInput>
}

export type QueryUserNotificationArgs = {
  notificationId: Scalars['String']
}

export type QueryUserNotificationsArgs = {
  input?: InputMaybe<UserListNotificationInput>
}

export type QueryUserPowerHourArgs = {
  powerHourId: Scalars['String']
}

export type QueryUserPowerHoursArgs = {
  input?: InputMaybe<UserListPowerHourInput>
}

export type QueryUserReferralArgs = {
  referralId: Scalars['String']
}

export type QueryUserReferralsArgs = {
  input?: InputMaybe<UserListReferralInput>
}

export type QueryUserRegionArgs = {
  regionId: Scalars['String']
}

export type QueryUserRegionsArgs = {
  input?: InputMaybe<UserListRegionInput>
}

export type QueryUserSubstituteArgs = {
  substituteId: Scalars['String']
}

export type QueryUserSubstituteGroupArgs = {
  substituteGroupId: Scalars['String']
}

export type QueryUserSubstituteGroupsArgs = {
  input?: InputMaybe<UserListSubstituteGroupInput>
}

export type QueryUserSubstitutesArgs = {
  input?: InputMaybe<UserListSubstituteInput>
}

export type QueryUserTerritoriesArgs = {
  input?: InputMaybe<UserListTerritoryInput>
}

export type QueryUserTerritoryArgs = {
  territoryId: Scalars['String']
}

export type QueryUserTestimonialArgs = {
  testimonialId: Scalars['String']
}

export type QueryUserTestimonialsArgs = {
  input?: InputMaybe<UserListTestimonialInput>
}

export type QueryUserTransactionArgs = {
  transactionId: Scalars['String']
}

export type QueryUserTransactionsArgs = {
  input?: InputMaybe<UserListTransactionInput>
}

export type QueryUserUploadArgs = {
  uploadId: Scalars['String']
}

export type QueryUserUploadsArgs = {
  input?: InputMaybe<UserListUploadInput>
}

export type QueryUserUserArgs = {
  userId: Scalars['String']
}

export type QueryUserUsersArgs = {
  input?: InputMaybe<UserListUserInput>
}

export type Referral = {
  __typename?: 'Referral'
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  from?: Maybe<User>
  fromChapter?: Maybe<Chapter>
  fromIndustry?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  rating?: Maybe<ReferralRating>
  referralDate?: Maybe<Scalars['DateTime']>
  sentBy?: Maybe<User>
  to?: Maybe<User>
  toChapter?: Maybe<Chapter>
  toIndustry?: Maybe<Scalars['String']>
  transactions?: Maybe<Array<Transaction>>
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** Referral rating */
export enum ReferralRating {
  Cold = 'Cold',
  Hot = 'Hot',
  Warm = 'Warm',
}

export type Region = {
  __typename?: 'Region'
  chapters?: Maybe<Array<Chapter>>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  manager?: Maybe<User>
  name?: Maybe<Scalars['String']>
  territory?: Maybe<Territory>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type RegisterInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  password: Scalars['String']
  phone?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

export type ResetPasswordInput = {
  password: Scalars['String']
  token: Scalars['String']
}

/** User Role */
export enum Role {
  Admin = 'Admin',
  Guest = 'Guest',
  User = 'User',
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
}

export type SubscriptionIntercomSubArgs = {
  scope?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

export type Substitute = {
  __typename?: 'Substitute'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  invited?: Maybe<Array<User>>
  meeting?: Maybe<Meeting>
  sentBy?: Maybe<User>
  substitute?: Maybe<User>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type SubstituteGroup = {
  __typename?: 'SubstituteGroup'
  chapters?: Maybe<Array<Chapter>>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type Territory = {
  __typename?: 'Territory'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  manager?: Maybe<User>
  name?: Maybe<Scalars['String']>
  regions?: Maybe<Array<Maybe<Region>>>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type Testimonial = {
  __typename?: 'Testimonial'
  createdAt?: Maybe<Scalars['DateTime']>
  from?: Maybe<User>
  id?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  to?: Maybe<User>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type Transaction = {
  __typename?: 'Transaction'
  amount?: Maybe<Scalars['Float']>
  chapter?: Maybe<Chapter>
  createdAt?: Maybe<Scalars['DateTime']>
  date?: Maybe<Scalars['DateTime']>
  enteredBy?: Maybe<Scalars['String']>
  enteredOn?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  industry?: Maybe<Scalars['String']>
  referral?: Maybe<Referral>
  state?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user?: Maybe<User>
}

export type Upload = {
  __typename?: 'Upload'
  chapter?: Maybe<Chapter>
  createdAt?: Maybe<Scalars['DateTime']>
  format?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  publicId?: Maybe<Scalars['String']>
  resourceType?: Maybe<Scalars['String']>
  secureUrl?: Maybe<Scalars['String']>
  signature?: Maybe<Scalars['String']>
  thumbnailUrl?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  url?: Maybe<Scalars['String']>
  user?: Maybe<User>
}

export type User = {
  __typename?: 'User'
  address?: Maybe<Scalars['String']>
  address2?: Maybe<Scalars['String']>
  applicationDate?: Maybe<Scalars['DateTime']>
  avatar?: Maybe<Upload>
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  cell?: Maybe<Scalars['String']>
  chapter?: Maybe<ChapterMember>
  chapterTitle?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  comments?: Maybe<Scalars['String']>
  companies?: Maybe<Array<Maybe<Company>>>
  company?: Maybe<Scalars['String']>
  confirmEmailExpires?: Maybe<Scalars['DateTime']>
  confirmEmailToken?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  developer?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  emailConfirmed?: Maybe<Scalars['Boolean']>
  facebook?: Maybe<Scalars['String']>
  fax?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  hear?: Maybe<Scalars['String']>
  hearOther?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  inactiveDate?: Maybe<Scalars['DateTime']>
  industry?: Maybe<Scalars['String']>
  infusionsoftId?: Maybe<Scalars['Int']>
  inquiryDate?: Maybe<Scalars['DateTime']>
  instagram?: Maybe<Scalars['String']>
  internalComments?: Maybe<Scalars['String']>
  isLeader?: Maybe<Scalars['Boolean']>
  lastName?: Maybe<Scalars['String']>
  lastSeen?: Maybe<Scalars['DateTime']>
  launchComplete?: Maybe<Scalars['Boolean']>
  linkedin?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  membershipDate?: Maybe<Scalars['DateTime']>
  mentorName?: Maybe<Scalars['String']>
  merchantCircle?: Maybe<Scalars['String']>
  multipleBusinesses?: Maybe<Scalars['Boolean']>
  multipleLocations?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  notificationsReceived?: Maybe<Array<Maybe<Notification>>>
  notificationsSent?: Maybe<Array<Maybe<Notification>>>
  notifyByEmail?: Maybe<Scalars['Boolean']>
  notifyByMobile?: Maybe<Scalars['Boolean']>
  notifyBySMS?: Maybe<Scalars['Boolean']>
  notifyByWeb?: Maybe<Scalars['Boolean']>
  numberOfEmployees?: Maybe<Scalars['Int']>
  onlineStatus?: Maybe<UserOnlineStatus>
  organizer?: Maybe<Scalars['Int']>
  otherBusinesses?: Maybe<Scalars['String']>
  otherLocations?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  passwordResetExpires?: Maybe<Scalars['DateTime']>
  passwordResetToken?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  postcode?: Maybe<Scalars['String']>
  powerHoursFrom?: Maybe<Array<Maybe<PowerHour>>>
  powerHoursTo?: Maybe<Array<Maybe<PowerHour>>>
  presence?: Maybe<MeetingPresence>
  promoter?: Maybe<Scalars['Int']>
  recognized?: Maybe<Scalars['Int']>
  referralsFrom?: Maybe<Array<Maybe<Referral>>>
  referralsSent?: Maybe<Array<Maybe<Referral>>>
  referralsTo?: Maybe<Array<Maybe<Referral>>>
  regionManaged?: Maybe<Region>
  reminderSentBy?: Maybe<Array<Maybe<AttendanceReminder>>>
  reminderSentTo?: Maybe<Array<Maybe<AttendanceReminder>>>
  renewalDate?: Maybe<Scalars['DateTime']>
  role?: Maybe<Role>
  salesAgentName?: Maybe<Scalars['String']>
  showGravatar?: Maybe<Scalars['Boolean']>
  state?: Maybe<Scalars['String']>
  status?: Maybe<UserStatus>
  strategizer?: Maybe<Scalars['Int']>
  substitute?: Maybe<Scalars['Boolean']>
  substituteAccepted?: Maybe<Array<Maybe<Substitute>>>
  substituteInvited?: Maybe<Array<Maybe<Substitute>>>
  substitutesSentBy?: Maybe<Array<Maybe<Substitute>>>
  tagline?: Maybe<Scalars['String']>
  terminatedByName?: Maybe<Scalars['String']>
  terminationComments?: Maybe<Scalars['String']>
  terminationDate?: Maybe<Scalars['DateTime']>
  terminationReason?: Maybe<Scalars['String']>
  territoryManaged?: Maybe<Territory>
  testimonialsFrom?: Maybe<Array<Maybe<Testimonial>>>
  testimonialsto?: Maybe<Array<Maybe<Testimonial>>>
  thinker?: Maybe<Scalars['Int']>
  timeInIndustry?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  transactions?: Maybe<Array<Transaction>>
  transferDate?: Maybe<Scalars['DateTime']>
  twitter?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
  vet?: Maybe<Scalars['Boolean']>
  website?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
}

export type UserCreateAttendanceReminderInput = {
  name: Scalars['String']
}

export type UserCreateChapterInput = {
  name: Scalars['String']
}

export type UserCreateChapterMemberInput = {
  isMentor?: InputMaybe<Scalars['Boolean']>
  isTrainer?: InputMaybe<Scalars['Boolean']>
  role?: InputMaybe<ChapterMemberRole>
}

export type UserCreateCompanyInput = {
  name: Scalars['String']
}

export type UserCreateCompanyMemberInput = {
  location: Scalars['String']
}

export type UserCreateIndustryInput = {
  name: Scalars['String']
}

export type UserCreateMeetingInput = {
  date: Scalars['DateTime']
}

export type UserCreateMeetingPresenceInput = {
  date: Scalars['String']
}

export type UserCreateNotificationInput = {
  message: Scalars['String']
}

export type UserCreatePowerHourInput = {
  details: Scalars['String']
}

export type UserCreateReferralInput = {
  firstName: Scalars['String']
}

export type UserCreateRegionInput = {
  name: Scalars['String']
}

export type UserCreateSubstituteGroupInput = {
  name: Scalars['String']
}

export type UserCreateSubstituteInput = {
  name: Scalars['String']
}

export type UserCreateTerritoryInput = {
  name: Scalars['String']
}

export type UserCreateTestimonialInput = {
  text: Scalars['String']
}

export type UserCreateTransactionInput = {
  text: Scalars['String']
}

export type UserCreateUploadInput = {
  originalFilename: Scalars['String']
}

export type UserCreateUserInput = {
  firstName: Scalars['String']
}

export type UserListAttendanceReminderInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListChapterInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListChapterMemberInput = {
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListCompanyInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListCompanyMemberInput = {
  location?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListIndustryInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListMeetingInput = {
  date?: InputMaybe<Scalars['DateTime']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListMeetingPresenceInput = {
  date?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListNotificationInput = {
  message?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListPowerHourInput = {
  details?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListReferralInput = {
  firstName?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListRegionInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListSubstituteGroupInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListSubstituteInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListTerritoryInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListTestimonialInput = {
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
}

export type UserListTransactionInput = {
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
}

export type UserListUploadInput = {
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  originalFilename?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListUserInput = {
  firstName?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

/** User online status */
export enum UserOnlineStatus {
  Away = 'Away',
  Offline = 'Offline',
  Online = 'Online',
}

/** User status */
export enum UserStatus {
  Active = 'Active',
  Banned = 'Banned',
  Guest = 'Guest',
  Inactive = 'Inactive',
  Pending = 'Pending',
  Terminated = 'Terminated',
  Unknown = 'Unknown',
  Withdrawn = 'Withdrawn',
}

export type UserToken = {
  __typename?: 'UserToken'
  /** JWT Bearer token */
  token: Scalars['String']
  user: User
}

export type UserUpdateAttendanceReminderInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateChapterInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateChapterMemberInput = {
  isMentor?: InputMaybe<Scalars['Boolean']>
  isTrainer?: InputMaybe<Scalars['Boolean']>
  role?: InputMaybe<ChapterMemberRole>
}

export type UserUpdateCompanyInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateCompanyMemberInput = {
  location?: InputMaybe<Scalars['String']>
}

export type UserUpdateIndustryInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateMeetingInput = {
  date?: InputMaybe<Scalars['DateTime']>
}

export type UserUpdateMeetingPresenceInput = {
  date?: InputMaybe<Scalars['String']>
}

export type UserUpdateNotificationInput = {
  message?: InputMaybe<Scalars['String']>
}

export type UserUpdatePowerHourInput = {
  details?: InputMaybe<Scalars['String']>
}

export type UserUpdateReferralInput = {
  firstName?: InputMaybe<Scalars['String']>
}

export type UserUpdateRegionInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateSubstituteGroupInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateSubstituteInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateTerritoryInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateTestimonialInput = {
  text?: InputMaybe<Scalars['String']>
}

export type UserUpdateTransactionInput = {
  text?: InputMaybe<Scalars['String']>
}

export type UserUpdateUploadInput = {
  originalFilename?: InputMaybe<Scalars['String']>
}

export type UserUpdateUserInput = {
  firstName?: InputMaybe<Scalars['String']>
}

export type AdminAttendanceReminderDetailsFragment = {
  __typename?: 'AttendanceReminder'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  name?: string | null
  chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
  sentBy?: {
    __typename?: 'User'
    id?: string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
  } | null
  sentTo?: {
    __typename?: 'User'
    id?: string | null
    name?: string | null
    firstName?: string | null
    lastName?: string | null
  } | null
}

export type AdminCreateAttendanceReminderMutationVariables = Exact<{
  input: AdminCreateAttendanceReminderInput
}>

export type AdminCreateAttendanceReminderMutation = {
  __typename?: 'Mutation'
  createAttendanceReminder?: {
    __typename?: 'AttendanceReminder'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    sentBy?: {
      __typename?: 'User'
      id?: string | null
      name?: string | null
      firstName?: string | null
      lastName?: string | null
    } | null
    sentTo?: {
      __typename?: 'User'
      id?: string | null
      name?: string | null
      firstName?: string | null
      lastName?: string | null
    } | null
  } | null
}

export type AdminDeleteAttendanceReminderMutationVariables = Exact<{
  attendanceReminderId: Scalars['String']
}>

export type AdminDeleteAttendanceReminderMutation = {
  __typename?: 'Mutation'
  deleteAttendanceReminder?: { __typename?: 'AttendanceReminder'; id?: string | null } | null
}

export type AdminUpdateAttendanceReminderMutationVariables = Exact<{
  attendanceReminderId: Scalars['String']
  input: AdminUpdateAttendanceReminderInput
}>

export type AdminUpdateAttendanceReminderMutation = {
  __typename?: 'Mutation'
  updateAttendanceReminder?: {
    __typename?: 'AttendanceReminder'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    sentBy?: {
      __typename?: 'User'
      id?: string | null
      name?: string | null
      firstName?: string | null
      lastName?: string | null
    } | null
    sentTo?: {
      __typename?: 'User'
      id?: string | null
      name?: string | null
      firstName?: string | null
      lastName?: string | null
    } | null
  } | null
}

export type AdminAttendanceReminderQueryVariables = Exact<{
  attendanceReminderId: Scalars['String']
}>

export type AdminAttendanceReminderQuery = {
  __typename?: 'Query'
  attendanceReminder?: {
    __typename?: 'AttendanceReminder'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    sentBy?: {
      __typename?: 'User'
      id?: string | null
      name?: string | null
      firstName?: string | null
      lastName?: string | null
    } | null
    sentTo?: {
      __typename?: 'User'
      id?: string | null
      name?: string | null
      firstName?: string | null
      lastName?: string | null
    } | null
  } | null
}

export type AdminAttendanceRemindersQueryVariables = Exact<{
  input?: InputMaybe<AdminListAttendanceReminderInput>
}>

export type AdminAttendanceRemindersQuery = {
  __typename?: 'Query'
  attendanceReminders?: Array<{
    __typename?: 'AttendanceReminder'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    sentBy?: {
      __typename?: 'User'
      id?: string | null
      name?: string | null
      firstName?: string | null
      lastName?: string | null
    } | null
    sentTo?: {
      __typename?: 'User'
      id?: string | null
      name?: string | null
      firstName?: string | null
      lastName?: string | null
    } | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminAttendanceReminderPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListAttendanceReminderInput>
}>

export type AdminAttendanceReminderPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminChapterMemberDetailsFragment = {
  __typename?: 'ChapterMember'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  isMentor?: boolean | null
  isTrainer?: boolean | null
  role?: ChapterMemberRole | null
  name?: string | null
  chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
  member?: {
    __typename?: 'User'
    id?: string | null
    firstName?: string | null
    lastName?: string | null
    name?: string | null
  } | null
}

export type AdminCreateChapterMemberMutationVariables = Exact<{
  input: AdminCreateChapterMemberInput
}>

export type AdminCreateChapterMemberMutation = {
  __typename?: 'Mutation'
  createChapterMember?: {
    __typename?: 'ChapterMember'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    isMentor?: boolean | null
    isTrainer?: boolean | null
    role?: ChapterMemberRole | null
    name?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    member?: {
      __typename?: 'User'
      id?: string | null
      firstName?: string | null
      lastName?: string | null
      name?: string | null
    } | null
  } | null
}

export type AdminDeleteChapterMemberMutationVariables = Exact<{
  chapterMemberId: Scalars['String']
}>

export type AdminDeleteChapterMemberMutation = {
  __typename?: 'Mutation'
  deleteChapterMember?: { __typename?: 'ChapterMember'; id?: string | null } | null
}

export type AdminUpdateChapterMemberMutationVariables = Exact<{
  chapterMemberId: Scalars['String']
  input: AdminUpdateChapterMemberInput
}>

export type AdminUpdateChapterMemberMutation = {
  __typename?: 'Mutation'
  updateChapterMember?: {
    __typename?: 'ChapterMember'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    isMentor?: boolean | null
    isTrainer?: boolean | null
    role?: ChapterMemberRole | null
    name?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    member?: {
      __typename?: 'User'
      id?: string | null
      firstName?: string | null
      lastName?: string | null
      name?: string | null
    } | null
  } | null
}

export type AdminChapterMemberQueryVariables = Exact<{
  chapterMemberId: Scalars['String']
}>

export type AdminChapterMemberQuery = {
  __typename?: 'Query'
  chapterMember?: {
    __typename?: 'ChapterMember'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    isMentor?: boolean | null
    isTrainer?: boolean | null
    role?: ChapterMemberRole | null
    name?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    member?: {
      __typename?: 'User'
      id?: string | null
      firstName?: string | null
      lastName?: string | null
      name?: string | null
    } | null
  } | null
}

export type AdminChapterMembersQueryVariables = Exact<{
  input?: InputMaybe<AdminListChapterMemberInput>
}>

export type AdminChapterMembersQuery = {
  __typename?: 'Query'
  chapterMembers?: Array<{
    __typename?: 'ChapterMember'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    isMentor?: boolean | null
    isTrainer?: boolean | null
    role?: ChapterMemberRole | null
    name?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    member?: {
      __typename?: 'User'
      id?: string | null
      firstName?: string | null
      lastName?: string | null
      name?: string | null
    } | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminChapterMemberPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListChapterMemberInput>
}>

export type AdminChapterMemberPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminChapterDetailsFragment = {
  __typename?: 'Chapter'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  establishedDate?: any | null
  name?: string | null
  description?: string | null
  avatarEmail?: string | null
  avatarUrl?: string | null
  latitude?: string | null
  longitude?: string | null
  city?: string | null
  state?: string | null
  facebook?: string | null
  meetingDay?: DayOfWeek | null
  meetingTime?: string | null
  meetingDetails?: string | null
  status?: ChapterStatus | null
  meetings?: Array<{ __typename?: 'Meeting'; id?: string | null }> | null
  members?: Array<{ __typename?: 'ChapterMember'; id?: string | null }> | null
  transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
  referralsFrom?: Array<{ __typename?: 'Referral'; id?: string | null }> | null
  referralsTo?: Array<{ __typename?: 'Referral'; id?: string | null }> | null
  substituteGroup?: { __typename?: 'SubstituteGroup'; id?: string | null } | null
  region?: { __typename?: 'Region'; id?: string | null; name?: string | null } | null
  attendanceReminders?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null }> | null
}

export type AdminCreateChapterMutationVariables = Exact<{
  input: AdminCreateChapterInput
}>

export type AdminCreateChapterMutation = {
  __typename?: 'Mutation'
  createChapter?: {
    __typename?: 'Chapter'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    establishedDate?: any | null
    name?: string | null
    description?: string | null
    avatarEmail?: string | null
    avatarUrl?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    state?: string | null
    facebook?: string | null
    meetingDay?: DayOfWeek | null
    meetingTime?: string | null
    meetingDetails?: string | null
    status?: ChapterStatus | null
    meetings?: Array<{ __typename?: 'Meeting'; id?: string | null }> | null
    members?: Array<{ __typename?: 'ChapterMember'; id?: string | null }> | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
    referralsFrom?: Array<{ __typename?: 'Referral'; id?: string | null }> | null
    referralsTo?: Array<{ __typename?: 'Referral'; id?: string | null }> | null
    substituteGroup?: { __typename?: 'SubstituteGroup'; id?: string | null } | null
    region?: { __typename?: 'Region'; id?: string | null; name?: string | null } | null
    attendanceReminders?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null }> | null
  } | null
}

export type AdminDeleteChapterMutationVariables = Exact<{
  chapterId: Scalars['String']
}>

export type AdminDeleteChapterMutation = {
  __typename?: 'Mutation'
  deleteChapter?: { __typename?: 'Chapter'; id?: string | null } | null
}

export type AdminUpdateChapterMutationVariables = Exact<{
  chapterId: Scalars['String']
  input: AdminUpdateChapterInput
}>

export type AdminUpdateChapterMutation = {
  __typename?: 'Mutation'
  updateChapter?: {
    __typename?: 'Chapter'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    establishedDate?: any | null
    name?: string | null
    description?: string | null
    avatarEmail?: string | null
    avatarUrl?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    state?: string | null
    facebook?: string | null
    meetingDay?: DayOfWeek | null
    meetingTime?: string | null
    meetingDetails?: string | null
    status?: ChapterStatus | null
    meetings?: Array<{ __typename?: 'Meeting'; id?: string | null }> | null
    members?: Array<{ __typename?: 'ChapterMember'; id?: string | null }> | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
    referralsFrom?: Array<{ __typename?: 'Referral'; id?: string | null }> | null
    referralsTo?: Array<{ __typename?: 'Referral'; id?: string | null }> | null
    substituteGroup?: { __typename?: 'SubstituteGroup'; id?: string | null } | null
    region?: { __typename?: 'Region'; id?: string | null; name?: string | null } | null
    attendanceReminders?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null }> | null
  } | null
}

export type AdminChapterQueryVariables = Exact<{
  chapterId: Scalars['String']
}>

export type AdminChapterQuery = {
  __typename?: 'Query'
  chapter?: {
    __typename?: 'Chapter'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    establishedDate?: any | null
    name?: string | null
    description?: string | null
    avatarEmail?: string | null
    avatarUrl?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    state?: string | null
    facebook?: string | null
    meetingDay?: DayOfWeek | null
    meetingTime?: string | null
    meetingDetails?: string | null
    status?: ChapterStatus | null
    meetings?: Array<{ __typename?: 'Meeting'; id?: string | null }> | null
    members?: Array<{ __typename?: 'ChapterMember'; id?: string | null }> | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
    referralsFrom?: Array<{ __typename?: 'Referral'; id?: string | null }> | null
    referralsTo?: Array<{ __typename?: 'Referral'; id?: string | null }> | null
    substituteGroup?: { __typename?: 'SubstituteGroup'; id?: string | null } | null
    region?: { __typename?: 'Region'; id?: string | null; name?: string | null } | null
    attendanceReminders?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null }> | null
  } | null
}

export type AdminChaptersQueryVariables = Exact<{
  input?: InputMaybe<AdminListChapterInput>
}>

export type AdminChaptersQuery = {
  __typename?: 'Query'
  chapters?: Array<{
    __typename?: 'Chapter'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    establishedDate?: any | null
    name?: string | null
    description?: string | null
    avatarEmail?: string | null
    avatarUrl?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    state?: string | null
    facebook?: string | null
    meetingDay?: DayOfWeek | null
    meetingTime?: string | null
    meetingDetails?: string | null
    status?: ChapterStatus | null
    meetings?: Array<{ __typename?: 'Meeting'; id?: string | null }> | null
    members?: Array<{ __typename?: 'ChapterMember'; id?: string | null }> | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
    referralsFrom?: Array<{ __typename?: 'Referral'; id?: string | null }> | null
    referralsTo?: Array<{ __typename?: 'Referral'; id?: string | null }> | null
    substituteGroup?: { __typename?: 'SubstituteGroup'; id?: string | null } | null
    region?: { __typename?: 'Region'; id?: string | null; name?: string | null } | null
    attendanceReminders?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null }> | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminChapterPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListChapterInput>
}>

export type AdminChapterPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminCompanyMemberDetailsFragment = {
  __typename?: 'CompanyMember'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  fromDate?: any | null
  thruDate?: any | null
  role?: string | null
  location?: string | null
  company?: { __typename?: 'Company'; id?: string | null } | null
  member?: { __typename?: 'User'; id?: string | null } | null
}

export type AdminCreateCompanyMemberMutationVariables = Exact<{
  input: AdminCreateCompanyMemberInput
}>

export type AdminCreateCompanyMemberMutation = {
  __typename?: 'Mutation'
  createCompanyMember?: {
    __typename?: 'CompanyMember'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    fromDate?: any | null
    thruDate?: any | null
    role?: string | null
    location?: string | null
    company?: { __typename?: 'Company'; id?: string | null } | null
    member?: { __typename?: 'User'; id?: string | null } | null
  } | null
}

export type AdminDeleteCompanyMemberMutationVariables = Exact<{
  companyMemberId: Scalars['String']
}>

export type AdminDeleteCompanyMemberMutation = {
  __typename?: 'Mutation'
  deleteCompanyMember?: { __typename?: 'CompanyMember'; id?: string | null } | null
}

export type AdminUpdateCompanyMemberMutationVariables = Exact<{
  companyMemberId: Scalars['String']
  input: AdminUpdateCompanyMemberInput
}>

export type AdminUpdateCompanyMemberMutation = {
  __typename?: 'Mutation'
  updateCompanyMember?: {
    __typename?: 'CompanyMember'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    fromDate?: any | null
    thruDate?: any | null
    role?: string | null
    location?: string | null
    company?: { __typename?: 'Company'; id?: string | null } | null
    member?: { __typename?: 'User'; id?: string | null } | null
  } | null
}

export type AdminCompanyMemberQueryVariables = Exact<{
  companyMemberId: Scalars['String']
}>

export type AdminCompanyMemberQuery = {
  __typename?: 'Query'
  companyMember?: {
    __typename?: 'CompanyMember'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    fromDate?: any | null
    thruDate?: any | null
    role?: string | null
    location?: string | null
    company?: { __typename?: 'Company'; id?: string | null } | null
    member?: { __typename?: 'User'; id?: string | null } | null
  } | null
}

export type AdminCompanyMembersQueryVariables = Exact<{
  input?: InputMaybe<AdminListCompanyMemberInput>
}>

export type AdminCompanyMembersQuery = {
  __typename?: 'Query'
  companyMembers?: Array<{
    __typename?: 'CompanyMember'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    fromDate?: any | null
    thruDate?: any | null
    role?: string | null
    location?: string | null
    company?: { __typename?: 'Company'; id?: string | null } | null
    member?: { __typename?: 'User'; id?: string | null } | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminCompanyMemberPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListCompanyMemberInput>
}>

export type AdminCompanyMemberPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminCompanyDetailsFragment = {
  __typename?: 'Company'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  name?: string | null
  members?: Array<{ __typename?: 'CompanyMember'; id?: string | null }> | null
}

export type AdminCreateCompanyMutationVariables = Exact<{
  input: AdminCreateCompanyInput
}>

export type AdminCreateCompanyMutation = {
  __typename?: 'Mutation'
  createCompany?: {
    __typename?: 'Company'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    members?: Array<{ __typename?: 'CompanyMember'; id?: string | null }> | null
  } | null
}

export type AdminDeleteCompanyMutationVariables = Exact<{
  companyId: Scalars['String']
}>

export type AdminDeleteCompanyMutation = {
  __typename?: 'Mutation'
  deleteCompany?: { __typename?: 'Company'; id?: string | null } | null
}

export type AdminUpdateCompanyMutationVariables = Exact<{
  companyId: Scalars['String']
  input: AdminUpdateCompanyInput
}>

export type AdminUpdateCompanyMutation = {
  __typename?: 'Mutation'
  updateCompany?: {
    __typename?: 'Company'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    members?: Array<{ __typename?: 'CompanyMember'; id?: string | null }> | null
  } | null
}

export type AdminCompanyQueryVariables = Exact<{
  companyId: Scalars['String']
}>

export type AdminCompanyQuery = {
  __typename?: 'Query'
  company?: {
    __typename?: 'Company'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    members?: Array<{ __typename?: 'CompanyMember'; id?: string | null }> | null
  } | null
}

export type AdminCompaniesQueryVariables = Exact<{
  input?: InputMaybe<AdminListCompanyInput>
}>

export type AdminCompaniesQuery = {
  __typename?: 'Query'
  companies?: Array<{
    __typename?: 'Company'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    members?: Array<{ __typename?: 'CompanyMember'; id?: string | null }> | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminCompanyPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListCompanyInput>
}>

export type AdminCompanyPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminIndustryDetailsFragment = {
  __typename?: 'Industry'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  name?: string | null
}

export type AdminCreateIndustryMutationVariables = Exact<{
  input: AdminCreateIndustryInput
}>

export type AdminCreateIndustryMutation = {
  __typename?: 'Mutation'
  createIndustry?: {
    __typename?: 'Industry'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
  } | null
}

export type AdminDeleteIndustryMutationVariables = Exact<{
  industryId: Scalars['String']
}>

export type AdminDeleteIndustryMutation = {
  __typename?: 'Mutation'
  deleteIndustry?: { __typename?: 'Industry'; id?: string | null } | null
}

export type AdminUpdateIndustryMutationVariables = Exact<{
  industryId: Scalars['String']
  input: AdminUpdateIndustryInput
}>

export type AdminUpdateIndustryMutation = {
  __typename?: 'Mutation'
  updateIndustry?: {
    __typename?: 'Industry'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
  } | null
}

export type AdminIndustryQueryVariables = Exact<{
  industryId: Scalars['String']
}>

export type AdminIndustryQuery = {
  __typename?: 'Query'
  industry?: {
    __typename?: 'Industry'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
  } | null
}

export type AdminIndustriesQueryVariables = Exact<{
  input?: InputMaybe<AdminListIndustryInput>
}>

export type AdminIndustriesQuery = {
  __typename?: 'Query'
  industries?: Array<{
    __typename?: 'Industry'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminIndustryPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListIndustryInput>
}>

export type AdminIndustryPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminMeetingPresenceDetailsFragment = {
  __typename?: 'MeetingPresence'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  attendance?: MeetingAttendance | null
  meeting?: { __typename?: 'Meeting'; id?: string | null } | null
  member?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
}

export type AdminCreateMeetingPresenceMutationVariables = Exact<{
  input: AdminCreateMeetingPresenceInput
}>

export type AdminCreateMeetingPresenceMutation = {
  __typename?: 'Mutation'
  createMeetingPresence?: {
    __typename?: 'MeetingPresence'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    attendance?: MeetingAttendance | null
    meeting?: { __typename?: 'Meeting'; id?: string | null } | null
    member?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminDeleteMeetingPresenceMutationVariables = Exact<{
  meetingPresenceId: Scalars['String']
}>

export type AdminDeleteMeetingPresenceMutation = {
  __typename?: 'Mutation'
  deleteMeetingPresence?: { __typename?: 'MeetingPresence'; id?: string | null } | null
}

export type AdminUpdateMeetingPresenceMutationVariables = Exact<{
  meetingPresenceId: Scalars['String']
  input: AdminUpdateMeetingPresenceInput
}>

export type AdminUpdateMeetingPresenceMutation = {
  __typename?: 'Mutation'
  updateMeetingPresence?: {
    __typename?: 'MeetingPresence'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    attendance?: MeetingAttendance | null
    meeting?: { __typename?: 'Meeting'; id?: string | null } | null
    member?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminMeetingPresenceQueryVariables = Exact<{
  meetingPresenceId: Scalars['String']
}>

export type AdminMeetingPresenceQuery = {
  __typename?: 'Query'
  meetingPresence?: {
    __typename?: 'MeetingPresence'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    attendance?: MeetingAttendance | null
    meeting?: { __typename?: 'Meeting'; id?: string | null } | null
    member?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminMeetingPresencesQueryVariables = Exact<{
  input?: InputMaybe<AdminListMeetingPresenceInput>
}>

export type AdminMeetingPresencesQuery = {
  __typename?: 'Query'
  meetingPresences?: Array<{
    __typename?: 'MeetingPresence'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    attendance?: MeetingAttendance | null
    meeting?: { __typename?: 'Meeting'; id?: string | null } | null
    member?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminMeetingPresencePaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListMeetingPresenceInput>
}>

export type AdminMeetingPresencePaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminMeetingDetailsFragment = {
  __typename?: 'Meeting'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  date?: any | null
  isVisitorDay?: boolean | null
  chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
  presence?: Array<{ __typename?: 'MeetingPresence'; id?: string | null }> | null
  substitutes?: Array<{ __typename?: 'Substitute'; id?: string | null }> | null
}

export type AdminCreateMeetingMutationVariables = Exact<{
  input: AdminCreateMeetingInput
}>

export type AdminCreateMeetingMutation = {
  __typename?: 'Mutation'
  createMeeting?: {
    __typename?: 'Meeting'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    isVisitorDay?: boolean | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    presence?: Array<{ __typename?: 'MeetingPresence'; id?: string | null }> | null
    substitutes?: Array<{ __typename?: 'Substitute'; id?: string | null }> | null
  } | null
}

export type AdminDeleteMeetingMutationVariables = Exact<{
  meetingId: Scalars['String']
}>

export type AdminDeleteMeetingMutation = {
  __typename?: 'Mutation'
  deleteMeeting?: { __typename?: 'Meeting'; id?: string | null } | null
}

export type AdminUpdateMeetingMutationVariables = Exact<{
  meetingId: Scalars['String']
  input: AdminUpdateMeetingInput
}>

export type AdminUpdateMeetingMutation = {
  __typename?: 'Mutation'
  updateMeeting?: {
    __typename?: 'Meeting'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    isVisitorDay?: boolean | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    presence?: Array<{ __typename?: 'MeetingPresence'; id?: string | null }> | null
    substitutes?: Array<{ __typename?: 'Substitute'; id?: string | null }> | null
  } | null
}

export type AdminMeetingQueryVariables = Exact<{
  meetingId: Scalars['String']
}>

export type AdminMeetingQuery = {
  __typename?: 'Query'
  meeting?: {
    __typename?: 'Meeting'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    isVisitorDay?: boolean | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    presence?: Array<{ __typename?: 'MeetingPresence'; id?: string | null }> | null
    substitutes?: Array<{ __typename?: 'Substitute'; id?: string | null }> | null
  } | null
}

export type AdminMeetingsQueryVariables = Exact<{
  input?: InputMaybe<AdminListMeetingInput>
}>

export type AdminMeetingsQuery = {
  __typename?: 'Query'
  meetings?: Array<{
    __typename?: 'Meeting'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    isVisitorDay?: boolean | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    presence?: Array<{ __typename?: 'MeetingPresence'; id?: string | null }> | null
    substitutes?: Array<{ __typename?: 'Substitute'; id?: string | null }> | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminMeetingPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListMeetingInput>
}>

export type AdminMeetingPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminNotificationDetailsFragment = {
  __typename?: 'Notification'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  read?: boolean | null
  type?: NotificationType | null
  message?: string | null
  referenceId?: string | null
  referenceType?: NotificationReferenceType | null
  actor?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
}

export type AdminCreateNotificationMutationVariables = Exact<{
  input: AdminCreateNotificationInput
}>

export type AdminCreateNotificationMutation = {
  __typename?: 'Mutation'
  createNotification?: {
    __typename?: 'Notification'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    read?: boolean | null
    type?: NotificationType | null
    message?: string | null
    referenceId?: string | null
    referenceType?: NotificationReferenceType | null
    actor?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminDeleteNotificationMutationVariables = Exact<{
  notificationId: Scalars['String']
}>

export type AdminDeleteNotificationMutation = {
  __typename?: 'Mutation'
  deleteNotification?: { __typename?: 'Notification'; id?: string | null } | null
}

export type AdminUpdateNotificationMutationVariables = Exact<{
  notificationId: Scalars['String']
  input: AdminUpdateNotificationInput
}>

export type AdminUpdateNotificationMutation = {
  __typename?: 'Mutation'
  updateNotification?: {
    __typename?: 'Notification'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    read?: boolean | null
    type?: NotificationType | null
    message?: string | null
    referenceId?: string | null
    referenceType?: NotificationReferenceType | null
    actor?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminNotificationQueryVariables = Exact<{
  notificationId: Scalars['String']
}>

export type AdminNotificationQuery = {
  __typename?: 'Query'
  notification?: {
    __typename?: 'Notification'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    read?: boolean | null
    type?: NotificationType | null
    message?: string | null
    referenceId?: string | null
    referenceType?: NotificationReferenceType | null
    actor?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminNotificationsQueryVariables = Exact<{
  input?: InputMaybe<AdminListNotificationInput>
}>

export type AdminNotificationsQuery = {
  __typename?: 'Query'
  notifications?: Array<{
    __typename?: 'Notification'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    read?: boolean | null
    type?: NotificationType | null
    message?: string | null
    referenceId?: string | null
    referenceType?: NotificationReferenceType | null
    actor?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminNotificationPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListNotificationInput>
}>

export type AdminNotificationPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminPowerHourDetailsFragment = {
  __typename?: 'PowerHour'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  date?: any | null
  time?: string | null
  details?: string | null
  status?: PowerHourStatus | null
  from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
}

export type AdminCreatePowerHourMutationVariables = Exact<{
  input: AdminCreatePowerHourInput
}>

export type AdminCreatePowerHourMutation = {
  __typename?: 'Mutation'
  createPowerHour?: {
    __typename?: 'PowerHour'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    time?: string | null
    details?: string | null
    status?: PowerHourStatus | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminDeletePowerHourMutationVariables = Exact<{
  powerHourId: Scalars['String']
}>

export type AdminDeletePowerHourMutation = {
  __typename?: 'Mutation'
  deletePowerHour?: { __typename?: 'PowerHour'; id?: string | null } | null
}

export type AdminUpdatePowerHourMutationVariables = Exact<{
  powerHourId: Scalars['String']
  input: AdminUpdatePowerHourInput
}>

export type AdminUpdatePowerHourMutation = {
  __typename?: 'Mutation'
  updatePowerHour?: {
    __typename?: 'PowerHour'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    time?: string | null
    details?: string | null
    status?: PowerHourStatus | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminPowerHourQueryVariables = Exact<{
  powerHourId: Scalars['String']
}>

export type AdminPowerHourQuery = {
  __typename?: 'Query'
  powerHour?: {
    __typename?: 'PowerHour'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    time?: string | null
    details?: string | null
    status?: PowerHourStatus | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminPowerHoursQueryVariables = Exact<{
  input?: InputMaybe<AdminListPowerHourInput>
}>

export type AdminPowerHoursQuery = {
  __typename?: 'Query'
  powerHours?: Array<{
    __typename?: 'PowerHour'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    time?: string | null
    details?: string | null
    status?: PowerHourStatus | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminPowerHourPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListPowerHourInput>
}>

export type AdminPowerHourPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminReferralDetailsFragment = {
  __typename?: 'Referral'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  referralDate?: any | null
  rating?: ReferralRating | null
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  phone?: string | null
  notes?: string | null
  fromIndustry?: string | null
  toIndustry?: string | null
  sentBy?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  fromChapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
  toChapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
  transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
}

export type AdminCreateReferralMutationVariables = Exact<{
  input: AdminCreateReferralInput
}>

export type AdminCreateReferralMutation = {
  __typename?: 'Mutation'
  createReferral?: {
    __typename?: 'Referral'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    referralDate?: any | null
    rating?: ReferralRating | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    notes?: string | null
    fromIndustry?: string | null
    toIndustry?: string | null
    sentBy?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    fromChapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    toChapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
  } | null
}

export type AdminDeleteReferralMutationVariables = Exact<{
  referralId: Scalars['String']
}>

export type AdminDeleteReferralMutation = {
  __typename?: 'Mutation'
  deleteReferral?: { __typename?: 'Referral'; id?: string | null } | null
}

export type AdminUpdateReferralMutationVariables = Exact<{
  referralId: Scalars['String']
  input: AdminUpdateReferralInput
}>

export type AdminUpdateReferralMutation = {
  __typename?: 'Mutation'
  updateReferral?: {
    __typename?: 'Referral'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    referralDate?: any | null
    rating?: ReferralRating | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    notes?: string | null
    fromIndustry?: string | null
    toIndustry?: string | null
    sentBy?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    fromChapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    toChapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
  } | null
}

export type AdminReferralQueryVariables = Exact<{
  referralId: Scalars['String']
}>

export type AdminReferralQuery = {
  __typename?: 'Query'
  referral?: {
    __typename?: 'Referral'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    referralDate?: any | null
    rating?: ReferralRating | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    notes?: string | null
    fromIndustry?: string | null
    toIndustry?: string | null
    sentBy?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    fromChapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    toChapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
  } | null
}

export type AdminReferralsQueryVariables = Exact<{
  input?: InputMaybe<AdminListReferralInput>
}>

export type AdminReferralsQuery = {
  __typename?: 'Query'
  referrals?: Array<{
    __typename?: 'Referral'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    referralDate?: any | null
    rating?: ReferralRating | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    phone?: string | null
    notes?: string | null
    fromIndustry?: string | null
    toIndustry?: string | null
    sentBy?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    fromChapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    toChapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminReferralPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListReferralInput>
}>

export type AdminReferralPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminRegionDetailsFragment = {
  __typename?: 'Region'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  name?: string | null
  manager?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  territory?: { __typename?: 'Territory'; id?: string | null; name?: string | null } | null
  chapters?: Array<{ __typename?: 'Chapter'; id?: string | null; name?: string | null }> | null
}

export type AdminCreateRegionMutationVariables = Exact<{
  input: AdminCreateRegionInput
}>

export type AdminCreateRegionMutation = {
  __typename?: 'Mutation'
  createRegion?: {
    __typename?: 'Region'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    manager?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    territory?: { __typename?: 'Territory'; id?: string | null; name?: string | null } | null
    chapters?: Array<{ __typename?: 'Chapter'; id?: string | null; name?: string | null }> | null
  } | null
}

export type AdminDeleteRegionMutationVariables = Exact<{
  regionId: Scalars['String']
}>

export type AdminDeleteRegionMutation = {
  __typename?: 'Mutation'
  deleteRegion?: { __typename?: 'Region'; id?: string | null } | null
}

export type AdminUpdateRegionMutationVariables = Exact<{
  regionId: Scalars['String']
  input: AdminUpdateRegionInput
}>

export type AdminUpdateRegionMutation = {
  __typename?: 'Mutation'
  updateRegion?: {
    __typename?: 'Region'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    manager?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    territory?: { __typename?: 'Territory'; id?: string | null; name?: string | null } | null
    chapters?: Array<{ __typename?: 'Chapter'; id?: string | null; name?: string | null }> | null
  } | null
}

export type AdminRegionQueryVariables = Exact<{
  regionId: Scalars['String']
}>

export type AdminRegionQuery = {
  __typename?: 'Query'
  region?: {
    __typename?: 'Region'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    manager?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    territory?: { __typename?: 'Territory'; id?: string | null; name?: string | null } | null
    chapters?: Array<{ __typename?: 'Chapter'; id?: string | null; name?: string | null }> | null
  } | null
}

export type AdminRegionsQueryVariables = Exact<{
  input?: InputMaybe<AdminListRegionInput>
}>

export type AdminRegionsQuery = {
  __typename?: 'Query'
  regions?: Array<{
    __typename?: 'Region'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    manager?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    territory?: { __typename?: 'Territory'; id?: string | null; name?: string | null } | null
    chapters?: Array<{ __typename?: 'Chapter'; id?: string | null; name?: string | null }> | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminRegionPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListRegionInput>
}>

export type AdminRegionPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminSubstituteGroupDetailsFragment = {
  __typename?: 'SubstituteGroup'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  name?: string | null
  chapters?: Array<{ __typename?: 'Chapter'; id?: string | null; name?: string | null }> | null
}

export type AdminCreateSubstituteGroupMutationVariables = Exact<{
  input: AdminCreateSubstituteGroupInput
}>

export type AdminCreateSubstituteGroupMutation = {
  __typename?: 'Mutation'
  createSubstituteGroup?: {
    __typename?: 'SubstituteGroup'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    chapters?: Array<{ __typename?: 'Chapter'; id?: string | null; name?: string | null }> | null
  } | null
}

export type AdminDeleteSubstituteGroupMutationVariables = Exact<{
  substituteGroupId: Scalars['String']
}>

export type AdminDeleteSubstituteGroupMutation = {
  __typename?: 'Mutation'
  deleteSubstituteGroup?: { __typename?: 'SubstituteGroup'; id?: string | null } | null
}

export type AdminUpdateSubstituteGroupMutationVariables = Exact<{
  substituteGroupId: Scalars['String']
  input: AdminUpdateSubstituteGroupInput
}>

export type AdminUpdateSubstituteGroupMutation = {
  __typename?: 'Mutation'
  updateSubstituteGroup?: {
    __typename?: 'SubstituteGroup'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    chapters?: Array<{ __typename?: 'Chapter'; id?: string | null; name?: string | null }> | null
  } | null
}

export type AdminSubstituteGroupQueryVariables = Exact<{
  substituteGroupId: Scalars['String']
}>

export type AdminSubstituteGroupQuery = {
  __typename?: 'Query'
  substituteGroup?: {
    __typename?: 'SubstituteGroup'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    chapters?: Array<{ __typename?: 'Chapter'; id?: string | null; name?: string | null }> | null
  } | null
}

export type AdminSubstituteGroupsQueryVariables = Exact<{
  input?: InputMaybe<AdminListSubstituteGroupInput>
}>

export type AdminSubstituteGroupsQuery = {
  __typename?: 'Query'
  substituteGroups?: Array<{
    __typename?: 'SubstituteGroup'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    chapters?: Array<{ __typename?: 'Chapter'; id?: string | null; name?: string | null }> | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminSubstituteGroupPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListSubstituteGroupInput>
}>

export type AdminSubstituteGroupPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminSubstituteDetailsFragment = {
  __typename?: 'Substitute'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  meeting?: { __typename?: 'Meeting'; id?: string | null } | null
  invited?: Array<{ __typename?: 'User'; id?: string | null; name?: string | null }> | null
  sentBy?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  substitute?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
}

export type AdminCreateSubstituteMutationVariables = Exact<{
  input: AdminCreateSubstituteInput
}>

export type AdminCreateSubstituteMutation = {
  __typename?: 'Mutation'
  createSubstitute?: {
    __typename?: 'Substitute'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    meeting?: { __typename?: 'Meeting'; id?: string | null } | null
    invited?: Array<{ __typename?: 'User'; id?: string | null; name?: string | null }> | null
    sentBy?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    substitute?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminDeleteSubstituteMutationVariables = Exact<{
  substituteId: Scalars['String']
}>

export type AdminDeleteSubstituteMutation = {
  __typename?: 'Mutation'
  deleteSubstitute?: { __typename?: 'Substitute'; id?: string | null } | null
}

export type AdminUpdateSubstituteMutationVariables = Exact<{
  substituteId: Scalars['String']
  input: AdminUpdateSubstituteInput
}>

export type AdminUpdateSubstituteMutation = {
  __typename?: 'Mutation'
  updateSubstitute?: {
    __typename?: 'Substitute'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    meeting?: { __typename?: 'Meeting'; id?: string | null } | null
    invited?: Array<{ __typename?: 'User'; id?: string | null; name?: string | null }> | null
    sentBy?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    substitute?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminSubstituteQueryVariables = Exact<{
  substituteId: Scalars['String']
}>

export type AdminSubstituteQuery = {
  __typename?: 'Query'
  substitute?: {
    __typename?: 'Substitute'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    meeting?: { __typename?: 'Meeting'; id?: string | null } | null
    invited?: Array<{ __typename?: 'User'; id?: string | null; name?: string | null }> | null
    sentBy?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    substitute?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminSubstitutesQueryVariables = Exact<{
  input?: InputMaybe<AdminListSubstituteInput>
}>

export type AdminSubstitutesQuery = {
  __typename?: 'Query'
  substitutes?: Array<{
    __typename?: 'Substitute'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    meeting?: { __typename?: 'Meeting'; id?: string | null } | null
    invited?: Array<{ __typename?: 'User'; id?: string | null; name?: string | null }> | null
    sentBy?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    substitute?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminSubstitutePaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListSubstituteInput>
}>

export type AdminSubstitutePaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminTerritoryDetailsFragment = {
  __typename?: 'Territory'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  name?: string | null
  manager?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  regions?: Array<{ __typename?: 'Region'; id?: string | null; name?: string | null } | null> | null
}

export type AdminCreateTerritoryMutationVariables = Exact<{
  input: AdminCreateTerritoryInput
}>

export type AdminCreateTerritoryMutation = {
  __typename?: 'Mutation'
  createTerritory?: {
    __typename?: 'Territory'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    manager?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    regions?: Array<{ __typename?: 'Region'; id?: string | null; name?: string | null } | null> | null
  } | null
}

export type AdminDeleteTerritoryMutationVariables = Exact<{
  territoryId: Scalars['String']
}>

export type AdminDeleteTerritoryMutation = {
  __typename?: 'Mutation'
  deleteTerritory?: { __typename?: 'Territory'; id?: string | null } | null
}

export type AdminUpdateTerritoryMutationVariables = Exact<{
  territoryId: Scalars['String']
  input: AdminUpdateTerritoryInput
}>

export type AdminUpdateTerritoryMutation = {
  __typename?: 'Mutation'
  updateTerritory?: {
    __typename?: 'Territory'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    manager?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    regions?: Array<{ __typename?: 'Region'; id?: string | null; name?: string | null } | null> | null
  } | null
}

export type AdminTerritoryQueryVariables = Exact<{
  territoryId: Scalars['String']
}>

export type AdminTerritoryQuery = {
  __typename?: 'Query'
  territory?: {
    __typename?: 'Territory'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    manager?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    regions?: Array<{ __typename?: 'Region'; id?: string | null; name?: string | null } | null> | null
  } | null
}

export type AdminTerritoriesQueryVariables = Exact<{
  input?: InputMaybe<AdminListTerritoryInput>
}>

export type AdminTerritoriesQuery = {
  __typename?: 'Query'
  territories?: Array<{
    __typename?: 'Territory'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    manager?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    regions?: Array<{ __typename?: 'Region'; id?: string | null; name?: string | null } | null> | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminTerritoryPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListTerritoryInput>
}>

export type AdminTerritoryPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminTestimonialDetailsFragment = {
  __typename?: 'Testimonial'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  text?: string | null
  from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
}

export type AdminCreateTestimonialMutationVariables = Exact<{
  input: AdminCreateTestimonialInput
}>

export type AdminCreateTestimonialMutation = {
  __typename?: 'Mutation'
  createTestimonial?: {
    __typename?: 'Testimonial'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    text?: string | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminDeleteTestimonialMutationVariables = Exact<{
  testimonialId: Scalars['String']
}>

export type AdminDeleteTestimonialMutation = {
  __typename?: 'Mutation'
  deleteTestimonial?: { __typename?: 'Testimonial'; id?: string | null } | null
}

export type AdminUpdateTestimonialMutationVariables = Exact<{
  testimonialId: Scalars['String']
  input: AdminUpdateTestimonialInput
}>

export type AdminUpdateTestimonialMutation = {
  __typename?: 'Mutation'
  updateTestimonial?: {
    __typename?: 'Testimonial'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    text?: string | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminTestimonialQueryVariables = Exact<{
  testimonialId: Scalars['String']
}>

export type AdminTestimonialQuery = {
  __typename?: 'Query'
  testimonial?: {
    __typename?: 'Testimonial'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    text?: string | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminTestimonialsQueryVariables = Exact<{
  input?: InputMaybe<AdminListTestimonialInput>
}>

export type AdminTestimonialsQuery = {
  __typename?: 'Query'
  testimonials?: Array<{
    __typename?: 'Testimonial'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    text?: string | null
    from?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    to?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminTestimonialPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListTestimonialInput>
}>

export type AdminTestimonialPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminTransactionDetailsFragment = {
  __typename?: 'Transaction'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  date?: any | null
  amount?: number | null
  enteredBy?: string | null
  enteredOn?: string | null
  industry?: string | null
  state?: string | null
  chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
  user?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  referral?: { __typename?: 'Referral'; id?: string | null } | null
}

export type AdminCreateTransactionMutationVariables = Exact<{
  input: AdminCreateTransactionInput
}>

export type AdminCreateTransactionMutation = {
  __typename?: 'Mutation'
  createTransaction?: {
    __typename?: 'Transaction'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    amount?: number | null
    enteredBy?: string | null
    enteredOn?: string | null
    industry?: string | null
    state?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    user?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    referral?: { __typename?: 'Referral'; id?: string | null } | null
  } | null
}

export type AdminDeleteTransactionMutationVariables = Exact<{
  transactionId: Scalars['String']
}>

export type AdminDeleteTransactionMutation = {
  __typename?: 'Mutation'
  deleteTransaction?: { __typename?: 'Transaction'; id?: string | null } | null
}

export type AdminUpdateTransactionMutationVariables = Exact<{
  transactionId: Scalars['String']
  input: AdminUpdateTransactionInput
}>

export type AdminUpdateTransactionMutation = {
  __typename?: 'Mutation'
  updateTransaction?: {
    __typename?: 'Transaction'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    amount?: number | null
    enteredBy?: string | null
    enteredOn?: string | null
    industry?: string | null
    state?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    user?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    referral?: { __typename?: 'Referral'; id?: string | null } | null
  } | null
}

export type AdminTransactionQueryVariables = Exact<{
  transactionId: Scalars['String']
}>

export type AdminTransactionQuery = {
  __typename?: 'Query'
  transaction?: {
    __typename?: 'Transaction'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    amount?: number | null
    enteredBy?: string | null
    enteredOn?: string | null
    industry?: string | null
    state?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    user?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    referral?: { __typename?: 'Referral'; id?: string | null } | null
  } | null
}

export type AdminTransactionsQueryVariables = Exact<{
  input?: InputMaybe<AdminListTransactionInput>
}>

export type AdminTransactionsQuery = {
  __typename?: 'Query'
  transactions?: Array<{
    __typename?: 'Transaction'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    date?: any | null
    amount?: number | null
    enteredBy?: string | null
    enteredOn?: string | null
    industry?: string | null
    state?: string | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
    user?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    referral?: { __typename?: 'Referral'; id?: string | null } | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminTransactionPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListTransactionInput>
}>

export type AdminTransactionPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminUploadDetailsFragment = {
  __typename?: 'Upload'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  format?: string | null
  originalFilename?: string | null
  publicId?: string | null
  resourceType?: string | null
  secureUrl?: string | null
  signature?: string | null
  thumbnailUrl?: string | null
  url?: string | null
  type?: string | null
  user?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
  chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
}

export type AdminCreateUploadMutationVariables = Exact<{
  input: AdminCreateUploadInput
}>

export type AdminCreateUploadMutation = {
  __typename?: 'Mutation'
  createUpload?: {
    __typename?: 'Upload'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    format?: string | null
    originalFilename?: string | null
    publicId?: string | null
    resourceType?: string | null
    secureUrl?: string | null
    signature?: string | null
    thumbnailUrl?: string | null
    url?: string | null
    type?: string | null
    user?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminDeleteUploadMutationVariables = Exact<{
  uploadId: Scalars['String']
}>

export type AdminDeleteUploadMutation = {
  __typename?: 'Mutation'
  deleteUpload?: { __typename?: 'Upload'; id?: string | null } | null
}

export type AdminUpdateUploadMutationVariables = Exact<{
  uploadId: Scalars['String']
  input: AdminUpdateUploadInput
}>

export type AdminUpdateUploadMutation = {
  __typename?: 'Mutation'
  updateUpload?: {
    __typename?: 'Upload'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    format?: string | null
    originalFilename?: string | null
    publicId?: string | null
    resourceType?: string | null
    secureUrl?: string | null
    signature?: string | null
    thumbnailUrl?: string | null
    url?: string | null
    type?: string | null
    user?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminUploadQueryVariables = Exact<{
  uploadId: Scalars['String']
}>

export type AdminUploadQuery = {
  __typename?: 'Query'
  upload?: {
    __typename?: 'Upload'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    format?: string | null
    originalFilename?: string | null
    publicId?: string | null
    resourceType?: string | null
    secureUrl?: string | null
    signature?: string | null
    thumbnailUrl?: string | null
    url?: string | null
    type?: string | null
    user?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
  } | null
}

export type AdminUploadsQueryVariables = Exact<{
  input?: InputMaybe<AdminListUploadInput>
}>

export type AdminUploadsQuery = {
  __typename?: 'Query'
  uploads?: Array<{
    __typename?: 'Upload'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    format?: string | null
    originalFilename?: string | null
    publicId?: string | null
    resourceType?: string | null
    secureUrl?: string | null
    signature?: string | null
    thumbnailUrl?: string | null
    url?: string | null
    type?: string | null
    user?: { __typename?: 'User'; id?: string | null; name?: string | null } | null
    chapter?: { __typename?: 'Chapter'; id?: string | null; name?: string | null } | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminUploadPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListUploadInput>
}>

export type AdminUploadPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminUserDetailsFragment = {
  __typename?: 'User'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  lastSeen?: any | null
  onlineStatus?: UserOnlineStatus | null
  status?: UserStatus | null
  developer?: boolean | null
  role?: Role | null
  email?: string | null
  emailConfirmed?: boolean | null
  username?: string | null
  infusionsoftId?: number | null
  firstName?: string | null
  lastName?: string | null
  name?: string | null
  password?: string | null
  passwordResetToken?: string | null
  passwordResetExpires?: any | null
  confirmEmailToken?: string | null
  confirmEmailExpires?: any | null
  showGravatar?: boolean | null
  avatarUrl?: string | null
  applicationDate?: any | null
  inactiveDate?: any | null
  inquiryDate?: any | null
  membershipDate?: any | null
  renewalDate?: any | null
  terminationDate?: any | null
  transferDate?: any | null
  location?: string | null
  phone?: string | null
  bio?: string | null
  facebook?: string | null
  twitter?: string | null
  youtube?: string | null
  linkedin?: string | null
  instagram?: string | null
  website?: string | null
  industry?: string | null
  timeInIndustry?: string | null
  address?: string | null
  address2?: string | null
  cell?: string | null
  chapterTitle?: string | null
  city?: string | null
  comments?: string | null
  company?: string | null
  fax?: string | null
  hear?: string | null
  hearOther?: string | null
  internalComments?: string | null
  launchComplete?: boolean | null
  mentorName?: string | null
  merchantCircle?: string | null
  multipleBusinesses?: boolean | null
  multipleLocations?: boolean | null
  numberOfEmployees?: number | null
  organizer?: number | null
  otherBusinesses?: string | null
  otherLocations?: string | null
  postcode?: string | null
  promoter?: number | null
  recognized?: number | null
  salesAgentName?: string | null
  state?: string | null
  strategizer?: number | null
  substitute?: boolean | null
  tagline?: string | null
  terminatedByName?: string | null
  terminationComments?: string | null
  terminationReason?: string | null
  thinker?: number | null
  title?: string | null
  type?: string | null
  vet?: boolean | null
  notifyByEmail?: boolean | null
  notifyBySMS?: boolean | null
  notifyByWeb?: boolean | null
  notifyByMobile?: boolean | null
  chapter?: { __typename?: 'ChapterMember'; id?: string | null } | null
  companies?: Array<{ __typename?: 'Company'; id?: string | null; name?: string | null } | null> | null
  notificationsReceived?: Array<{ __typename?: 'Notification'; id?: string | null } | null> | null
  powerHoursFrom?: Array<{ __typename?: 'PowerHour'; id?: string | null } | null> | null
  powerHoursTo?: Array<{ __typename?: 'PowerHour'; id?: string | null } | null> | null
  referralsSent?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
  referralsFrom?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
  referralsTo?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
  reminderSentBy?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null } | null> | null
  reminderSentTo?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null } | null> | null
  substituteAccepted?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
  substituteInvited?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
  substitutesSentBy?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
  testimonialsFrom?: Array<{ __typename?: 'Testimonial'; id?: string | null } | null> | null
  testimonialsto?: Array<{ __typename?: 'Testimonial'; id?: string | null } | null> | null
  transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
  regionManaged?: { __typename?: 'Region'; id?: string | null; name?: string | null } | null
  territoryManaged?: { __typename?: 'Territory'; id?: string | null; name?: string | null } | null
  avatar?: { __typename?: 'Upload'; id?: string | null } | null
  presence?: { __typename?: 'MeetingPresence'; id?: string | null } | null
}

export type AdminCreateUserMutationVariables = Exact<{
  input: AdminCreateUserInput
}>

export type AdminCreateUserMutation = {
  __typename?: 'Mutation'
  createUser?: {
    __typename?: 'User'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    lastSeen?: any | null
    onlineStatus?: UserOnlineStatus | null
    status?: UserStatus | null
    developer?: boolean | null
    role?: Role | null
    email?: string | null
    emailConfirmed?: boolean | null
    username?: string | null
    infusionsoftId?: number | null
    firstName?: string | null
    lastName?: string | null
    name?: string | null
    password?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: any | null
    confirmEmailToken?: string | null
    confirmEmailExpires?: any | null
    showGravatar?: boolean | null
    avatarUrl?: string | null
    applicationDate?: any | null
    inactiveDate?: any | null
    inquiryDate?: any | null
    membershipDate?: any | null
    renewalDate?: any | null
    terminationDate?: any | null
    transferDate?: any | null
    location?: string | null
    phone?: string | null
    bio?: string | null
    facebook?: string | null
    twitter?: string | null
    youtube?: string | null
    linkedin?: string | null
    instagram?: string | null
    website?: string | null
    industry?: string | null
    timeInIndustry?: string | null
    address?: string | null
    address2?: string | null
    cell?: string | null
    chapterTitle?: string | null
    city?: string | null
    comments?: string | null
    company?: string | null
    fax?: string | null
    hear?: string | null
    hearOther?: string | null
    internalComments?: string | null
    launchComplete?: boolean | null
    mentorName?: string | null
    merchantCircle?: string | null
    multipleBusinesses?: boolean | null
    multipleLocations?: boolean | null
    numberOfEmployees?: number | null
    organizer?: number | null
    otherBusinesses?: string | null
    otherLocations?: string | null
    postcode?: string | null
    promoter?: number | null
    recognized?: number | null
    salesAgentName?: string | null
    state?: string | null
    strategizer?: number | null
    substitute?: boolean | null
    tagline?: string | null
    terminatedByName?: string | null
    terminationComments?: string | null
    terminationReason?: string | null
    thinker?: number | null
    title?: string | null
    type?: string | null
    vet?: boolean | null
    notifyByEmail?: boolean | null
    notifyBySMS?: boolean | null
    notifyByWeb?: boolean | null
    notifyByMobile?: boolean | null
    chapter?: { __typename?: 'ChapterMember'; id?: string | null } | null
    companies?: Array<{ __typename?: 'Company'; id?: string | null; name?: string | null } | null> | null
    notificationsReceived?: Array<{ __typename?: 'Notification'; id?: string | null } | null> | null
    powerHoursFrom?: Array<{ __typename?: 'PowerHour'; id?: string | null } | null> | null
    powerHoursTo?: Array<{ __typename?: 'PowerHour'; id?: string | null } | null> | null
    referralsSent?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    referralsFrom?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    referralsTo?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    reminderSentBy?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null } | null> | null
    reminderSentTo?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null } | null> | null
    substituteAccepted?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    substituteInvited?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    substitutesSentBy?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    testimonialsFrom?: Array<{ __typename?: 'Testimonial'; id?: string | null } | null> | null
    testimonialsto?: Array<{ __typename?: 'Testimonial'; id?: string | null } | null> | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
    regionManaged?: { __typename?: 'Region'; id?: string | null; name?: string | null } | null
    territoryManaged?: { __typename?: 'Territory'; id?: string | null; name?: string | null } | null
    avatar?: { __typename?: 'Upload'; id?: string | null } | null
    presence?: { __typename?: 'MeetingPresence'; id?: string | null } | null
  } | null
}

export type AdminDeleteUserMutationVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminDeleteUserMutation = {
  __typename?: 'Mutation'
  deleteUser?: { __typename?: 'User'; id?: string | null } | null
}

export type AdminUpdateUserMutationVariables = Exact<{
  userId: Scalars['String']
  input: AdminUpdateUserInput
}>

export type AdminUpdateUserMutation = {
  __typename?: 'Mutation'
  updateUser?: {
    __typename?: 'User'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    lastSeen?: any | null
    onlineStatus?: UserOnlineStatus | null
    status?: UserStatus | null
    developer?: boolean | null
    role?: Role | null
    email?: string | null
    emailConfirmed?: boolean | null
    username?: string | null
    infusionsoftId?: number | null
    firstName?: string | null
    lastName?: string | null
    name?: string | null
    password?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: any | null
    confirmEmailToken?: string | null
    confirmEmailExpires?: any | null
    showGravatar?: boolean | null
    avatarUrl?: string | null
    applicationDate?: any | null
    inactiveDate?: any | null
    inquiryDate?: any | null
    membershipDate?: any | null
    renewalDate?: any | null
    terminationDate?: any | null
    transferDate?: any | null
    location?: string | null
    phone?: string | null
    bio?: string | null
    facebook?: string | null
    twitter?: string | null
    youtube?: string | null
    linkedin?: string | null
    instagram?: string | null
    website?: string | null
    industry?: string | null
    timeInIndustry?: string | null
    address?: string | null
    address2?: string | null
    cell?: string | null
    chapterTitle?: string | null
    city?: string | null
    comments?: string | null
    company?: string | null
    fax?: string | null
    hear?: string | null
    hearOther?: string | null
    internalComments?: string | null
    launchComplete?: boolean | null
    mentorName?: string | null
    merchantCircle?: string | null
    multipleBusinesses?: boolean | null
    multipleLocations?: boolean | null
    numberOfEmployees?: number | null
    organizer?: number | null
    otherBusinesses?: string | null
    otherLocations?: string | null
    postcode?: string | null
    promoter?: number | null
    recognized?: number | null
    salesAgentName?: string | null
    state?: string | null
    strategizer?: number | null
    substitute?: boolean | null
    tagline?: string | null
    terminatedByName?: string | null
    terminationComments?: string | null
    terminationReason?: string | null
    thinker?: number | null
    title?: string | null
    type?: string | null
    vet?: boolean | null
    notifyByEmail?: boolean | null
    notifyBySMS?: boolean | null
    notifyByWeb?: boolean | null
    notifyByMobile?: boolean | null
    chapter?: { __typename?: 'ChapterMember'; id?: string | null } | null
    companies?: Array<{ __typename?: 'Company'; id?: string | null; name?: string | null } | null> | null
    notificationsReceived?: Array<{ __typename?: 'Notification'; id?: string | null } | null> | null
    powerHoursFrom?: Array<{ __typename?: 'PowerHour'; id?: string | null } | null> | null
    powerHoursTo?: Array<{ __typename?: 'PowerHour'; id?: string | null } | null> | null
    referralsSent?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    referralsFrom?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    referralsTo?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    reminderSentBy?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null } | null> | null
    reminderSentTo?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null } | null> | null
    substituteAccepted?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    substituteInvited?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    substitutesSentBy?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    testimonialsFrom?: Array<{ __typename?: 'Testimonial'; id?: string | null } | null> | null
    testimonialsto?: Array<{ __typename?: 'Testimonial'; id?: string | null } | null> | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
    regionManaged?: { __typename?: 'Region'; id?: string | null; name?: string | null } | null
    territoryManaged?: { __typename?: 'Territory'; id?: string | null; name?: string | null } | null
    avatar?: { __typename?: 'Upload'; id?: string | null } | null
    presence?: { __typename?: 'MeetingPresence'; id?: string | null } | null
  } | null
}

export type AdminUserQueryVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminUserQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    lastSeen?: any | null
    onlineStatus?: UserOnlineStatus | null
    status?: UserStatus | null
    developer?: boolean | null
    role?: Role | null
    email?: string | null
    emailConfirmed?: boolean | null
    username?: string | null
    infusionsoftId?: number | null
    firstName?: string | null
    lastName?: string | null
    name?: string | null
    password?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: any | null
    confirmEmailToken?: string | null
    confirmEmailExpires?: any | null
    showGravatar?: boolean | null
    avatarUrl?: string | null
    applicationDate?: any | null
    inactiveDate?: any | null
    inquiryDate?: any | null
    membershipDate?: any | null
    renewalDate?: any | null
    terminationDate?: any | null
    transferDate?: any | null
    location?: string | null
    phone?: string | null
    bio?: string | null
    facebook?: string | null
    twitter?: string | null
    youtube?: string | null
    linkedin?: string | null
    instagram?: string | null
    website?: string | null
    industry?: string | null
    timeInIndustry?: string | null
    address?: string | null
    address2?: string | null
    cell?: string | null
    chapterTitle?: string | null
    city?: string | null
    comments?: string | null
    company?: string | null
    fax?: string | null
    hear?: string | null
    hearOther?: string | null
    internalComments?: string | null
    launchComplete?: boolean | null
    mentorName?: string | null
    merchantCircle?: string | null
    multipleBusinesses?: boolean | null
    multipleLocations?: boolean | null
    numberOfEmployees?: number | null
    organizer?: number | null
    otherBusinesses?: string | null
    otherLocations?: string | null
    postcode?: string | null
    promoter?: number | null
    recognized?: number | null
    salesAgentName?: string | null
    state?: string | null
    strategizer?: number | null
    substitute?: boolean | null
    tagline?: string | null
    terminatedByName?: string | null
    terminationComments?: string | null
    terminationReason?: string | null
    thinker?: number | null
    title?: string | null
    type?: string | null
    vet?: boolean | null
    notifyByEmail?: boolean | null
    notifyBySMS?: boolean | null
    notifyByWeb?: boolean | null
    notifyByMobile?: boolean | null
    chapter?: { __typename?: 'ChapterMember'; id?: string | null } | null
    companies?: Array<{ __typename?: 'Company'; id?: string | null; name?: string | null } | null> | null
    notificationsReceived?: Array<{ __typename?: 'Notification'; id?: string | null } | null> | null
    powerHoursFrom?: Array<{ __typename?: 'PowerHour'; id?: string | null } | null> | null
    powerHoursTo?: Array<{ __typename?: 'PowerHour'; id?: string | null } | null> | null
    referralsSent?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    referralsFrom?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    referralsTo?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    reminderSentBy?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null } | null> | null
    reminderSentTo?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null } | null> | null
    substituteAccepted?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    substituteInvited?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    substitutesSentBy?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    testimonialsFrom?: Array<{ __typename?: 'Testimonial'; id?: string | null } | null> | null
    testimonialsto?: Array<{ __typename?: 'Testimonial'; id?: string | null } | null> | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
    regionManaged?: { __typename?: 'Region'; id?: string | null; name?: string | null } | null
    territoryManaged?: { __typename?: 'Territory'; id?: string | null; name?: string | null } | null
    avatar?: { __typename?: 'Upload'; id?: string | null } | null
    presence?: { __typename?: 'MeetingPresence'; id?: string | null } | null
  } | null
}

export type AdminUsersQueryVariables = Exact<{
  input?: InputMaybe<AdminListUserInput>
}>

export type AdminUsersQuery = {
  __typename?: 'Query'
  users?: Array<{
    __typename?: 'User'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    lastSeen?: any | null
    onlineStatus?: UserOnlineStatus | null
    status?: UserStatus | null
    developer?: boolean | null
    role?: Role | null
    email?: string | null
    emailConfirmed?: boolean | null
    username?: string | null
    infusionsoftId?: number | null
    firstName?: string | null
    lastName?: string | null
    name?: string | null
    password?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: any | null
    confirmEmailToken?: string | null
    confirmEmailExpires?: any | null
    showGravatar?: boolean | null
    avatarUrl?: string | null
    applicationDate?: any | null
    inactiveDate?: any | null
    inquiryDate?: any | null
    membershipDate?: any | null
    renewalDate?: any | null
    terminationDate?: any | null
    transferDate?: any | null
    location?: string | null
    phone?: string | null
    bio?: string | null
    facebook?: string | null
    twitter?: string | null
    youtube?: string | null
    linkedin?: string | null
    instagram?: string | null
    website?: string | null
    industry?: string | null
    timeInIndustry?: string | null
    address?: string | null
    address2?: string | null
    cell?: string | null
    chapterTitle?: string | null
    city?: string | null
    comments?: string | null
    company?: string | null
    fax?: string | null
    hear?: string | null
    hearOther?: string | null
    internalComments?: string | null
    launchComplete?: boolean | null
    mentorName?: string | null
    merchantCircle?: string | null
    multipleBusinesses?: boolean | null
    multipleLocations?: boolean | null
    numberOfEmployees?: number | null
    organizer?: number | null
    otherBusinesses?: string | null
    otherLocations?: string | null
    postcode?: string | null
    promoter?: number | null
    recognized?: number | null
    salesAgentName?: string | null
    state?: string | null
    strategizer?: number | null
    substitute?: boolean | null
    tagline?: string | null
    terminatedByName?: string | null
    terminationComments?: string | null
    terminationReason?: string | null
    thinker?: number | null
    title?: string | null
    type?: string | null
    vet?: boolean | null
    notifyByEmail?: boolean | null
    notifyBySMS?: boolean | null
    notifyByWeb?: boolean | null
    notifyByMobile?: boolean | null
    chapter?: { __typename?: 'ChapterMember'; id?: string | null } | null
    companies?: Array<{ __typename?: 'Company'; id?: string | null; name?: string | null } | null> | null
    notificationsReceived?: Array<{ __typename?: 'Notification'; id?: string | null } | null> | null
    powerHoursFrom?: Array<{ __typename?: 'PowerHour'; id?: string | null } | null> | null
    powerHoursTo?: Array<{ __typename?: 'PowerHour'; id?: string | null } | null> | null
    referralsSent?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    referralsFrom?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    referralsTo?: Array<{ __typename?: 'Referral'; id?: string | null } | null> | null
    reminderSentBy?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null } | null> | null
    reminderSentTo?: Array<{ __typename?: 'AttendanceReminder'; id?: string | null } | null> | null
    substituteAccepted?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    substituteInvited?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    substitutesSentBy?: Array<{ __typename?: 'Substitute'; id?: string | null } | null> | null
    testimonialsFrom?: Array<{ __typename?: 'Testimonial'; id?: string | null } | null> | null
    testimonialsto?: Array<{ __typename?: 'Testimonial'; id?: string | null } | null> | null
    transactions?: Array<{ __typename?: 'Transaction'; id?: string | null }> | null
    regionManaged?: { __typename?: 'Region'; id?: string | null; name?: string | null } | null
    territoryManaged?: { __typename?: 'Territory'; id?: string | null; name?: string | null } | null
    avatar?: { __typename?: 'Upload'; id?: string | null } | null
    presence?: { __typename?: 'MeetingPresence'; id?: string | null } | null
  }> | null
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type AdminUserPaginationQueryVariables = Exact<{
  input?: InputMaybe<AdminListUserInput>
}>

export type AdminUserPaginationQuery = {
  __typename?: 'Query'
  counters?: {
    __typename?: 'CorePaging'
    count?: number | null
    take?: number | null
    page?: number | null
    skip?: number | null
    total?: number | null
  } | null
}

export type UserTokenDetailsFragment = {
  __typename?: 'UserToken'
  token: string
  user: {
    __typename?: 'User'
    id?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    email?: string | null
    role?: Role | null
    developer?: boolean | null
    isLeader?: boolean | null
  }
}

export type UserDetailsFragment = {
  __typename?: 'User'
  id?: string | null
  firstName?: string | null
  lastName?: string | null
  avatarUrl?: string | null
  email?: string | null
  role?: Role | null
  developer?: boolean | null
  isLeader?: boolean | null
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: 'Query'
  me?: {
    __typename?: 'User'
    id?: string | null
    firstName?: string | null
    lastName?: string | null
    avatarUrl?: string | null
    email?: string | null
    role?: Role | null
    developer?: boolean | null
    isLeader?: boolean | null
  } | null
}

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation'; logout?: boolean | null }

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login?: {
    __typename?: 'UserToken'
    token: string
    user: {
      __typename?: 'User'
      id?: string | null
      firstName?: string | null
      lastName?: string | null
      avatarUrl?: string | null
      email?: string | null
      role?: Role | null
      developer?: boolean | null
      isLeader?: boolean | null
    }
  } | null
}

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = {
  __typename?: 'Mutation'
  register?: {
    __typename?: 'UserToken'
    token: string
    user: {
      __typename?: 'User'
      id?: string | null
      firstName?: string | null
      lastName?: string | null
      avatarUrl?: string | null
      email?: string | null
      role?: Role | null
      developer?: boolean | null
      isLeader?: boolean | null
    }
  } | null
}

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordInput
}>

export type ForgotPasswordMutation = { __typename?: 'Mutation'; forgotPassword?: boolean | null }

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput
}>

export type ResetPasswordMutation = {
  __typename?: 'Mutation'
  resetPassword?: { __typename?: 'User'; email?: string | null } | null
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query'; uptime?: number | null }

export type CorePagingDetailsFragment = {
  __typename?: 'CorePaging'
  count?: number | null
  take?: number | null
  page?: number | null
  skip?: number | null
  total?: number | null
}

export type IntercomDetailsFragment = {
  __typename?: 'IntercomMessage'
  type?: string | null
  scope?: string | null
  payload?: any | null
}

export type IntercomPubMutationVariables = Exact<{
  type: Scalars['String']
  scope?: InputMaybe<Scalars['String']>
  payload?: InputMaybe<Scalars['JSON']>
}>

export type IntercomPubMutation = {
  __typename?: 'Mutation'
  intercomPub?: {
    __typename?: 'IntercomMessage'
    type?: string | null
    scope?: string | null
    payload?: any | null
  } | null
}

export type IntercomSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type IntercomSubSubscription = {
  __typename?: 'Subscription'
  intercomSub?: {
    __typename?: 'IntercomMessage'
    type?: string | null
    scope?: string | null
    payload?: any | null
  } | null
}

export const AdminAttendanceReminderDetailsFragmentDoc = gql`
  fragment AdminAttendanceReminderDetails on AttendanceReminder {
    id
    createdAt
    updatedAt
    name
    chapter {
      id
      name
    }
    sentBy {
      id
      name
      firstName
      lastName
    }
    sentTo {
      id
      name
      firstName
      lastName
    }
  }
`
export const AdminChapterMemberDetailsFragmentDoc = gql`
  fragment AdminChapterMemberDetails on ChapterMember {
    id
    createdAt
    updatedAt
    isMentor
    isTrainer
    role
    name
    chapter {
      id
      name
    }
    member {
      id
      firstName
      lastName
      name
    }
  }
`
export const AdminChapterDetailsFragmentDoc = gql`
  fragment AdminChapterDetails on Chapter {
    id
    createdAt
    updatedAt
    establishedDate
    name
    description
    avatarEmail
    avatarUrl
    latitude
    longitude
    city
    state
    facebook
    meetingDay
    meetingTime
    meetingDetails
    status
    meetings {
      id
    }
    members {
      id
    }
    transactions {
      id
    }
    referralsFrom {
      id
    }
    referralsTo {
      id
    }
    substituteGroup {
      id
    }
    region {
      id
      name
    }
    attendanceReminders {
      id
    }
  }
`
export const AdminCompanyMemberDetailsFragmentDoc = gql`
  fragment AdminCompanyMemberDetails on CompanyMember {
    id
    createdAt
    updatedAt
    fromDate
    thruDate
    role
    location
    company {
      id
    }
    member {
      id
    }
  }
`
export const AdminCompanyDetailsFragmentDoc = gql`
  fragment AdminCompanyDetails on Company {
    id
    createdAt
    updatedAt
    name
    members {
      id
    }
  }
`
export const AdminIndustryDetailsFragmentDoc = gql`
  fragment AdminIndustryDetails on Industry {
    id
    createdAt
    updatedAt
    name
  }
`
export const AdminMeetingPresenceDetailsFragmentDoc = gql`
  fragment AdminMeetingPresenceDetails on MeetingPresence {
    id
    createdAt
    updatedAt
    attendance
    meeting {
      id
    }
    member {
      id
      name
    }
  }
`
export const AdminMeetingDetailsFragmentDoc = gql`
  fragment AdminMeetingDetails on Meeting {
    id
    createdAt
    updatedAt
    date
    chapter {
      id
      name
    }
    isVisitorDay
    presence {
      id
    }
    substitutes {
      id
    }
  }
`
export const AdminNotificationDetailsFragmentDoc = gql`
  fragment AdminNotificationDetails on Notification {
    id
    createdAt
    updatedAt
    read
    type
    message
    referenceId
    referenceType
    actor {
      id
      name
    }
    to {
      id
      name
    }
  }
`
export const AdminPowerHourDetailsFragmentDoc = gql`
  fragment AdminPowerHourDetails on PowerHour {
    id
    createdAt
    updatedAt
    date
    time
    details
    status
    from {
      id
      name
    }
    to {
      id
      name
    }
  }
`
export const AdminReferralDetailsFragmentDoc = gql`
  fragment AdminReferralDetails on Referral {
    id
    createdAt
    updatedAt
    referralDate
    rating
    firstName
    lastName
    email
    phone
    notes
    fromIndustry
    toIndustry
    sentBy {
      id
      name
    }
    from {
      id
      name
    }
    to {
      id
      name
    }
    fromChapter {
      id
      name
    }
    toChapter {
      id
      name
    }
    transactions {
      id
    }
  }
`
export const AdminRegionDetailsFragmentDoc = gql`
  fragment AdminRegionDetails on Region {
    id
    createdAt
    updatedAt
    name
    manager {
      id
      name
    }
    territory {
      id
      name
    }
    chapters {
      id
      name
    }
  }
`
export const AdminSubstituteGroupDetailsFragmentDoc = gql`
  fragment AdminSubstituteGroupDetails on SubstituteGroup {
    id
    createdAt
    updatedAt
    name
    chapters {
      id
      name
    }
  }
`
export const AdminSubstituteDetailsFragmentDoc = gql`
  fragment AdminSubstituteDetails on Substitute {
    id
    createdAt
    updatedAt
    meeting {
      id
    }
    invited {
      id
      name
    }
    sentBy {
      id
      name
    }
    substitute {
      id
      name
    }
  }
`
export const AdminTerritoryDetailsFragmentDoc = gql`
  fragment AdminTerritoryDetails on Territory {
    id
    createdAt
    updatedAt
    name
    manager {
      id
      name
    }
    regions {
      id
      name
    }
  }
`
export const AdminTestimonialDetailsFragmentDoc = gql`
  fragment AdminTestimonialDetails on Testimonial {
    id
    createdAt
    updatedAt
    text
    from {
      id
      name
    }
    to {
      id
      name
    }
  }
`
export const AdminTransactionDetailsFragmentDoc = gql`
  fragment AdminTransactionDetails on Transaction {
    id
    createdAt
    updatedAt
    date
    amount
    enteredBy
    enteredOn
    industry
    state
    chapter {
      id
      name
    }
    user {
      id
      name
    }
    referral {
      id
    }
  }
`
export const AdminUploadDetailsFragmentDoc = gql`
  fragment AdminUploadDetails on Upload {
    id
    createdAt
    updatedAt
    format
    originalFilename
    publicId
    resourceType
    secureUrl
    signature
    thumbnailUrl
    url
    type
    user {
      id
      name
    }
    chapter {
      id
      name
    }
  }
`
export const AdminUserDetailsFragmentDoc = gql`
  fragment AdminUserDetails on User {
    id
    createdAt
    updatedAt
    lastSeen
    onlineStatus
    status
    developer
    role
    email
    emailConfirmed
    username
    infusionsoftId
    firstName
    lastName
    name
    password
    passwordResetToken
    passwordResetExpires
    confirmEmailToken
    confirmEmailExpires
    showGravatar
    avatarUrl
    applicationDate
    inactiveDate
    inquiryDate
    membershipDate
    renewalDate
    terminationDate
    transferDate
    location
    phone
    bio
    facebook
    twitter
    youtube
    linkedin
    instagram
    website
    industry
    timeInIndustry
    address
    address2
    cell
    chapterTitle
    city
    comments
    company
    fax
    hear
    hearOther
    internalComments
    launchComplete
    mentorName
    merchantCircle
    multipleBusinesses
    multipleLocations
    numberOfEmployees
    organizer
    otherBusinesses
    otherLocations
    postcode
    promoter
    recognized
    salesAgentName
    state
    strategizer
    substitute
    tagline
    terminatedByName
    terminationComments
    terminationReason
    thinker
    title
    type
    vet
    notifyByEmail
    notifyBySMS
    notifyByWeb
    notifyByMobile
    chapter {
      id
    }
    companies {
      id
      name
    }
    notificationsReceived {
      id
    }
    notificationsReceived {
      id
    }
    powerHoursFrom {
      id
    }
    powerHoursTo {
      id
    }
    referralsSent {
      id
    }
    referralsFrom {
      id
    }
    referralsTo {
      id
    }
    reminderSentBy {
      id
    }
    reminderSentTo {
      id
    }
    substituteAccepted {
      id
    }
    substituteInvited {
      id
    }
    substitutesSentBy {
      id
    }
    testimonialsFrom {
      id
    }
    testimonialsto {
      id
    }
    transactions {
      id
    }
    regionManaged {
      id
      name
    }
    territoryManaged {
      id
      name
    }
    avatar {
      id
    }
    presence {
      id
    }
  }
`
export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    id
    firstName
    lastName
    avatarUrl
    email
    role
    developer
    isLeader
  }
`
export const UserTokenDetailsFragmentDoc = gql`
  fragment UserTokenDetails on UserToken {
    token
    user {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`
export const CorePagingDetailsFragmentDoc = gql`
  fragment CorePagingDetails on CorePaging {
    count
    take
    page
    skip
    total
  }
`
export const IntercomDetailsFragmentDoc = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const AdminCreateAttendanceReminderDocument = gql`
  mutation adminCreateAttendanceReminder($input: AdminCreateAttendanceReminderInput!) {
    createAttendanceReminder: adminCreateAttendanceReminder(input: $input) {
      ...AdminAttendanceReminderDetails
    }
  }
  ${AdminAttendanceReminderDetailsFragmentDoc}
`
export type AdminCreateAttendanceReminderMutationFn = Apollo.MutationFunction<
  AdminCreateAttendanceReminderMutation,
  AdminCreateAttendanceReminderMutationVariables
>

/**
 * __useAdminCreateAttendanceReminderMutation__
 *
 * To run a mutation, you first call `useAdminCreateAttendanceReminderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateAttendanceReminderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateAttendanceReminderMutation, { data, loading, error }] = useAdminCreateAttendanceReminderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateAttendanceReminderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AdminCreateAttendanceReminderMutation,
    AdminCreateAttendanceReminderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateAttendanceReminderMutation, AdminCreateAttendanceReminderMutationVariables>(
    AdminCreateAttendanceReminderDocument,
    options,
  )
}
export type AdminCreateAttendanceReminderMutationHookResult = ReturnType<
  typeof useAdminCreateAttendanceReminderMutation
>
export type AdminCreateAttendanceReminderMutationResult = Apollo.MutationResult<AdminCreateAttendanceReminderMutation>
export type AdminCreateAttendanceReminderMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateAttendanceReminderMutation,
  AdminCreateAttendanceReminderMutationVariables
>
export const AdminDeleteAttendanceReminderDocument = gql`
  mutation adminDeleteAttendanceReminder($attendanceReminderId: String!) {
    deleteAttendanceReminder: adminDeleteAttendanceReminder(attendanceReminderId: $attendanceReminderId) {
      id
    }
  }
`
export type AdminDeleteAttendanceReminderMutationFn = Apollo.MutationFunction<
  AdminDeleteAttendanceReminderMutation,
  AdminDeleteAttendanceReminderMutationVariables
>

/**
 * __useAdminDeleteAttendanceReminderMutation__
 *
 * To run a mutation, you first call `useAdminDeleteAttendanceReminderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteAttendanceReminderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteAttendanceReminderMutation, { data, loading, error }] = useAdminDeleteAttendanceReminderMutation({
 *   variables: {
 *      attendanceReminderId: // value for 'attendanceReminderId'
 *   },
 * });
 */
export function useAdminDeleteAttendanceReminderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AdminDeleteAttendanceReminderMutation,
    AdminDeleteAttendanceReminderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteAttendanceReminderMutation, AdminDeleteAttendanceReminderMutationVariables>(
    AdminDeleteAttendanceReminderDocument,
    options,
  )
}
export type AdminDeleteAttendanceReminderMutationHookResult = ReturnType<
  typeof useAdminDeleteAttendanceReminderMutation
>
export type AdminDeleteAttendanceReminderMutationResult = Apollo.MutationResult<AdminDeleteAttendanceReminderMutation>
export type AdminDeleteAttendanceReminderMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteAttendanceReminderMutation,
  AdminDeleteAttendanceReminderMutationVariables
>
export const AdminUpdateAttendanceReminderDocument = gql`
  mutation adminUpdateAttendanceReminder($attendanceReminderId: String!, $input: AdminUpdateAttendanceReminderInput!) {
    updateAttendanceReminder: adminUpdateAttendanceReminder(
      attendanceReminderId: $attendanceReminderId
      input: $input
    ) {
      ...AdminAttendanceReminderDetails
    }
  }
  ${AdminAttendanceReminderDetailsFragmentDoc}
`
export type AdminUpdateAttendanceReminderMutationFn = Apollo.MutationFunction<
  AdminUpdateAttendanceReminderMutation,
  AdminUpdateAttendanceReminderMutationVariables
>

/**
 * __useAdminUpdateAttendanceReminderMutation__
 *
 * To run a mutation, you first call `useAdminUpdateAttendanceReminderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateAttendanceReminderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateAttendanceReminderMutation, { data, loading, error }] = useAdminUpdateAttendanceReminderMutation({
 *   variables: {
 *      attendanceReminderId: // value for 'attendanceReminderId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateAttendanceReminderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AdminUpdateAttendanceReminderMutation,
    AdminUpdateAttendanceReminderMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateAttendanceReminderMutation, AdminUpdateAttendanceReminderMutationVariables>(
    AdminUpdateAttendanceReminderDocument,
    options,
  )
}
export type AdminUpdateAttendanceReminderMutationHookResult = ReturnType<
  typeof useAdminUpdateAttendanceReminderMutation
>
export type AdminUpdateAttendanceReminderMutationResult = Apollo.MutationResult<AdminUpdateAttendanceReminderMutation>
export type AdminUpdateAttendanceReminderMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateAttendanceReminderMutation,
  AdminUpdateAttendanceReminderMutationVariables
>
export const AdminAttendanceReminderDocument = gql`
  query AdminAttendanceReminder($attendanceReminderId: String!) {
    attendanceReminder: adminAttendanceReminder(attendanceReminderId: $attendanceReminderId) {
      ...AdminAttendanceReminderDetails
    }
  }
  ${AdminAttendanceReminderDetailsFragmentDoc}
`

/**
 * __useAdminAttendanceReminderQuery__
 *
 * To run a query within a React component, call `useAdminAttendanceReminderQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminAttendanceReminderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminAttendanceReminderQuery({
 *   variables: {
 *      attendanceReminderId: // value for 'attendanceReminderId'
 *   },
 * });
 */
export function useAdminAttendanceReminderQuery(
  baseOptions: Apollo.QueryHookOptions<AdminAttendanceReminderQuery, AdminAttendanceReminderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminAttendanceReminderQuery, AdminAttendanceReminderQueryVariables>(
    AdminAttendanceReminderDocument,
    options,
  )
}
export function useAdminAttendanceReminderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminAttendanceReminderQuery, AdminAttendanceReminderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminAttendanceReminderQuery, AdminAttendanceReminderQueryVariables>(
    AdminAttendanceReminderDocument,
    options,
  )
}
export type AdminAttendanceReminderQueryHookResult = ReturnType<typeof useAdminAttendanceReminderQuery>
export type AdminAttendanceReminderLazyQueryHookResult = ReturnType<typeof useAdminAttendanceReminderLazyQuery>
export type AdminAttendanceReminderQueryResult = Apollo.QueryResult<
  AdminAttendanceReminderQuery,
  AdminAttendanceReminderQueryVariables
>
export const AdminAttendanceRemindersDocument = gql`
  query AdminAttendanceReminders($input: AdminListAttendanceReminderInput) {
    attendanceReminders: adminAttendanceReminders(input: $input) {
      ...AdminAttendanceReminderDetails
    }
    counters: adminCountAttendanceReminders(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminAttendanceReminderDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminAttendanceRemindersQuery__
 *
 * To run a query within a React component, call `useAdminAttendanceRemindersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminAttendanceRemindersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminAttendanceRemindersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminAttendanceRemindersQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminAttendanceRemindersQuery, AdminAttendanceRemindersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminAttendanceRemindersQuery, AdminAttendanceRemindersQueryVariables>(
    AdminAttendanceRemindersDocument,
    options,
  )
}
export function useAdminAttendanceRemindersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminAttendanceRemindersQuery, AdminAttendanceRemindersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminAttendanceRemindersQuery, AdminAttendanceRemindersQueryVariables>(
    AdminAttendanceRemindersDocument,
    options,
  )
}
export type AdminAttendanceRemindersQueryHookResult = ReturnType<typeof useAdminAttendanceRemindersQuery>
export type AdminAttendanceRemindersLazyQueryHookResult = ReturnType<typeof useAdminAttendanceRemindersLazyQuery>
export type AdminAttendanceRemindersQueryResult = Apollo.QueryResult<
  AdminAttendanceRemindersQuery,
  AdminAttendanceRemindersQueryVariables
>
export const AdminAttendanceReminderPaginationDocument = gql`
  query AdminAttendanceReminderPagination($input: AdminListAttendanceReminderInput) {
    counters: adminCountAttendanceReminders(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminAttendanceReminderPaginationQuery__
 *
 * To run a query within a React component, call `useAdminAttendanceReminderPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminAttendanceReminderPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminAttendanceReminderPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminAttendanceReminderPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AdminAttendanceReminderPaginationQuery,
    AdminAttendanceReminderPaginationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminAttendanceReminderPaginationQuery, AdminAttendanceReminderPaginationQueryVariables>(
    AdminAttendanceReminderPaginationDocument,
    options,
  )
}
export function useAdminAttendanceReminderPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminAttendanceReminderPaginationQuery,
    AdminAttendanceReminderPaginationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminAttendanceReminderPaginationQuery, AdminAttendanceReminderPaginationQueryVariables>(
    AdminAttendanceReminderPaginationDocument,
    options,
  )
}
export type AdminAttendanceReminderPaginationQueryHookResult = ReturnType<
  typeof useAdminAttendanceReminderPaginationQuery
>
export type AdminAttendanceReminderPaginationLazyQueryHookResult = ReturnType<
  typeof useAdminAttendanceReminderPaginationLazyQuery
>
export type AdminAttendanceReminderPaginationQueryResult = Apollo.QueryResult<
  AdminAttendanceReminderPaginationQuery,
  AdminAttendanceReminderPaginationQueryVariables
>
export const AdminCreateChapterMemberDocument = gql`
  mutation adminCreateChapterMember($input: AdminCreateChapterMemberInput!) {
    createChapterMember: adminCreateChapterMember(input: $input) {
      ...AdminChapterMemberDetails
    }
  }
  ${AdminChapterMemberDetailsFragmentDoc}
`
export type AdminCreateChapterMemberMutationFn = Apollo.MutationFunction<
  AdminCreateChapterMemberMutation,
  AdminCreateChapterMemberMutationVariables
>

/**
 * __useAdminCreateChapterMemberMutation__
 *
 * To run a mutation, you first call `useAdminCreateChapterMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateChapterMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateChapterMemberMutation, { data, loading, error }] = useAdminCreateChapterMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateChapterMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateChapterMemberMutation, AdminCreateChapterMemberMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateChapterMemberMutation, AdminCreateChapterMemberMutationVariables>(
    AdminCreateChapterMemberDocument,
    options,
  )
}
export type AdminCreateChapterMemberMutationHookResult = ReturnType<typeof useAdminCreateChapterMemberMutation>
export type AdminCreateChapterMemberMutationResult = Apollo.MutationResult<AdminCreateChapterMemberMutation>
export type AdminCreateChapterMemberMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateChapterMemberMutation,
  AdminCreateChapterMemberMutationVariables
>
export const AdminDeleteChapterMemberDocument = gql`
  mutation adminDeleteChapterMember($chapterMemberId: String!) {
    deleteChapterMember: adminDeleteChapterMember(chapterMemberId: $chapterMemberId) {
      id
    }
  }
`
export type AdminDeleteChapterMemberMutationFn = Apollo.MutationFunction<
  AdminDeleteChapterMemberMutation,
  AdminDeleteChapterMemberMutationVariables
>

/**
 * __useAdminDeleteChapterMemberMutation__
 *
 * To run a mutation, you first call `useAdminDeleteChapterMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteChapterMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteChapterMemberMutation, { data, loading, error }] = useAdminDeleteChapterMemberMutation({
 *   variables: {
 *      chapterMemberId: // value for 'chapterMemberId'
 *   },
 * });
 */
export function useAdminDeleteChapterMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteChapterMemberMutation, AdminDeleteChapterMemberMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteChapterMemberMutation, AdminDeleteChapterMemberMutationVariables>(
    AdminDeleteChapterMemberDocument,
    options,
  )
}
export type AdminDeleteChapterMemberMutationHookResult = ReturnType<typeof useAdminDeleteChapterMemberMutation>
export type AdminDeleteChapterMemberMutationResult = Apollo.MutationResult<AdminDeleteChapterMemberMutation>
export type AdminDeleteChapterMemberMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteChapterMemberMutation,
  AdminDeleteChapterMemberMutationVariables
>
export const AdminUpdateChapterMemberDocument = gql`
  mutation adminUpdateChapterMember($chapterMemberId: String!, $input: AdminUpdateChapterMemberInput!) {
    updateChapterMember: adminUpdateChapterMember(chapterMemberId: $chapterMemberId, input: $input) {
      ...AdminChapterMemberDetails
    }
  }
  ${AdminChapterMemberDetailsFragmentDoc}
`
export type AdminUpdateChapterMemberMutationFn = Apollo.MutationFunction<
  AdminUpdateChapterMemberMutation,
  AdminUpdateChapterMemberMutationVariables
>

/**
 * __useAdminUpdateChapterMemberMutation__
 *
 * To run a mutation, you first call `useAdminUpdateChapterMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateChapterMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateChapterMemberMutation, { data, loading, error }] = useAdminUpdateChapterMemberMutation({
 *   variables: {
 *      chapterMemberId: // value for 'chapterMemberId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateChapterMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateChapterMemberMutation, AdminUpdateChapterMemberMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateChapterMemberMutation, AdminUpdateChapterMemberMutationVariables>(
    AdminUpdateChapterMemberDocument,
    options,
  )
}
export type AdminUpdateChapterMemberMutationHookResult = ReturnType<typeof useAdminUpdateChapterMemberMutation>
export type AdminUpdateChapterMemberMutationResult = Apollo.MutationResult<AdminUpdateChapterMemberMutation>
export type AdminUpdateChapterMemberMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateChapterMemberMutation,
  AdminUpdateChapterMemberMutationVariables
>
export const AdminChapterMemberDocument = gql`
  query AdminChapterMember($chapterMemberId: String!) {
    chapterMember: adminChapterMember(chapterMemberId: $chapterMemberId) {
      ...AdminChapterMemberDetails
    }
  }
  ${AdminChapterMemberDetailsFragmentDoc}
`

/**
 * __useAdminChapterMemberQuery__
 *
 * To run a query within a React component, call `useAdminChapterMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminChapterMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminChapterMemberQuery({
 *   variables: {
 *      chapterMemberId: // value for 'chapterMemberId'
 *   },
 * });
 */
export function useAdminChapterMemberQuery(
  baseOptions: Apollo.QueryHookOptions<AdminChapterMemberQuery, AdminChapterMemberQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminChapterMemberQuery, AdminChapterMemberQueryVariables>(AdminChapterMemberDocument, options)
}
export function useAdminChapterMemberLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminChapterMemberQuery, AdminChapterMemberQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminChapterMemberQuery, AdminChapterMemberQueryVariables>(
    AdminChapterMemberDocument,
    options,
  )
}
export type AdminChapterMemberQueryHookResult = ReturnType<typeof useAdminChapterMemberQuery>
export type AdminChapterMemberLazyQueryHookResult = ReturnType<typeof useAdminChapterMemberLazyQuery>
export type AdminChapterMemberQueryResult = Apollo.QueryResult<
  AdminChapterMemberQuery,
  AdminChapterMemberQueryVariables
>
export const AdminChapterMembersDocument = gql`
  query AdminChapterMembers($input: AdminListChapterMemberInput) {
    chapterMembers: adminChapterMembers(input: $input) {
      ...AdminChapterMemberDetails
    }
    counters: adminCountChapterMembers(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminChapterMemberDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminChapterMembersQuery__
 *
 * To run a query within a React component, call `useAdminChapterMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminChapterMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminChapterMembersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminChapterMembersQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminChapterMembersQuery, AdminChapterMembersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminChapterMembersQuery, AdminChapterMembersQueryVariables>(
    AdminChapterMembersDocument,
    options,
  )
}
export function useAdminChapterMembersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminChapterMembersQuery, AdminChapterMembersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminChapterMembersQuery, AdminChapterMembersQueryVariables>(
    AdminChapterMembersDocument,
    options,
  )
}
export type AdminChapterMembersQueryHookResult = ReturnType<typeof useAdminChapterMembersQuery>
export type AdminChapterMembersLazyQueryHookResult = ReturnType<typeof useAdminChapterMembersLazyQuery>
export type AdminChapterMembersQueryResult = Apollo.QueryResult<
  AdminChapterMembersQuery,
  AdminChapterMembersQueryVariables
>
export const AdminChapterMemberPaginationDocument = gql`
  query AdminChapterMemberPagination($input: AdminListChapterMemberInput) {
    counters: adminCountChapterMembers(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminChapterMemberPaginationQuery__
 *
 * To run a query within a React component, call `useAdminChapterMemberPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminChapterMemberPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminChapterMemberPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminChapterMemberPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminChapterMemberPaginationQuery, AdminChapterMemberPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminChapterMemberPaginationQuery, AdminChapterMemberPaginationQueryVariables>(
    AdminChapterMemberPaginationDocument,
    options,
  )
}
export function useAdminChapterMemberPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminChapterMemberPaginationQuery,
    AdminChapterMemberPaginationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminChapterMemberPaginationQuery, AdminChapterMemberPaginationQueryVariables>(
    AdminChapterMemberPaginationDocument,
    options,
  )
}
export type AdminChapterMemberPaginationQueryHookResult = ReturnType<typeof useAdminChapterMemberPaginationQuery>
export type AdminChapterMemberPaginationLazyQueryHookResult = ReturnType<
  typeof useAdminChapterMemberPaginationLazyQuery
>
export type AdminChapterMemberPaginationQueryResult = Apollo.QueryResult<
  AdminChapterMemberPaginationQuery,
  AdminChapterMemberPaginationQueryVariables
>
export const AdminCreateChapterDocument = gql`
  mutation adminCreateChapter($input: AdminCreateChapterInput!) {
    createChapter: adminCreateChapter(input: $input) {
      ...AdminChapterDetails
    }
  }
  ${AdminChapterDetailsFragmentDoc}
`
export type AdminCreateChapterMutationFn = Apollo.MutationFunction<
  AdminCreateChapterMutation,
  AdminCreateChapterMutationVariables
>

/**
 * __useAdminCreateChapterMutation__
 *
 * To run a mutation, you first call `useAdminCreateChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateChapterMutation, { data, loading, error }] = useAdminCreateChapterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateChapterMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateChapterMutation, AdminCreateChapterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateChapterMutation, AdminCreateChapterMutationVariables>(
    AdminCreateChapterDocument,
    options,
  )
}
export type AdminCreateChapterMutationHookResult = ReturnType<typeof useAdminCreateChapterMutation>
export type AdminCreateChapterMutationResult = Apollo.MutationResult<AdminCreateChapterMutation>
export type AdminCreateChapterMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateChapterMutation,
  AdminCreateChapterMutationVariables
>
export const AdminDeleteChapterDocument = gql`
  mutation adminDeleteChapter($chapterId: String!) {
    deleteChapter: adminDeleteChapter(chapterId: $chapterId) {
      id
    }
  }
`
export type AdminDeleteChapterMutationFn = Apollo.MutationFunction<
  AdminDeleteChapterMutation,
  AdminDeleteChapterMutationVariables
>

/**
 * __useAdminDeleteChapterMutation__
 *
 * To run a mutation, you first call `useAdminDeleteChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteChapterMutation, { data, loading, error }] = useAdminDeleteChapterMutation({
 *   variables: {
 *      chapterId: // value for 'chapterId'
 *   },
 * });
 */
export function useAdminDeleteChapterMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteChapterMutation, AdminDeleteChapterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteChapterMutation, AdminDeleteChapterMutationVariables>(
    AdminDeleteChapterDocument,
    options,
  )
}
export type AdminDeleteChapterMutationHookResult = ReturnType<typeof useAdminDeleteChapterMutation>
export type AdminDeleteChapterMutationResult = Apollo.MutationResult<AdminDeleteChapterMutation>
export type AdminDeleteChapterMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteChapterMutation,
  AdminDeleteChapterMutationVariables
>
export const AdminUpdateChapterDocument = gql`
  mutation adminUpdateChapter($chapterId: String!, $input: AdminUpdateChapterInput!) {
    updateChapter: adminUpdateChapter(chapterId: $chapterId, input: $input) {
      ...AdminChapterDetails
    }
  }
  ${AdminChapterDetailsFragmentDoc}
`
export type AdminUpdateChapterMutationFn = Apollo.MutationFunction<
  AdminUpdateChapterMutation,
  AdminUpdateChapterMutationVariables
>

/**
 * __useAdminUpdateChapterMutation__
 *
 * To run a mutation, you first call `useAdminUpdateChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateChapterMutation, { data, loading, error }] = useAdminUpdateChapterMutation({
 *   variables: {
 *      chapterId: // value for 'chapterId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateChapterMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateChapterMutation, AdminUpdateChapterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateChapterMutation, AdminUpdateChapterMutationVariables>(
    AdminUpdateChapterDocument,
    options,
  )
}
export type AdminUpdateChapterMutationHookResult = ReturnType<typeof useAdminUpdateChapterMutation>
export type AdminUpdateChapterMutationResult = Apollo.MutationResult<AdminUpdateChapterMutation>
export type AdminUpdateChapterMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateChapterMutation,
  AdminUpdateChapterMutationVariables
>
export const AdminChapterDocument = gql`
  query AdminChapter($chapterId: String!) {
    chapter: adminChapter(chapterId: $chapterId) {
      ...AdminChapterDetails
    }
  }
  ${AdminChapterDetailsFragmentDoc}
`

/**
 * __useAdminChapterQuery__
 *
 * To run a query within a React component, call `useAdminChapterQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminChapterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminChapterQuery({
 *   variables: {
 *      chapterId: // value for 'chapterId'
 *   },
 * });
 */
export function useAdminChapterQuery(
  baseOptions: Apollo.QueryHookOptions<AdminChapterQuery, AdminChapterQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminChapterQuery, AdminChapterQueryVariables>(AdminChapterDocument, options)
}
export function useAdminChapterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminChapterQuery, AdminChapterQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminChapterQuery, AdminChapterQueryVariables>(AdminChapterDocument, options)
}
export type AdminChapterQueryHookResult = ReturnType<typeof useAdminChapterQuery>
export type AdminChapterLazyQueryHookResult = ReturnType<typeof useAdminChapterLazyQuery>
export type AdminChapterQueryResult = Apollo.QueryResult<AdminChapterQuery, AdminChapterQueryVariables>
export const AdminChaptersDocument = gql`
  query AdminChapters($input: AdminListChapterInput) {
    chapters: adminChapters(input: $input) {
      ...AdminChapterDetails
    }
    counters: adminCountChapters(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminChapterDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminChaptersQuery__
 *
 * To run a query within a React component, call `useAdminChaptersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminChaptersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminChaptersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminChaptersQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminChaptersQuery, AdminChaptersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminChaptersQuery, AdminChaptersQueryVariables>(AdminChaptersDocument, options)
}
export function useAdminChaptersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminChaptersQuery, AdminChaptersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminChaptersQuery, AdminChaptersQueryVariables>(AdminChaptersDocument, options)
}
export type AdminChaptersQueryHookResult = ReturnType<typeof useAdminChaptersQuery>
export type AdminChaptersLazyQueryHookResult = ReturnType<typeof useAdminChaptersLazyQuery>
export type AdminChaptersQueryResult = Apollo.QueryResult<AdminChaptersQuery, AdminChaptersQueryVariables>
export const AdminChapterPaginationDocument = gql`
  query AdminChapterPagination($input: AdminListChapterInput) {
    counters: adminCountChapters(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminChapterPaginationQuery__
 *
 * To run a query within a React component, call `useAdminChapterPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminChapterPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminChapterPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminChapterPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminChapterPaginationQuery, AdminChapterPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminChapterPaginationQuery, AdminChapterPaginationQueryVariables>(
    AdminChapterPaginationDocument,
    options,
  )
}
export function useAdminChapterPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminChapterPaginationQuery, AdminChapterPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminChapterPaginationQuery, AdminChapterPaginationQueryVariables>(
    AdminChapterPaginationDocument,
    options,
  )
}
export type AdminChapterPaginationQueryHookResult = ReturnType<typeof useAdminChapterPaginationQuery>
export type AdminChapterPaginationLazyQueryHookResult = ReturnType<typeof useAdminChapterPaginationLazyQuery>
export type AdminChapterPaginationQueryResult = Apollo.QueryResult<
  AdminChapterPaginationQuery,
  AdminChapterPaginationQueryVariables
>
export const AdminCreateCompanyMemberDocument = gql`
  mutation adminCreateCompanyMember($input: AdminCreateCompanyMemberInput!) {
    createCompanyMember: adminCreateCompanyMember(input: $input) {
      ...AdminCompanyMemberDetails
    }
  }
  ${AdminCompanyMemberDetailsFragmentDoc}
`
export type AdminCreateCompanyMemberMutationFn = Apollo.MutationFunction<
  AdminCreateCompanyMemberMutation,
  AdminCreateCompanyMemberMutationVariables
>

/**
 * __useAdminCreateCompanyMemberMutation__
 *
 * To run a mutation, you first call `useAdminCreateCompanyMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateCompanyMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateCompanyMemberMutation, { data, loading, error }] = useAdminCreateCompanyMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateCompanyMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateCompanyMemberMutation, AdminCreateCompanyMemberMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateCompanyMemberMutation, AdminCreateCompanyMemberMutationVariables>(
    AdminCreateCompanyMemberDocument,
    options,
  )
}
export type AdminCreateCompanyMemberMutationHookResult = ReturnType<typeof useAdminCreateCompanyMemberMutation>
export type AdminCreateCompanyMemberMutationResult = Apollo.MutationResult<AdminCreateCompanyMemberMutation>
export type AdminCreateCompanyMemberMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateCompanyMemberMutation,
  AdminCreateCompanyMemberMutationVariables
>
export const AdminDeleteCompanyMemberDocument = gql`
  mutation adminDeleteCompanyMember($companyMemberId: String!) {
    deleteCompanyMember: adminDeleteCompanyMember(companyMemberId: $companyMemberId) {
      id
    }
  }
`
export type AdminDeleteCompanyMemberMutationFn = Apollo.MutationFunction<
  AdminDeleteCompanyMemberMutation,
  AdminDeleteCompanyMemberMutationVariables
>

/**
 * __useAdminDeleteCompanyMemberMutation__
 *
 * To run a mutation, you first call `useAdminDeleteCompanyMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteCompanyMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteCompanyMemberMutation, { data, loading, error }] = useAdminDeleteCompanyMemberMutation({
 *   variables: {
 *      companyMemberId: // value for 'companyMemberId'
 *   },
 * });
 */
export function useAdminDeleteCompanyMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteCompanyMemberMutation, AdminDeleteCompanyMemberMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteCompanyMemberMutation, AdminDeleteCompanyMemberMutationVariables>(
    AdminDeleteCompanyMemberDocument,
    options,
  )
}
export type AdminDeleteCompanyMemberMutationHookResult = ReturnType<typeof useAdminDeleteCompanyMemberMutation>
export type AdminDeleteCompanyMemberMutationResult = Apollo.MutationResult<AdminDeleteCompanyMemberMutation>
export type AdminDeleteCompanyMemberMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteCompanyMemberMutation,
  AdminDeleteCompanyMemberMutationVariables
>
export const AdminUpdateCompanyMemberDocument = gql`
  mutation adminUpdateCompanyMember($companyMemberId: String!, $input: AdminUpdateCompanyMemberInput!) {
    updateCompanyMember: adminUpdateCompanyMember(companyMemberId: $companyMemberId, input: $input) {
      ...AdminCompanyMemberDetails
    }
  }
  ${AdminCompanyMemberDetailsFragmentDoc}
`
export type AdminUpdateCompanyMemberMutationFn = Apollo.MutationFunction<
  AdminUpdateCompanyMemberMutation,
  AdminUpdateCompanyMemberMutationVariables
>

/**
 * __useAdminUpdateCompanyMemberMutation__
 *
 * To run a mutation, you first call `useAdminUpdateCompanyMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateCompanyMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateCompanyMemberMutation, { data, loading, error }] = useAdminUpdateCompanyMemberMutation({
 *   variables: {
 *      companyMemberId: // value for 'companyMemberId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateCompanyMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateCompanyMemberMutation, AdminUpdateCompanyMemberMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateCompanyMemberMutation, AdminUpdateCompanyMemberMutationVariables>(
    AdminUpdateCompanyMemberDocument,
    options,
  )
}
export type AdminUpdateCompanyMemberMutationHookResult = ReturnType<typeof useAdminUpdateCompanyMemberMutation>
export type AdminUpdateCompanyMemberMutationResult = Apollo.MutationResult<AdminUpdateCompanyMemberMutation>
export type AdminUpdateCompanyMemberMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateCompanyMemberMutation,
  AdminUpdateCompanyMemberMutationVariables
>
export const AdminCompanyMemberDocument = gql`
  query AdminCompanyMember($companyMemberId: String!) {
    companyMember: adminCompanyMember(companyMemberId: $companyMemberId) {
      ...AdminCompanyMemberDetails
    }
  }
  ${AdminCompanyMemberDetailsFragmentDoc}
`

/**
 * __useAdminCompanyMemberQuery__
 *
 * To run a query within a React component, call `useAdminCompanyMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminCompanyMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminCompanyMemberQuery({
 *   variables: {
 *      companyMemberId: // value for 'companyMemberId'
 *   },
 * });
 */
export function useAdminCompanyMemberQuery(
  baseOptions: Apollo.QueryHookOptions<AdminCompanyMemberQuery, AdminCompanyMemberQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminCompanyMemberQuery, AdminCompanyMemberQueryVariables>(AdminCompanyMemberDocument, options)
}
export function useAdminCompanyMemberLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminCompanyMemberQuery, AdminCompanyMemberQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminCompanyMemberQuery, AdminCompanyMemberQueryVariables>(
    AdminCompanyMemberDocument,
    options,
  )
}
export type AdminCompanyMemberQueryHookResult = ReturnType<typeof useAdminCompanyMemberQuery>
export type AdminCompanyMemberLazyQueryHookResult = ReturnType<typeof useAdminCompanyMemberLazyQuery>
export type AdminCompanyMemberQueryResult = Apollo.QueryResult<
  AdminCompanyMemberQuery,
  AdminCompanyMemberQueryVariables
>
export const AdminCompanyMembersDocument = gql`
  query AdminCompanyMembers($input: AdminListCompanyMemberInput) {
    companyMembers: adminCompanyMembers(input: $input) {
      ...AdminCompanyMemberDetails
    }
    counters: adminCountCompanyMembers(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminCompanyMemberDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminCompanyMembersQuery__
 *
 * To run a query within a React component, call `useAdminCompanyMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminCompanyMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminCompanyMembersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCompanyMembersQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminCompanyMembersQuery, AdminCompanyMembersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminCompanyMembersQuery, AdminCompanyMembersQueryVariables>(
    AdminCompanyMembersDocument,
    options,
  )
}
export function useAdminCompanyMembersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminCompanyMembersQuery, AdminCompanyMembersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminCompanyMembersQuery, AdminCompanyMembersQueryVariables>(
    AdminCompanyMembersDocument,
    options,
  )
}
export type AdminCompanyMembersQueryHookResult = ReturnType<typeof useAdminCompanyMembersQuery>
export type AdminCompanyMembersLazyQueryHookResult = ReturnType<typeof useAdminCompanyMembersLazyQuery>
export type AdminCompanyMembersQueryResult = Apollo.QueryResult<
  AdminCompanyMembersQuery,
  AdminCompanyMembersQueryVariables
>
export const AdminCompanyMemberPaginationDocument = gql`
  query AdminCompanyMemberPagination($input: AdminListCompanyMemberInput) {
    counters: adminCountCompanyMembers(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminCompanyMemberPaginationQuery__
 *
 * To run a query within a React component, call `useAdminCompanyMemberPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminCompanyMemberPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminCompanyMemberPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCompanyMemberPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminCompanyMemberPaginationQuery, AdminCompanyMemberPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminCompanyMemberPaginationQuery, AdminCompanyMemberPaginationQueryVariables>(
    AdminCompanyMemberPaginationDocument,
    options,
  )
}
export function useAdminCompanyMemberPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminCompanyMemberPaginationQuery,
    AdminCompanyMemberPaginationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminCompanyMemberPaginationQuery, AdminCompanyMemberPaginationQueryVariables>(
    AdminCompanyMemberPaginationDocument,
    options,
  )
}
export type AdminCompanyMemberPaginationQueryHookResult = ReturnType<typeof useAdminCompanyMemberPaginationQuery>
export type AdminCompanyMemberPaginationLazyQueryHookResult = ReturnType<
  typeof useAdminCompanyMemberPaginationLazyQuery
>
export type AdminCompanyMemberPaginationQueryResult = Apollo.QueryResult<
  AdminCompanyMemberPaginationQuery,
  AdminCompanyMemberPaginationQueryVariables
>
export const AdminCreateCompanyDocument = gql`
  mutation adminCreateCompany($input: AdminCreateCompanyInput!) {
    createCompany: adminCreateCompany(input: $input) {
      ...AdminCompanyDetails
    }
  }
  ${AdminCompanyDetailsFragmentDoc}
`
export type AdminCreateCompanyMutationFn = Apollo.MutationFunction<
  AdminCreateCompanyMutation,
  AdminCreateCompanyMutationVariables
>

/**
 * __useAdminCreateCompanyMutation__
 *
 * To run a mutation, you first call `useAdminCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateCompanyMutation, { data, loading, error }] = useAdminCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateCompanyMutation, AdminCreateCompanyMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateCompanyMutation, AdminCreateCompanyMutationVariables>(
    AdminCreateCompanyDocument,
    options,
  )
}
export type AdminCreateCompanyMutationHookResult = ReturnType<typeof useAdminCreateCompanyMutation>
export type AdminCreateCompanyMutationResult = Apollo.MutationResult<AdminCreateCompanyMutation>
export type AdminCreateCompanyMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateCompanyMutation,
  AdminCreateCompanyMutationVariables
>
export const AdminDeleteCompanyDocument = gql`
  mutation adminDeleteCompany($companyId: String!) {
    deleteCompany: adminDeleteCompany(companyId: $companyId) {
      id
    }
  }
`
export type AdminDeleteCompanyMutationFn = Apollo.MutationFunction<
  AdminDeleteCompanyMutation,
  AdminDeleteCompanyMutationVariables
>

/**
 * __useAdminDeleteCompanyMutation__
 *
 * To run a mutation, you first call `useAdminDeleteCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteCompanyMutation, { data, loading, error }] = useAdminDeleteCompanyMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useAdminDeleteCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteCompanyMutation, AdminDeleteCompanyMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteCompanyMutation, AdminDeleteCompanyMutationVariables>(
    AdminDeleteCompanyDocument,
    options,
  )
}
export type AdminDeleteCompanyMutationHookResult = ReturnType<typeof useAdminDeleteCompanyMutation>
export type AdminDeleteCompanyMutationResult = Apollo.MutationResult<AdminDeleteCompanyMutation>
export type AdminDeleteCompanyMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteCompanyMutation,
  AdminDeleteCompanyMutationVariables
>
export const AdminUpdateCompanyDocument = gql`
  mutation adminUpdateCompany($companyId: String!, $input: AdminUpdateCompanyInput!) {
    updateCompany: adminUpdateCompany(companyId: $companyId, input: $input) {
      ...AdminCompanyDetails
    }
  }
  ${AdminCompanyDetailsFragmentDoc}
`
export type AdminUpdateCompanyMutationFn = Apollo.MutationFunction<
  AdminUpdateCompanyMutation,
  AdminUpdateCompanyMutationVariables
>

/**
 * __useAdminUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useAdminUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateCompanyMutation, { data, loading, error }] = useAdminUpdateCompanyMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateCompanyMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateCompanyMutation, AdminUpdateCompanyMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateCompanyMutation, AdminUpdateCompanyMutationVariables>(
    AdminUpdateCompanyDocument,
    options,
  )
}
export type AdminUpdateCompanyMutationHookResult = ReturnType<typeof useAdminUpdateCompanyMutation>
export type AdminUpdateCompanyMutationResult = Apollo.MutationResult<AdminUpdateCompanyMutation>
export type AdminUpdateCompanyMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateCompanyMutation,
  AdminUpdateCompanyMutationVariables
>
export const AdminCompanyDocument = gql`
  query AdminCompany($companyId: String!) {
    company: adminCompany(companyId: $companyId) {
      ...AdminCompanyDetails
    }
  }
  ${AdminCompanyDetailsFragmentDoc}
`

/**
 * __useAdminCompanyQuery__
 *
 * To run a query within a React component, call `useAdminCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminCompanyQuery({
 *   variables: {
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useAdminCompanyQuery(
  baseOptions: Apollo.QueryHookOptions<AdminCompanyQuery, AdminCompanyQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminCompanyQuery, AdminCompanyQueryVariables>(AdminCompanyDocument, options)
}
export function useAdminCompanyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminCompanyQuery, AdminCompanyQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminCompanyQuery, AdminCompanyQueryVariables>(AdminCompanyDocument, options)
}
export type AdminCompanyQueryHookResult = ReturnType<typeof useAdminCompanyQuery>
export type AdminCompanyLazyQueryHookResult = ReturnType<typeof useAdminCompanyLazyQuery>
export type AdminCompanyQueryResult = Apollo.QueryResult<AdminCompanyQuery, AdminCompanyQueryVariables>
export const AdminCompaniesDocument = gql`
  query AdminCompanies($input: AdminListCompanyInput) {
    companies: adminCompanies(input: $input) {
      ...AdminCompanyDetails
    }
    counters: adminCountCompanies(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminCompanyDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminCompaniesQuery__
 *
 * To run a query within a React component, call `useAdminCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminCompaniesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCompaniesQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminCompaniesQuery, AdminCompaniesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminCompaniesQuery, AdminCompaniesQueryVariables>(AdminCompaniesDocument, options)
}
export function useAdminCompaniesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminCompaniesQuery, AdminCompaniesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminCompaniesQuery, AdminCompaniesQueryVariables>(AdminCompaniesDocument, options)
}
export type AdminCompaniesQueryHookResult = ReturnType<typeof useAdminCompaniesQuery>
export type AdminCompaniesLazyQueryHookResult = ReturnType<typeof useAdminCompaniesLazyQuery>
export type AdminCompaniesQueryResult = Apollo.QueryResult<AdminCompaniesQuery, AdminCompaniesQueryVariables>
export const AdminCompanyPaginationDocument = gql`
  query AdminCompanyPagination($input: AdminListCompanyInput) {
    counters: adminCountCompanies(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminCompanyPaginationQuery__
 *
 * To run a query within a React component, call `useAdminCompanyPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminCompanyPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminCompanyPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCompanyPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminCompanyPaginationQuery, AdminCompanyPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminCompanyPaginationQuery, AdminCompanyPaginationQueryVariables>(
    AdminCompanyPaginationDocument,
    options,
  )
}
export function useAdminCompanyPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminCompanyPaginationQuery, AdminCompanyPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminCompanyPaginationQuery, AdminCompanyPaginationQueryVariables>(
    AdminCompanyPaginationDocument,
    options,
  )
}
export type AdminCompanyPaginationQueryHookResult = ReturnType<typeof useAdminCompanyPaginationQuery>
export type AdminCompanyPaginationLazyQueryHookResult = ReturnType<typeof useAdminCompanyPaginationLazyQuery>
export type AdminCompanyPaginationQueryResult = Apollo.QueryResult<
  AdminCompanyPaginationQuery,
  AdminCompanyPaginationQueryVariables
>
export const AdminCreateIndustryDocument = gql`
  mutation adminCreateIndustry($input: AdminCreateIndustryInput!) {
    createIndustry: adminCreateIndustry(input: $input) {
      ...AdminIndustryDetails
    }
  }
  ${AdminIndustryDetailsFragmentDoc}
`
export type AdminCreateIndustryMutationFn = Apollo.MutationFunction<
  AdminCreateIndustryMutation,
  AdminCreateIndustryMutationVariables
>

/**
 * __useAdminCreateIndustryMutation__
 *
 * To run a mutation, you first call `useAdminCreateIndustryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateIndustryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateIndustryMutation, { data, loading, error }] = useAdminCreateIndustryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateIndustryMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateIndustryMutation, AdminCreateIndustryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateIndustryMutation, AdminCreateIndustryMutationVariables>(
    AdminCreateIndustryDocument,
    options,
  )
}
export type AdminCreateIndustryMutationHookResult = ReturnType<typeof useAdminCreateIndustryMutation>
export type AdminCreateIndustryMutationResult = Apollo.MutationResult<AdminCreateIndustryMutation>
export type AdminCreateIndustryMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateIndustryMutation,
  AdminCreateIndustryMutationVariables
>
export const AdminDeleteIndustryDocument = gql`
  mutation adminDeleteIndustry($industryId: String!) {
    deleteIndustry: adminDeleteIndustry(industryId: $industryId) {
      id
    }
  }
`
export type AdminDeleteIndustryMutationFn = Apollo.MutationFunction<
  AdminDeleteIndustryMutation,
  AdminDeleteIndustryMutationVariables
>

/**
 * __useAdminDeleteIndustryMutation__
 *
 * To run a mutation, you first call `useAdminDeleteIndustryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteIndustryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteIndustryMutation, { data, loading, error }] = useAdminDeleteIndustryMutation({
 *   variables: {
 *      industryId: // value for 'industryId'
 *   },
 * });
 */
export function useAdminDeleteIndustryMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteIndustryMutation, AdminDeleteIndustryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteIndustryMutation, AdminDeleteIndustryMutationVariables>(
    AdminDeleteIndustryDocument,
    options,
  )
}
export type AdminDeleteIndustryMutationHookResult = ReturnType<typeof useAdminDeleteIndustryMutation>
export type AdminDeleteIndustryMutationResult = Apollo.MutationResult<AdminDeleteIndustryMutation>
export type AdminDeleteIndustryMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteIndustryMutation,
  AdminDeleteIndustryMutationVariables
>
export const AdminUpdateIndustryDocument = gql`
  mutation adminUpdateIndustry($industryId: String!, $input: AdminUpdateIndustryInput!) {
    updateIndustry: adminUpdateIndustry(industryId: $industryId, input: $input) {
      ...AdminIndustryDetails
    }
  }
  ${AdminIndustryDetailsFragmentDoc}
`
export type AdminUpdateIndustryMutationFn = Apollo.MutationFunction<
  AdminUpdateIndustryMutation,
  AdminUpdateIndustryMutationVariables
>

/**
 * __useAdminUpdateIndustryMutation__
 *
 * To run a mutation, you first call `useAdminUpdateIndustryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateIndustryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateIndustryMutation, { data, loading, error }] = useAdminUpdateIndustryMutation({
 *   variables: {
 *      industryId: // value for 'industryId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateIndustryMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateIndustryMutation, AdminUpdateIndustryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateIndustryMutation, AdminUpdateIndustryMutationVariables>(
    AdminUpdateIndustryDocument,
    options,
  )
}
export type AdminUpdateIndustryMutationHookResult = ReturnType<typeof useAdminUpdateIndustryMutation>
export type AdminUpdateIndustryMutationResult = Apollo.MutationResult<AdminUpdateIndustryMutation>
export type AdminUpdateIndustryMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateIndustryMutation,
  AdminUpdateIndustryMutationVariables
>
export const AdminIndustryDocument = gql`
  query AdminIndustry($industryId: String!) {
    industry: adminIndustry(industryId: $industryId) {
      ...AdminIndustryDetails
    }
  }
  ${AdminIndustryDetailsFragmentDoc}
`

/**
 * __useAdminIndustryQuery__
 *
 * To run a query within a React component, call `useAdminIndustryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminIndustryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminIndustryQuery({
 *   variables: {
 *      industryId: // value for 'industryId'
 *   },
 * });
 */
export function useAdminIndustryQuery(
  baseOptions: Apollo.QueryHookOptions<AdminIndustryQuery, AdminIndustryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminIndustryQuery, AdminIndustryQueryVariables>(AdminIndustryDocument, options)
}
export function useAdminIndustryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminIndustryQuery, AdminIndustryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminIndustryQuery, AdminIndustryQueryVariables>(AdminIndustryDocument, options)
}
export type AdminIndustryQueryHookResult = ReturnType<typeof useAdminIndustryQuery>
export type AdminIndustryLazyQueryHookResult = ReturnType<typeof useAdminIndustryLazyQuery>
export type AdminIndustryQueryResult = Apollo.QueryResult<AdminIndustryQuery, AdminIndustryQueryVariables>
export const AdminIndustriesDocument = gql`
  query AdminIndustries($input: AdminListIndustryInput) {
    industries: adminIndustries(input: $input) {
      ...AdminIndustryDetails
    }
    counters: adminCountIndustries(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminIndustryDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminIndustriesQuery__
 *
 * To run a query within a React component, call `useAdminIndustriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminIndustriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminIndustriesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminIndustriesQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminIndustriesQuery, AdminIndustriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminIndustriesQuery, AdminIndustriesQueryVariables>(AdminIndustriesDocument, options)
}
export function useAdminIndustriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminIndustriesQuery, AdminIndustriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminIndustriesQuery, AdminIndustriesQueryVariables>(AdminIndustriesDocument, options)
}
export type AdminIndustriesQueryHookResult = ReturnType<typeof useAdminIndustriesQuery>
export type AdminIndustriesLazyQueryHookResult = ReturnType<typeof useAdminIndustriesLazyQuery>
export type AdminIndustriesQueryResult = Apollo.QueryResult<AdminIndustriesQuery, AdminIndustriesQueryVariables>
export const AdminIndustryPaginationDocument = gql`
  query AdminIndustryPagination($input: AdminListIndustryInput) {
    counters: adminCountIndustries(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminIndustryPaginationQuery__
 *
 * To run a query within a React component, call `useAdminIndustryPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminIndustryPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminIndustryPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminIndustryPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminIndustryPaginationQuery, AdminIndustryPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminIndustryPaginationQuery, AdminIndustryPaginationQueryVariables>(
    AdminIndustryPaginationDocument,
    options,
  )
}
export function useAdminIndustryPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminIndustryPaginationQuery, AdminIndustryPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminIndustryPaginationQuery, AdminIndustryPaginationQueryVariables>(
    AdminIndustryPaginationDocument,
    options,
  )
}
export type AdminIndustryPaginationQueryHookResult = ReturnType<typeof useAdminIndustryPaginationQuery>
export type AdminIndustryPaginationLazyQueryHookResult = ReturnType<typeof useAdminIndustryPaginationLazyQuery>
export type AdminIndustryPaginationQueryResult = Apollo.QueryResult<
  AdminIndustryPaginationQuery,
  AdminIndustryPaginationQueryVariables
>
export const AdminCreateMeetingPresenceDocument = gql`
  mutation adminCreateMeetingPresence($input: AdminCreateMeetingPresenceInput!) {
    createMeetingPresence: adminCreateMeetingPresence(input: $input) {
      ...AdminMeetingPresenceDetails
    }
  }
  ${AdminMeetingPresenceDetailsFragmentDoc}
`
export type AdminCreateMeetingPresenceMutationFn = Apollo.MutationFunction<
  AdminCreateMeetingPresenceMutation,
  AdminCreateMeetingPresenceMutationVariables
>

/**
 * __useAdminCreateMeetingPresenceMutation__
 *
 * To run a mutation, you first call `useAdminCreateMeetingPresenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateMeetingPresenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateMeetingPresenceMutation, { data, loading, error }] = useAdminCreateMeetingPresenceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateMeetingPresenceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AdminCreateMeetingPresenceMutation,
    AdminCreateMeetingPresenceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateMeetingPresenceMutation, AdminCreateMeetingPresenceMutationVariables>(
    AdminCreateMeetingPresenceDocument,
    options,
  )
}
export type AdminCreateMeetingPresenceMutationHookResult = ReturnType<typeof useAdminCreateMeetingPresenceMutation>
export type AdminCreateMeetingPresenceMutationResult = Apollo.MutationResult<AdminCreateMeetingPresenceMutation>
export type AdminCreateMeetingPresenceMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateMeetingPresenceMutation,
  AdminCreateMeetingPresenceMutationVariables
>
export const AdminDeleteMeetingPresenceDocument = gql`
  mutation adminDeleteMeetingPresence($meetingPresenceId: String!) {
    deleteMeetingPresence: adminDeleteMeetingPresence(meetingPresenceId: $meetingPresenceId) {
      id
    }
  }
`
export type AdminDeleteMeetingPresenceMutationFn = Apollo.MutationFunction<
  AdminDeleteMeetingPresenceMutation,
  AdminDeleteMeetingPresenceMutationVariables
>

/**
 * __useAdminDeleteMeetingPresenceMutation__
 *
 * To run a mutation, you first call `useAdminDeleteMeetingPresenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteMeetingPresenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteMeetingPresenceMutation, { data, loading, error }] = useAdminDeleteMeetingPresenceMutation({
 *   variables: {
 *      meetingPresenceId: // value for 'meetingPresenceId'
 *   },
 * });
 */
export function useAdminDeleteMeetingPresenceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AdminDeleteMeetingPresenceMutation,
    AdminDeleteMeetingPresenceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteMeetingPresenceMutation, AdminDeleteMeetingPresenceMutationVariables>(
    AdminDeleteMeetingPresenceDocument,
    options,
  )
}
export type AdminDeleteMeetingPresenceMutationHookResult = ReturnType<typeof useAdminDeleteMeetingPresenceMutation>
export type AdminDeleteMeetingPresenceMutationResult = Apollo.MutationResult<AdminDeleteMeetingPresenceMutation>
export type AdminDeleteMeetingPresenceMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteMeetingPresenceMutation,
  AdminDeleteMeetingPresenceMutationVariables
>
export const AdminUpdateMeetingPresenceDocument = gql`
  mutation adminUpdateMeetingPresence($meetingPresenceId: String!, $input: AdminUpdateMeetingPresenceInput!) {
    updateMeetingPresence: adminUpdateMeetingPresence(meetingPresenceId: $meetingPresenceId, input: $input) {
      ...AdminMeetingPresenceDetails
    }
  }
  ${AdminMeetingPresenceDetailsFragmentDoc}
`
export type AdminUpdateMeetingPresenceMutationFn = Apollo.MutationFunction<
  AdminUpdateMeetingPresenceMutation,
  AdminUpdateMeetingPresenceMutationVariables
>

/**
 * __useAdminUpdateMeetingPresenceMutation__
 *
 * To run a mutation, you first call `useAdminUpdateMeetingPresenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateMeetingPresenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateMeetingPresenceMutation, { data, loading, error }] = useAdminUpdateMeetingPresenceMutation({
 *   variables: {
 *      meetingPresenceId: // value for 'meetingPresenceId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateMeetingPresenceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AdminUpdateMeetingPresenceMutation,
    AdminUpdateMeetingPresenceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateMeetingPresenceMutation, AdminUpdateMeetingPresenceMutationVariables>(
    AdminUpdateMeetingPresenceDocument,
    options,
  )
}
export type AdminUpdateMeetingPresenceMutationHookResult = ReturnType<typeof useAdminUpdateMeetingPresenceMutation>
export type AdminUpdateMeetingPresenceMutationResult = Apollo.MutationResult<AdminUpdateMeetingPresenceMutation>
export type AdminUpdateMeetingPresenceMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateMeetingPresenceMutation,
  AdminUpdateMeetingPresenceMutationVariables
>
export const AdminMeetingPresenceDocument = gql`
  query AdminMeetingPresence($meetingPresenceId: String!) {
    meetingPresence: adminMeetingPresence(meetingPresenceId: $meetingPresenceId) {
      ...AdminMeetingPresenceDetails
    }
  }
  ${AdminMeetingPresenceDetailsFragmentDoc}
`

/**
 * __useAdminMeetingPresenceQuery__
 *
 * To run a query within a React component, call `useAdminMeetingPresenceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminMeetingPresenceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminMeetingPresenceQuery({
 *   variables: {
 *      meetingPresenceId: // value for 'meetingPresenceId'
 *   },
 * });
 */
export function useAdminMeetingPresenceQuery(
  baseOptions: Apollo.QueryHookOptions<AdminMeetingPresenceQuery, AdminMeetingPresenceQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminMeetingPresenceQuery, AdminMeetingPresenceQueryVariables>(
    AdminMeetingPresenceDocument,
    options,
  )
}
export function useAdminMeetingPresenceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminMeetingPresenceQuery, AdminMeetingPresenceQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminMeetingPresenceQuery, AdminMeetingPresenceQueryVariables>(
    AdminMeetingPresenceDocument,
    options,
  )
}
export type AdminMeetingPresenceQueryHookResult = ReturnType<typeof useAdminMeetingPresenceQuery>
export type AdminMeetingPresenceLazyQueryHookResult = ReturnType<typeof useAdminMeetingPresenceLazyQuery>
export type AdminMeetingPresenceQueryResult = Apollo.QueryResult<
  AdminMeetingPresenceQuery,
  AdminMeetingPresenceQueryVariables
>
export const AdminMeetingPresencesDocument = gql`
  query AdminMeetingPresences($input: AdminListMeetingPresenceInput) {
    meetingPresences: adminMeetingPresences(input: $input) {
      ...AdminMeetingPresenceDetails
    }
    counters: adminCountMeetingPresences(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminMeetingPresenceDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminMeetingPresencesQuery__
 *
 * To run a query within a React component, call `useAdminMeetingPresencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminMeetingPresencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminMeetingPresencesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminMeetingPresencesQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminMeetingPresencesQuery, AdminMeetingPresencesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminMeetingPresencesQuery, AdminMeetingPresencesQueryVariables>(
    AdminMeetingPresencesDocument,
    options,
  )
}
export function useAdminMeetingPresencesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminMeetingPresencesQuery, AdminMeetingPresencesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminMeetingPresencesQuery, AdminMeetingPresencesQueryVariables>(
    AdminMeetingPresencesDocument,
    options,
  )
}
export type AdminMeetingPresencesQueryHookResult = ReturnType<typeof useAdminMeetingPresencesQuery>
export type AdminMeetingPresencesLazyQueryHookResult = ReturnType<typeof useAdminMeetingPresencesLazyQuery>
export type AdminMeetingPresencesQueryResult = Apollo.QueryResult<
  AdminMeetingPresencesQuery,
  AdminMeetingPresencesQueryVariables
>
export const AdminMeetingPresencePaginationDocument = gql`
  query AdminMeetingPresencePagination($input: AdminListMeetingPresenceInput) {
    counters: adminCountMeetingPresences(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminMeetingPresencePaginationQuery__
 *
 * To run a query within a React component, call `useAdminMeetingPresencePaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminMeetingPresencePaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminMeetingPresencePaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminMeetingPresencePaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AdminMeetingPresencePaginationQuery,
    AdminMeetingPresencePaginationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminMeetingPresencePaginationQuery, AdminMeetingPresencePaginationQueryVariables>(
    AdminMeetingPresencePaginationDocument,
    options,
  )
}
export function useAdminMeetingPresencePaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminMeetingPresencePaginationQuery,
    AdminMeetingPresencePaginationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminMeetingPresencePaginationQuery, AdminMeetingPresencePaginationQueryVariables>(
    AdminMeetingPresencePaginationDocument,
    options,
  )
}
export type AdminMeetingPresencePaginationQueryHookResult = ReturnType<typeof useAdminMeetingPresencePaginationQuery>
export type AdminMeetingPresencePaginationLazyQueryHookResult = ReturnType<
  typeof useAdminMeetingPresencePaginationLazyQuery
>
export type AdminMeetingPresencePaginationQueryResult = Apollo.QueryResult<
  AdminMeetingPresencePaginationQuery,
  AdminMeetingPresencePaginationQueryVariables
>
export const AdminCreateMeetingDocument = gql`
  mutation adminCreateMeeting($input: AdminCreateMeetingInput!) {
    createMeeting: adminCreateMeeting(input: $input) {
      ...AdminMeetingDetails
    }
  }
  ${AdminMeetingDetailsFragmentDoc}
`
export type AdminCreateMeetingMutationFn = Apollo.MutationFunction<
  AdminCreateMeetingMutation,
  AdminCreateMeetingMutationVariables
>

/**
 * __useAdminCreateMeetingMutation__
 *
 * To run a mutation, you first call `useAdminCreateMeetingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateMeetingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateMeetingMutation, { data, loading, error }] = useAdminCreateMeetingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateMeetingMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateMeetingMutation, AdminCreateMeetingMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateMeetingMutation, AdminCreateMeetingMutationVariables>(
    AdminCreateMeetingDocument,
    options,
  )
}
export type AdminCreateMeetingMutationHookResult = ReturnType<typeof useAdminCreateMeetingMutation>
export type AdminCreateMeetingMutationResult = Apollo.MutationResult<AdminCreateMeetingMutation>
export type AdminCreateMeetingMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateMeetingMutation,
  AdminCreateMeetingMutationVariables
>
export const AdminDeleteMeetingDocument = gql`
  mutation adminDeleteMeeting($meetingId: String!) {
    deleteMeeting: adminDeleteMeeting(meetingId: $meetingId) {
      id
    }
  }
`
export type AdminDeleteMeetingMutationFn = Apollo.MutationFunction<
  AdminDeleteMeetingMutation,
  AdminDeleteMeetingMutationVariables
>

/**
 * __useAdminDeleteMeetingMutation__
 *
 * To run a mutation, you first call `useAdminDeleteMeetingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteMeetingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteMeetingMutation, { data, loading, error }] = useAdminDeleteMeetingMutation({
 *   variables: {
 *      meetingId: // value for 'meetingId'
 *   },
 * });
 */
export function useAdminDeleteMeetingMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteMeetingMutation, AdminDeleteMeetingMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteMeetingMutation, AdminDeleteMeetingMutationVariables>(
    AdminDeleteMeetingDocument,
    options,
  )
}
export type AdminDeleteMeetingMutationHookResult = ReturnType<typeof useAdminDeleteMeetingMutation>
export type AdminDeleteMeetingMutationResult = Apollo.MutationResult<AdminDeleteMeetingMutation>
export type AdminDeleteMeetingMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteMeetingMutation,
  AdminDeleteMeetingMutationVariables
>
export const AdminUpdateMeetingDocument = gql`
  mutation adminUpdateMeeting($meetingId: String!, $input: AdminUpdateMeetingInput!) {
    updateMeeting: adminUpdateMeeting(meetingId: $meetingId, input: $input) {
      ...AdminMeetingDetails
    }
  }
  ${AdminMeetingDetailsFragmentDoc}
`
export type AdminUpdateMeetingMutationFn = Apollo.MutationFunction<
  AdminUpdateMeetingMutation,
  AdminUpdateMeetingMutationVariables
>

/**
 * __useAdminUpdateMeetingMutation__
 *
 * To run a mutation, you first call `useAdminUpdateMeetingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateMeetingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateMeetingMutation, { data, loading, error }] = useAdminUpdateMeetingMutation({
 *   variables: {
 *      meetingId: // value for 'meetingId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateMeetingMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateMeetingMutation, AdminUpdateMeetingMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateMeetingMutation, AdminUpdateMeetingMutationVariables>(
    AdminUpdateMeetingDocument,
    options,
  )
}
export type AdminUpdateMeetingMutationHookResult = ReturnType<typeof useAdminUpdateMeetingMutation>
export type AdminUpdateMeetingMutationResult = Apollo.MutationResult<AdminUpdateMeetingMutation>
export type AdminUpdateMeetingMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateMeetingMutation,
  AdminUpdateMeetingMutationVariables
>
export const AdminMeetingDocument = gql`
  query AdminMeeting($meetingId: String!) {
    meeting: adminMeeting(meetingId: $meetingId) {
      ...AdminMeetingDetails
    }
  }
  ${AdminMeetingDetailsFragmentDoc}
`

/**
 * __useAdminMeetingQuery__
 *
 * To run a query within a React component, call `useAdminMeetingQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminMeetingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminMeetingQuery({
 *   variables: {
 *      meetingId: // value for 'meetingId'
 *   },
 * });
 */
export function useAdminMeetingQuery(
  baseOptions: Apollo.QueryHookOptions<AdminMeetingQuery, AdminMeetingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminMeetingQuery, AdminMeetingQueryVariables>(AdminMeetingDocument, options)
}
export function useAdminMeetingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminMeetingQuery, AdminMeetingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminMeetingQuery, AdminMeetingQueryVariables>(AdminMeetingDocument, options)
}
export type AdminMeetingQueryHookResult = ReturnType<typeof useAdminMeetingQuery>
export type AdminMeetingLazyQueryHookResult = ReturnType<typeof useAdminMeetingLazyQuery>
export type AdminMeetingQueryResult = Apollo.QueryResult<AdminMeetingQuery, AdminMeetingQueryVariables>
export const AdminMeetingsDocument = gql`
  query AdminMeetings($input: AdminListMeetingInput) {
    meetings: adminMeetings(input: $input) {
      ...AdminMeetingDetails
    }
    counters: adminCountMeetings(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminMeetingDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminMeetingsQuery__
 *
 * To run a query within a React component, call `useAdminMeetingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminMeetingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminMeetingsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminMeetingsQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminMeetingsQuery, AdminMeetingsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminMeetingsQuery, AdminMeetingsQueryVariables>(AdminMeetingsDocument, options)
}
export function useAdminMeetingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminMeetingsQuery, AdminMeetingsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminMeetingsQuery, AdminMeetingsQueryVariables>(AdminMeetingsDocument, options)
}
export type AdminMeetingsQueryHookResult = ReturnType<typeof useAdminMeetingsQuery>
export type AdminMeetingsLazyQueryHookResult = ReturnType<typeof useAdminMeetingsLazyQuery>
export type AdminMeetingsQueryResult = Apollo.QueryResult<AdminMeetingsQuery, AdminMeetingsQueryVariables>
export const AdminMeetingPaginationDocument = gql`
  query AdminMeetingPagination($input: AdminListMeetingInput) {
    counters: adminCountMeetings(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminMeetingPaginationQuery__
 *
 * To run a query within a React component, call `useAdminMeetingPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminMeetingPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminMeetingPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminMeetingPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminMeetingPaginationQuery, AdminMeetingPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminMeetingPaginationQuery, AdminMeetingPaginationQueryVariables>(
    AdminMeetingPaginationDocument,
    options,
  )
}
export function useAdminMeetingPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminMeetingPaginationQuery, AdminMeetingPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminMeetingPaginationQuery, AdminMeetingPaginationQueryVariables>(
    AdminMeetingPaginationDocument,
    options,
  )
}
export type AdminMeetingPaginationQueryHookResult = ReturnType<typeof useAdminMeetingPaginationQuery>
export type AdminMeetingPaginationLazyQueryHookResult = ReturnType<typeof useAdminMeetingPaginationLazyQuery>
export type AdminMeetingPaginationQueryResult = Apollo.QueryResult<
  AdminMeetingPaginationQuery,
  AdminMeetingPaginationQueryVariables
>
export const AdminCreateNotificationDocument = gql`
  mutation adminCreateNotification($input: AdminCreateNotificationInput!) {
    createNotification: adminCreateNotification(input: $input) {
      ...AdminNotificationDetails
    }
  }
  ${AdminNotificationDetailsFragmentDoc}
`
export type AdminCreateNotificationMutationFn = Apollo.MutationFunction<
  AdminCreateNotificationMutation,
  AdminCreateNotificationMutationVariables
>

/**
 * __useAdminCreateNotificationMutation__
 *
 * To run a mutation, you first call `useAdminCreateNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateNotificationMutation, { data, loading, error }] = useAdminCreateNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateNotificationMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateNotificationMutation, AdminCreateNotificationMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateNotificationMutation, AdminCreateNotificationMutationVariables>(
    AdminCreateNotificationDocument,
    options,
  )
}
export type AdminCreateNotificationMutationHookResult = ReturnType<typeof useAdminCreateNotificationMutation>
export type AdminCreateNotificationMutationResult = Apollo.MutationResult<AdminCreateNotificationMutation>
export type AdminCreateNotificationMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateNotificationMutation,
  AdminCreateNotificationMutationVariables
>
export const AdminDeleteNotificationDocument = gql`
  mutation adminDeleteNotification($notificationId: String!) {
    deleteNotification: adminDeleteNotification(notificationId: $notificationId) {
      id
    }
  }
`
export type AdminDeleteNotificationMutationFn = Apollo.MutationFunction<
  AdminDeleteNotificationMutation,
  AdminDeleteNotificationMutationVariables
>

/**
 * __useAdminDeleteNotificationMutation__
 *
 * To run a mutation, you first call `useAdminDeleteNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteNotificationMutation, { data, loading, error }] = useAdminDeleteNotificationMutation({
 *   variables: {
 *      notificationId: // value for 'notificationId'
 *   },
 * });
 */
export function useAdminDeleteNotificationMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteNotificationMutation, AdminDeleteNotificationMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteNotificationMutation, AdminDeleteNotificationMutationVariables>(
    AdminDeleteNotificationDocument,
    options,
  )
}
export type AdminDeleteNotificationMutationHookResult = ReturnType<typeof useAdminDeleteNotificationMutation>
export type AdminDeleteNotificationMutationResult = Apollo.MutationResult<AdminDeleteNotificationMutation>
export type AdminDeleteNotificationMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteNotificationMutation,
  AdminDeleteNotificationMutationVariables
>
export const AdminUpdateNotificationDocument = gql`
  mutation adminUpdateNotification($notificationId: String!, $input: AdminUpdateNotificationInput!) {
    updateNotification: adminUpdateNotification(notificationId: $notificationId, input: $input) {
      ...AdminNotificationDetails
    }
  }
  ${AdminNotificationDetailsFragmentDoc}
`
export type AdminUpdateNotificationMutationFn = Apollo.MutationFunction<
  AdminUpdateNotificationMutation,
  AdminUpdateNotificationMutationVariables
>

/**
 * __useAdminUpdateNotificationMutation__
 *
 * To run a mutation, you first call `useAdminUpdateNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateNotificationMutation, { data, loading, error }] = useAdminUpdateNotificationMutation({
 *   variables: {
 *      notificationId: // value for 'notificationId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateNotificationMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateNotificationMutation, AdminUpdateNotificationMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateNotificationMutation, AdminUpdateNotificationMutationVariables>(
    AdminUpdateNotificationDocument,
    options,
  )
}
export type AdminUpdateNotificationMutationHookResult = ReturnType<typeof useAdminUpdateNotificationMutation>
export type AdminUpdateNotificationMutationResult = Apollo.MutationResult<AdminUpdateNotificationMutation>
export type AdminUpdateNotificationMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateNotificationMutation,
  AdminUpdateNotificationMutationVariables
>
export const AdminNotificationDocument = gql`
  query AdminNotification($notificationId: String!) {
    notification: adminNotification(notificationId: $notificationId) {
      ...AdminNotificationDetails
    }
  }
  ${AdminNotificationDetailsFragmentDoc}
`

/**
 * __useAdminNotificationQuery__
 *
 * To run a query within a React component, call `useAdminNotificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminNotificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminNotificationQuery({
 *   variables: {
 *      notificationId: // value for 'notificationId'
 *   },
 * });
 */
export function useAdminNotificationQuery(
  baseOptions: Apollo.QueryHookOptions<AdminNotificationQuery, AdminNotificationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminNotificationQuery, AdminNotificationQueryVariables>(AdminNotificationDocument, options)
}
export function useAdminNotificationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminNotificationQuery, AdminNotificationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminNotificationQuery, AdminNotificationQueryVariables>(
    AdminNotificationDocument,
    options,
  )
}
export type AdminNotificationQueryHookResult = ReturnType<typeof useAdminNotificationQuery>
export type AdminNotificationLazyQueryHookResult = ReturnType<typeof useAdminNotificationLazyQuery>
export type AdminNotificationQueryResult = Apollo.QueryResult<AdminNotificationQuery, AdminNotificationQueryVariables>
export const AdminNotificationsDocument = gql`
  query AdminNotifications($input: AdminListNotificationInput) {
    notifications: adminNotifications(input: $input) {
      ...AdminNotificationDetails
    }
    counters: adminCountNotifications(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminNotificationDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminNotificationsQuery__
 *
 * To run a query within a React component, call `useAdminNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminNotificationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminNotificationsQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminNotificationsQuery, AdminNotificationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminNotificationsQuery, AdminNotificationsQueryVariables>(AdminNotificationsDocument, options)
}
export function useAdminNotificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminNotificationsQuery, AdminNotificationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminNotificationsQuery, AdminNotificationsQueryVariables>(
    AdminNotificationsDocument,
    options,
  )
}
export type AdminNotificationsQueryHookResult = ReturnType<typeof useAdminNotificationsQuery>
export type AdminNotificationsLazyQueryHookResult = ReturnType<typeof useAdminNotificationsLazyQuery>
export type AdminNotificationsQueryResult = Apollo.QueryResult<
  AdminNotificationsQuery,
  AdminNotificationsQueryVariables
>
export const AdminNotificationPaginationDocument = gql`
  query AdminNotificationPagination($input: AdminListNotificationInput) {
    counters: adminCountNotifications(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminNotificationPaginationQuery__
 *
 * To run a query within a React component, call `useAdminNotificationPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminNotificationPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminNotificationPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminNotificationPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminNotificationPaginationQuery, AdminNotificationPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminNotificationPaginationQuery, AdminNotificationPaginationQueryVariables>(
    AdminNotificationPaginationDocument,
    options,
  )
}
export function useAdminNotificationPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminNotificationPaginationQuery,
    AdminNotificationPaginationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminNotificationPaginationQuery, AdminNotificationPaginationQueryVariables>(
    AdminNotificationPaginationDocument,
    options,
  )
}
export type AdminNotificationPaginationQueryHookResult = ReturnType<typeof useAdminNotificationPaginationQuery>
export type AdminNotificationPaginationLazyQueryHookResult = ReturnType<typeof useAdminNotificationPaginationLazyQuery>
export type AdminNotificationPaginationQueryResult = Apollo.QueryResult<
  AdminNotificationPaginationQuery,
  AdminNotificationPaginationQueryVariables
>
export const AdminCreatePowerHourDocument = gql`
  mutation adminCreatePowerHour($input: AdminCreatePowerHourInput!) {
    createPowerHour: adminCreatePowerHour(input: $input) {
      ...AdminPowerHourDetails
    }
  }
  ${AdminPowerHourDetailsFragmentDoc}
`
export type AdminCreatePowerHourMutationFn = Apollo.MutationFunction<
  AdminCreatePowerHourMutation,
  AdminCreatePowerHourMutationVariables
>

/**
 * __useAdminCreatePowerHourMutation__
 *
 * To run a mutation, you first call `useAdminCreatePowerHourMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreatePowerHourMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreatePowerHourMutation, { data, loading, error }] = useAdminCreatePowerHourMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreatePowerHourMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreatePowerHourMutation, AdminCreatePowerHourMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreatePowerHourMutation, AdminCreatePowerHourMutationVariables>(
    AdminCreatePowerHourDocument,
    options,
  )
}
export type AdminCreatePowerHourMutationHookResult = ReturnType<typeof useAdminCreatePowerHourMutation>
export type AdminCreatePowerHourMutationResult = Apollo.MutationResult<AdminCreatePowerHourMutation>
export type AdminCreatePowerHourMutationOptions = Apollo.BaseMutationOptions<
  AdminCreatePowerHourMutation,
  AdminCreatePowerHourMutationVariables
>
export const AdminDeletePowerHourDocument = gql`
  mutation adminDeletePowerHour($powerHourId: String!) {
    deletePowerHour: adminDeletePowerHour(powerHourId: $powerHourId) {
      id
    }
  }
`
export type AdminDeletePowerHourMutationFn = Apollo.MutationFunction<
  AdminDeletePowerHourMutation,
  AdminDeletePowerHourMutationVariables
>

/**
 * __useAdminDeletePowerHourMutation__
 *
 * To run a mutation, you first call `useAdminDeletePowerHourMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeletePowerHourMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeletePowerHourMutation, { data, loading, error }] = useAdminDeletePowerHourMutation({
 *   variables: {
 *      powerHourId: // value for 'powerHourId'
 *   },
 * });
 */
export function useAdminDeletePowerHourMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeletePowerHourMutation, AdminDeletePowerHourMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeletePowerHourMutation, AdminDeletePowerHourMutationVariables>(
    AdminDeletePowerHourDocument,
    options,
  )
}
export type AdminDeletePowerHourMutationHookResult = ReturnType<typeof useAdminDeletePowerHourMutation>
export type AdminDeletePowerHourMutationResult = Apollo.MutationResult<AdminDeletePowerHourMutation>
export type AdminDeletePowerHourMutationOptions = Apollo.BaseMutationOptions<
  AdminDeletePowerHourMutation,
  AdminDeletePowerHourMutationVariables
>
export const AdminUpdatePowerHourDocument = gql`
  mutation adminUpdatePowerHour($powerHourId: String!, $input: AdminUpdatePowerHourInput!) {
    updatePowerHour: adminUpdatePowerHour(powerHourId: $powerHourId, input: $input) {
      ...AdminPowerHourDetails
    }
  }
  ${AdminPowerHourDetailsFragmentDoc}
`
export type AdminUpdatePowerHourMutationFn = Apollo.MutationFunction<
  AdminUpdatePowerHourMutation,
  AdminUpdatePowerHourMutationVariables
>

/**
 * __useAdminUpdatePowerHourMutation__
 *
 * To run a mutation, you first call `useAdminUpdatePowerHourMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdatePowerHourMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdatePowerHourMutation, { data, loading, error }] = useAdminUpdatePowerHourMutation({
 *   variables: {
 *      powerHourId: // value for 'powerHourId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdatePowerHourMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdatePowerHourMutation, AdminUpdatePowerHourMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdatePowerHourMutation, AdminUpdatePowerHourMutationVariables>(
    AdminUpdatePowerHourDocument,
    options,
  )
}
export type AdminUpdatePowerHourMutationHookResult = ReturnType<typeof useAdminUpdatePowerHourMutation>
export type AdminUpdatePowerHourMutationResult = Apollo.MutationResult<AdminUpdatePowerHourMutation>
export type AdminUpdatePowerHourMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdatePowerHourMutation,
  AdminUpdatePowerHourMutationVariables
>
export const AdminPowerHourDocument = gql`
  query AdminPowerHour($powerHourId: String!) {
    powerHour: adminPowerHour(powerHourId: $powerHourId) {
      ...AdminPowerHourDetails
    }
  }
  ${AdminPowerHourDetailsFragmentDoc}
`

/**
 * __useAdminPowerHourQuery__
 *
 * To run a query within a React component, call `useAdminPowerHourQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPowerHourQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPowerHourQuery({
 *   variables: {
 *      powerHourId: // value for 'powerHourId'
 *   },
 * });
 */
export function useAdminPowerHourQuery(
  baseOptions: Apollo.QueryHookOptions<AdminPowerHourQuery, AdminPowerHourQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminPowerHourQuery, AdminPowerHourQueryVariables>(AdminPowerHourDocument, options)
}
export function useAdminPowerHourLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminPowerHourQuery, AdminPowerHourQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminPowerHourQuery, AdminPowerHourQueryVariables>(AdminPowerHourDocument, options)
}
export type AdminPowerHourQueryHookResult = ReturnType<typeof useAdminPowerHourQuery>
export type AdminPowerHourLazyQueryHookResult = ReturnType<typeof useAdminPowerHourLazyQuery>
export type AdminPowerHourQueryResult = Apollo.QueryResult<AdminPowerHourQuery, AdminPowerHourQueryVariables>
export const AdminPowerHoursDocument = gql`
  query AdminPowerHours($input: AdminListPowerHourInput) {
    powerHours: adminPowerHours(input: $input) {
      ...AdminPowerHourDetails
    }
    counters: adminCountPowerHours(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminPowerHourDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminPowerHoursQuery__
 *
 * To run a query within a React component, call `useAdminPowerHoursQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPowerHoursQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPowerHoursQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminPowerHoursQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminPowerHoursQuery, AdminPowerHoursQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminPowerHoursQuery, AdminPowerHoursQueryVariables>(AdminPowerHoursDocument, options)
}
export function useAdminPowerHoursLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminPowerHoursQuery, AdminPowerHoursQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminPowerHoursQuery, AdminPowerHoursQueryVariables>(AdminPowerHoursDocument, options)
}
export type AdminPowerHoursQueryHookResult = ReturnType<typeof useAdminPowerHoursQuery>
export type AdminPowerHoursLazyQueryHookResult = ReturnType<typeof useAdminPowerHoursLazyQuery>
export type AdminPowerHoursQueryResult = Apollo.QueryResult<AdminPowerHoursQuery, AdminPowerHoursQueryVariables>
export const AdminPowerHourPaginationDocument = gql`
  query AdminPowerHourPagination($input: AdminListPowerHourInput) {
    counters: adminCountPowerHours(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminPowerHourPaginationQuery__
 *
 * To run a query within a React component, call `useAdminPowerHourPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminPowerHourPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminPowerHourPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminPowerHourPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminPowerHourPaginationQuery, AdminPowerHourPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminPowerHourPaginationQuery, AdminPowerHourPaginationQueryVariables>(
    AdminPowerHourPaginationDocument,
    options,
  )
}
export function useAdminPowerHourPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminPowerHourPaginationQuery, AdminPowerHourPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminPowerHourPaginationQuery, AdminPowerHourPaginationQueryVariables>(
    AdminPowerHourPaginationDocument,
    options,
  )
}
export type AdminPowerHourPaginationQueryHookResult = ReturnType<typeof useAdminPowerHourPaginationQuery>
export type AdminPowerHourPaginationLazyQueryHookResult = ReturnType<typeof useAdminPowerHourPaginationLazyQuery>
export type AdminPowerHourPaginationQueryResult = Apollo.QueryResult<
  AdminPowerHourPaginationQuery,
  AdminPowerHourPaginationQueryVariables
>
export const AdminCreateReferralDocument = gql`
  mutation adminCreateReferral($input: AdminCreateReferralInput!) {
    createReferral: adminCreateReferral(input: $input) {
      ...AdminReferralDetails
    }
  }
  ${AdminReferralDetailsFragmentDoc}
`
export type AdminCreateReferralMutationFn = Apollo.MutationFunction<
  AdminCreateReferralMutation,
  AdminCreateReferralMutationVariables
>

/**
 * __useAdminCreateReferralMutation__
 *
 * To run a mutation, you first call `useAdminCreateReferralMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateReferralMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateReferralMutation, { data, loading, error }] = useAdminCreateReferralMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateReferralMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateReferralMutation, AdminCreateReferralMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateReferralMutation, AdminCreateReferralMutationVariables>(
    AdminCreateReferralDocument,
    options,
  )
}
export type AdminCreateReferralMutationHookResult = ReturnType<typeof useAdminCreateReferralMutation>
export type AdminCreateReferralMutationResult = Apollo.MutationResult<AdminCreateReferralMutation>
export type AdminCreateReferralMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateReferralMutation,
  AdminCreateReferralMutationVariables
>
export const AdminDeleteReferralDocument = gql`
  mutation adminDeleteReferral($referralId: String!) {
    deleteReferral: adminDeleteReferral(referralId: $referralId) {
      id
    }
  }
`
export type AdminDeleteReferralMutationFn = Apollo.MutationFunction<
  AdminDeleteReferralMutation,
  AdminDeleteReferralMutationVariables
>

/**
 * __useAdminDeleteReferralMutation__
 *
 * To run a mutation, you first call `useAdminDeleteReferralMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteReferralMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteReferralMutation, { data, loading, error }] = useAdminDeleteReferralMutation({
 *   variables: {
 *      referralId: // value for 'referralId'
 *   },
 * });
 */
export function useAdminDeleteReferralMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteReferralMutation, AdminDeleteReferralMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteReferralMutation, AdminDeleteReferralMutationVariables>(
    AdminDeleteReferralDocument,
    options,
  )
}
export type AdminDeleteReferralMutationHookResult = ReturnType<typeof useAdminDeleteReferralMutation>
export type AdminDeleteReferralMutationResult = Apollo.MutationResult<AdminDeleteReferralMutation>
export type AdminDeleteReferralMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteReferralMutation,
  AdminDeleteReferralMutationVariables
>
export const AdminUpdateReferralDocument = gql`
  mutation adminUpdateReferral($referralId: String!, $input: AdminUpdateReferralInput!) {
    updateReferral: adminUpdateReferral(referralId: $referralId, input: $input) {
      ...AdminReferralDetails
    }
  }
  ${AdminReferralDetailsFragmentDoc}
`
export type AdminUpdateReferralMutationFn = Apollo.MutationFunction<
  AdminUpdateReferralMutation,
  AdminUpdateReferralMutationVariables
>

/**
 * __useAdminUpdateReferralMutation__
 *
 * To run a mutation, you first call `useAdminUpdateReferralMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateReferralMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateReferralMutation, { data, loading, error }] = useAdminUpdateReferralMutation({
 *   variables: {
 *      referralId: // value for 'referralId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateReferralMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateReferralMutation, AdminUpdateReferralMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateReferralMutation, AdminUpdateReferralMutationVariables>(
    AdminUpdateReferralDocument,
    options,
  )
}
export type AdminUpdateReferralMutationHookResult = ReturnType<typeof useAdminUpdateReferralMutation>
export type AdminUpdateReferralMutationResult = Apollo.MutationResult<AdminUpdateReferralMutation>
export type AdminUpdateReferralMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateReferralMutation,
  AdminUpdateReferralMutationVariables
>
export const AdminReferralDocument = gql`
  query AdminReferral($referralId: String!) {
    referral: adminReferral(referralId: $referralId) {
      ...AdminReferralDetails
    }
  }
  ${AdminReferralDetailsFragmentDoc}
`

/**
 * __useAdminReferralQuery__
 *
 * To run a query within a React component, call `useAdminReferralQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminReferralQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminReferralQuery({
 *   variables: {
 *      referralId: // value for 'referralId'
 *   },
 * });
 */
export function useAdminReferralQuery(
  baseOptions: Apollo.QueryHookOptions<AdminReferralQuery, AdminReferralQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminReferralQuery, AdminReferralQueryVariables>(AdminReferralDocument, options)
}
export function useAdminReferralLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminReferralQuery, AdminReferralQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminReferralQuery, AdminReferralQueryVariables>(AdminReferralDocument, options)
}
export type AdminReferralQueryHookResult = ReturnType<typeof useAdminReferralQuery>
export type AdminReferralLazyQueryHookResult = ReturnType<typeof useAdminReferralLazyQuery>
export type AdminReferralQueryResult = Apollo.QueryResult<AdminReferralQuery, AdminReferralQueryVariables>
export const AdminReferralsDocument = gql`
  query AdminReferrals($input: AdminListReferralInput) {
    referrals: adminReferrals(input: $input) {
      ...AdminReferralDetails
    }
    counters: adminCountReferrals(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminReferralDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminReferralsQuery__
 *
 * To run a query within a React component, call `useAdminReferralsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminReferralsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminReferralsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminReferralsQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminReferralsQuery, AdminReferralsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminReferralsQuery, AdminReferralsQueryVariables>(AdminReferralsDocument, options)
}
export function useAdminReferralsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminReferralsQuery, AdminReferralsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminReferralsQuery, AdminReferralsQueryVariables>(AdminReferralsDocument, options)
}
export type AdminReferralsQueryHookResult = ReturnType<typeof useAdminReferralsQuery>
export type AdminReferralsLazyQueryHookResult = ReturnType<typeof useAdminReferralsLazyQuery>
export type AdminReferralsQueryResult = Apollo.QueryResult<AdminReferralsQuery, AdminReferralsQueryVariables>
export const AdminReferralPaginationDocument = gql`
  query AdminReferralPagination($input: AdminListReferralInput) {
    counters: adminCountReferrals(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminReferralPaginationQuery__
 *
 * To run a query within a React component, call `useAdminReferralPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminReferralPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminReferralPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminReferralPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminReferralPaginationQuery, AdminReferralPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminReferralPaginationQuery, AdminReferralPaginationQueryVariables>(
    AdminReferralPaginationDocument,
    options,
  )
}
export function useAdminReferralPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminReferralPaginationQuery, AdminReferralPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminReferralPaginationQuery, AdminReferralPaginationQueryVariables>(
    AdminReferralPaginationDocument,
    options,
  )
}
export type AdminReferralPaginationQueryHookResult = ReturnType<typeof useAdminReferralPaginationQuery>
export type AdminReferralPaginationLazyQueryHookResult = ReturnType<typeof useAdminReferralPaginationLazyQuery>
export type AdminReferralPaginationQueryResult = Apollo.QueryResult<
  AdminReferralPaginationQuery,
  AdminReferralPaginationQueryVariables
>
export const AdminCreateRegionDocument = gql`
  mutation adminCreateRegion($input: AdminCreateRegionInput!) {
    createRegion: adminCreateRegion(input: $input) {
      ...AdminRegionDetails
    }
  }
  ${AdminRegionDetailsFragmentDoc}
`
export type AdminCreateRegionMutationFn = Apollo.MutationFunction<
  AdminCreateRegionMutation,
  AdminCreateRegionMutationVariables
>

/**
 * __useAdminCreateRegionMutation__
 *
 * To run a mutation, you first call `useAdminCreateRegionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateRegionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateRegionMutation, { data, loading, error }] = useAdminCreateRegionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateRegionMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateRegionMutation, AdminCreateRegionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateRegionMutation, AdminCreateRegionMutationVariables>(
    AdminCreateRegionDocument,
    options,
  )
}
export type AdminCreateRegionMutationHookResult = ReturnType<typeof useAdminCreateRegionMutation>
export type AdminCreateRegionMutationResult = Apollo.MutationResult<AdminCreateRegionMutation>
export type AdminCreateRegionMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateRegionMutation,
  AdminCreateRegionMutationVariables
>
export const AdminDeleteRegionDocument = gql`
  mutation adminDeleteRegion($regionId: String!) {
    deleteRegion: adminDeleteRegion(regionId: $regionId) {
      id
    }
  }
`
export type AdminDeleteRegionMutationFn = Apollo.MutationFunction<
  AdminDeleteRegionMutation,
  AdminDeleteRegionMutationVariables
>

/**
 * __useAdminDeleteRegionMutation__
 *
 * To run a mutation, you first call `useAdminDeleteRegionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteRegionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteRegionMutation, { data, loading, error }] = useAdminDeleteRegionMutation({
 *   variables: {
 *      regionId: // value for 'regionId'
 *   },
 * });
 */
export function useAdminDeleteRegionMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteRegionMutation, AdminDeleteRegionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteRegionMutation, AdminDeleteRegionMutationVariables>(
    AdminDeleteRegionDocument,
    options,
  )
}
export type AdminDeleteRegionMutationHookResult = ReturnType<typeof useAdminDeleteRegionMutation>
export type AdminDeleteRegionMutationResult = Apollo.MutationResult<AdminDeleteRegionMutation>
export type AdminDeleteRegionMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteRegionMutation,
  AdminDeleteRegionMutationVariables
>
export const AdminUpdateRegionDocument = gql`
  mutation adminUpdateRegion($regionId: String!, $input: AdminUpdateRegionInput!) {
    updateRegion: adminUpdateRegion(regionId: $regionId, input: $input) {
      ...AdminRegionDetails
    }
  }
  ${AdminRegionDetailsFragmentDoc}
`
export type AdminUpdateRegionMutationFn = Apollo.MutationFunction<
  AdminUpdateRegionMutation,
  AdminUpdateRegionMutationVariables
>

/**
 * __useAdminUpdateRegionMutation__
 *
 * To run a mutation, you first call `useAdminUpdateRegionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateRegionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateRegionMutation, { data, loading, error }] = useAdminUpdateRegionMutation({
 *   variables: {
 *      regionId: // value for 'regionId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateRegionMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateRegionMutation, AdminUpdateRegionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateRegionMutation, AdminUpdateRegionMutationVariables>(
    AdminUpdateRegionDocument,
    options,
  )
}
export type AdminUpdateRegionMutationHookResult = ReturnType<typeof useAdminUpdateRegionMutation>
export type AdminUpdateRegionMutationResult = Apollo.MutationResult<AdminUpdateRegionMutation>
export type AdminUpdateRegionMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateRegionMutation,
  AdminUpdateRegionMutationVariables
>
export const AdminRegionDocument = gql`
  query AdminRegion($regionId: String!) {
    region: adminRegion(regionId: $regionId) {
      ...AdminRegionDetails
    }
  }
  ${AdminRegionDetailsFragmentDoc}
`

/**
 * __useAdminRegionQuery__
 *
 * To run a query within a React component, call `useAdminRegionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminRegionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminRegionQuery({
 *   variables: {
 *      regionId: // value for 'regionId'
 *   },
 * });
 */
export function useAdminRegionQuery(baseOptions: Apollo.QueryHookOptions<AdminRegionQuery, AdminRegionQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminRegionQuery, AdminRegionQueryVariables>(AdminRegionDocument, options)
}
export function useAdminRegionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminRegionQuery, AdminRegionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminRegionQuery, AdminRegionQueryVariables>(AdminRegionDocument, options)
}
export type AdminRegionQueryHookResult = ReturnType<typeof useAdminRegionQuery>
export type AdminRegionLazyQueryHookResult = ReturnType<typeof useAdminRegionLazyQuery>
export type AdminRegionQueryResult = Apollo.QueryResult<AdminRegionQuery, AdminRegionQueryVariables>
export const AdminRegionsDocument = gql`
  query AdminRegions($input: AdminListRegionInput) {
    regions: adminRegions(input: $input) {
      ...AdminRegionDetails
    }
    counters: adminCountRegions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminRegionDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminRegionsQuery__
 *
 * To run a query within a React component, call `useAdminRegionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminRegionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminRegionsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminRegionsQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminRegionsQuery, AdminRegionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminRegionsQuery, AdminRegionsQueryVariables>(AdminRegionsDocument, options)
}
export function useAdminRegionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminRegionsQuery, AdminRegionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminRegionsQuery, AdminRegionsQueryVariables>(AdminRegionsDocument, options)
}
export type AdminRegionsQueryHookResult = ReturnType<typeof useAdminRegionsQuery>
export type AdminRegionsLazyQueryHookResult = ReturnType<typeof useAdminRegionsLazyQuery>
export type AdminRegionsQueryResult = Apollo.QueryResult<AdminRegionsQuery, AdminRegionsQueryVariables>
export const AdminRegionPaginationDocument = gql`
  query AdminRegionPagination($input: AdminListRegionInput) {
    counters: adminCountRegions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminRegionPaginationQuery__
 *
 * To run a query within a React component, call `useAdminRegionPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminRegionPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminRegionPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminRegionPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminRegionPaginationQuery, AdminRegionPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminRegionPaginationQuery, AdminRegionPaginationQueryVariables>(
    AdminRegionPaginationDocument,
    options,
  )
}
export function useAdminRegionPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminRegionPaginationQuery, AdminRegionPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminRegionPaginationQuery, AdminRegionPaginationQueryVariables>(
    AdminRegionPaginationDocument,
    options,
  )
}
export type AdminRegionPaginationQueryHookResult = ReturnType<typeof useAdminRegionPaginationQuery>
export type AdminRegionPaginationLazyQueryHookResult = ReturnType<typeof useAdminRegionPaginationLazyQuery>
export type AdminRegionPaginationQueryResult = Apollo.QueryResult<
  AdminRegionPaginationQuery,
  AdminRegionPaginationQueryVariables
>
export const AdminCreateSubstituteGroupDocument = gql`
  mutation adminCreateSubstituteGroup($input: AdminCreateSubstituteGroupInput!) {
    createSubstituteGroup: adminCreateSubstituteGroup(input: $input) {
      ...AdminSubstituteGroupDetails
    }
  }
  ${AdminSubstituteGroupDetailsFragmentDoc}
`
export type AdminCreateSubstituteGroupMutationFn = Apollo.MutationFunction<
  AdminCreateSubstituteGroupMutation,
  AdminCreateSubstituteGroupMutationVariables
>

/**
 * __useAdminCreateSubstituteGroupMutation__
 *
 * To run a mutation, you first call `useAdminCreateSubstituteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateSubstituteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateSubstituteGroupMutation, { data, loading, error }] = useAdminCreateSubstituteGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateSubstituteGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AdminCreateSubstituteGroupMutation,
    AdminCreateSubstituteGroupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateSubstituteGroupMutation, AdminCreateSubstituteGroupMutationVariables>(
    AdminCreateSubstituteGroupDocument,
    options,
  )
}
export type AdminCreateSubstituteGroupMutationHookResult = ReturnType<typeof useAdminCreateSubstituteGroupMutation>
export type AdminCreateSubstituteGroupMutationResult = Apollo.MutationResult<AdminCreateSubstituteGroupMutation>
export type AdminCreateSubstituteGroupMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateSubstituteGroupMutation,
  AdminCreateSubstituteGroupMutationVariables
>
export const AdminDeleteSubstituteGroupDocument = gql`
  mutation adminDeleteSubstituteGroup($substituteGroupId: String!) {
    deleteSubstituteGroup: adminDeleteSubstituteGroup(substituteGroupId: $substituteGroupId) {
      id
    }
  }
`
export type AdminDeleteSubstituteGroupMutationFn = Apollo.MutationFunction<
  AdminDeleteSubstituteGroupMutation,
  AdminDeleteSubstituteGroupMutationVariables
>

/**
 * __useAdminDeleteSubstituteGroupMutation__
 *
 * To run a mutation, you first call `useAdminDeleteSubstituteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteSubstituteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteSubstituteGroupMutation, { data, loading, error }] = useAdminDeleteSubstituteGroupMutation({
 *   variables: {
 *      substituteGroupId: // value for 'substituteGroupId'
 *   },
 * });
 */
export function useAdminDeleteSubstituteGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AdminDeleteSubstituteGroupMutation,
    AdminDeleteSubstituteGroupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteSubstituteGroupMutation, AdminDeleteSubstituteGroupMutationVariables>(
    AdminDeleteSubstituteGroupDocument,
    options,
  )
}
export type AdminDeleteSubstituteGroupMutationHookResult = ReturnType<typeof useAdminDeleteSubstituteGroupMutation>
export type AdminDeleteSubstituteGroupMutationResult = Apollo.MutationResult<AdminDeleteSubstituteGroupMutation>
export type AdminDeleteSubstituteGroupMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteSubstituteGroupMutation,
  AdminDeleteSubstituteGroupMutationVariables
>
export const AdminUpdateSubstituteGroupDocument = gql`
  mutation adminUpdateSubstituteGroup($substituteGroupId: String!, $input: AdminUpdateSubstituteGroupInput!) {
    updateSubstituteGroup: adminUpdateSubstituteGroup(substituteGroupId: $substituteGroupId, input: $input) {
      ...AdminSubstituteGroupDetails
    }
  }
  ${AdminSubstituteGroupDetailsFragmentDoc}
`
export type AdminUpdateSubstituteGroupMutationFn = Apollo.MutationFunction<
  AdminUpdateSubstituteGroupMutation,
  AdminUpdateSubstituteGroupMutationVariables
>

/**
 * __useAdminUpdateSubstituteGroupMutation__
 *
 * To run a mutation, you first call `useAdminUpdateSubstituteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateSubstituteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateSubstituteGroupMutation, { data, loading, error }] = useAdminUpdateSubstituteGroupMutation({
 *   variables: {
 *      substituteGroupId: // value for 'substituteGroupId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateSubstituteGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AdminUpdateSubstituteGroupMutation,
    AdminUpdateSubstituteGroupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateSubstituteGroupMutation, AdminUpdateSubstituteGroupMutationVariables>(
    AdminUpdateSubstituteGroupDocument,
    options,
  )
}
export type AdminUpdateSubstituteGroupMutationHookResult = ReturnType<typeof useAdminUpdateSubstituteGroupMutation>
export type AdminUpdateSubstituteGroupMutationResult = Apollo.MutationResult<AdminUpdateSubstituteGroupMutation>
export type AdminUpdateSubstituteGroupMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateSubstituteGroupMutation,
  AdminUpdateSubstituteGroupMutationVariables
>
export const AdminSubstituteGroupDocument = gql`
  query AdminSubstituteGroup($substituteGroupId: String!) {
    substituteGroup: adminSubstituteGroup(substituteGroupId: $substituteGroupId) {
      ...AdminSubstituteGroupDetails
    }
  }
  ${AdminSubstituteGroupDetailsFragmentDoc}
`

/**
 * __useAdminSubstituteGroupQuery__
 *
 * To run a query within a React component, call `useAdminSubstituteGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminSubstituteGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminSubstituteGroupQuery({
 *   variables: {
 *      substituteGroupId: // value for 'substituteGroupId'
 *   },
 * });
 */
export function useAdminSubstituteGroupQuery(
  baseOptions: Apollo.QueryHookOptions<AdminSubstituteGroupQuery, AdminSubstituteGroupQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminSubstituteGroupQuery, AdminSubstituteGroupQueryVariables>(
    AdminSubstituteGroupDocument,
    options,
  )
}
export function useAdminSubstituteGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminSubstituteGroupQuery, AdminSubstituteGroupQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminSubstituteGroupQuery, AdminSubstituteGroupQueryVariables>(
    AdminSubstituteGroupDocument,
    options,
  )
}
export type AdminSubstituteGroupQueryHookResult = ReturnType<typeof useAdminSubstituteGroupQuery>
export type AdminSubstituteGroupLazyQueryHookResult = ReturnType<typeof useAdminSubstituteGroupLazyQuery>
export type AdminSubstituteGroupQueryResult = Apollo.QueryResult<
  AdminSubstituteGroupQuery,
  AdminSubstituteGroupQueryVariables
>
export const AdminSubstituteGroupsDocument = gql`
  query AdminSubstituteGroups($input: AdminListSubstituteGroupInput) {
    substituteGroups: adminSubstituteGroups(input: $input) {
      ...AdminSubstituteGroupDetails
    }
    counters: adminCountSubstituteGroups(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminSubstituteGroupDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminSubstituteGroupsQuery__
 *
 * To run a query within a React component, call `useAdminSubstituteGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminSubstituteGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminSubstituteGroupsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminSubstituteGroupsQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminSubstituteGroupsQuery, AdminSubstituteGroupsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminSubstituteGroupsQuery, AdminSubstituteGroupsQueryVariables>(
    AdminSubstituteGroupsDocument,
    options,
  )
}
export function useAdminSubstituteGroupsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminSubstituteGroupsQuery, AdminSubstituteGroupsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminSubstituteGroupsQuery, AdminSubstituteGroupsQueryVariables>(
    AdminSubstituteGroupsDocument,
    options,
  )
}
export type AdminSubstituteGroupsQueryHookResult = ReturnType<typeof useAdminSubstituteGroupsQuery>
export type AdminSubstituteGroupsLazyQueryHookResult = ReturnType<typeof useAdminSubstituteGroupsLazyQuery>
export type AdminSubstituteGroupsQueryResult = Apollo.QueryResult<
  AdminSubstituteGroupsQuery,
  AdminSubstituteGroupsQueryVariables
>
export const AdminSubstituteGroupPaginationDocument = gql`
  query AdminSubstituteGroupPagination($input: AdminListSubstituteGroupInput) {
    counters: adminCountSubstituteGroups(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminSubstituteGroupPaginationQuery__
 *
 * To run a query within a React component, call `useAdminSubstituteGroupPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminSubstituteGroupPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminSubstituteGroupPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminSubstituteGroupPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AdminSubstituteGroupPaginationQuery,
    AdminSubstituteGroupPaginationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminSubstituteGroupPaginationQuery, AdminSubstituteGroupPaginationQueryVariables>(
    AdminSubstituteGroupPaginationDocument,
    options,
  )
}
export function useAdminSubstituteGroupPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AdminSubstituteGroupPaginationQuery,
    AdminSubstituteGroupPaginationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminSubstituteGroupPaginationQuery, AdminSubstituteGroupPaginationQueryVariables>(
    AdminSubstituteGroupPaginationDocument,
    options,
  )
}
export type AdminSubstituteGroupPaginationQueryHookResult = ReturnType<typeof useAdminSubstituteGroupPaginationQuery>
export type AdminSubstituteGroupPaginationLazyQueryHookResult = ReturnType<
  typeof useAdminSubstituteGroupPaginationLazyQuery
>
export type AdminSubstituteGroupPaginationQueryResult = Apollo.QueryResult<
  AdminSubstituteGroupPaginationQuery,
  AdminSubstituteGroupPaginationQueryVariables
>
export const AdminCreateSubstituteDocument = gql`
  mutation adminCreateSubstitute($input: AdminCreateSubstituteInput!) {
    createSubstitute: adminCreateSubstitute(input: $input) {
      ...AdminSubstituteDetails
    }
  }
  ${AdminSubstituteDetailsFragmentDoc}
`
export type AdminCreateSubstituteMutationFn = Apollo.MutationFunction<
  AdminCreateSubstituteMutation,
  AdminCreateSubstituteMutationVariables
>

/**
 * __useAdminCreateSubstituteMutation__
 *
 * To run a mutation, you first call `useAdminCreateSubstituteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateSubstituteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateSubstituteMutation, { data, loading, error }] = useAdminCreateSubstituteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateSubstituteMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateSubstituteMutation, AdminCreateSubstituteMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateSubstituteMutation, AdminCreateSubstituteMutationVariables>(
    AdminCreateSubstituteDocument,
    options,
  )
}
export type AdminCreateSubstituteMutationHookResult = ReturnType<typeof useAdminCreateSubstituteMutation>
export type AdminCreateSubstituteMutationResult = Apollo.MutationResult<AdminCreateSubstituteMutation>
export type AdminCreateSubstituteMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateSubstituteMutation,
  AdminCreateSubstituteMutationVariables
>
export const AdminDeleteSubstituteDocument = gql`
  mutation adminDeleteSubstitute($substituteId: String!) {
    deleteSubstitute: adminDeleteSubstitute(substituteId: $substituteId) {
      id
    }
  }
`
export type AdminDeleteSubstituteMutationFn = Apollo.MutationFunction<
  AdminDeleteSubstituteMutation,
  AdminDeleteSubstituteMutationVariables
>

/**
 * __useAdminDeleteSubstituteMutation__
 *
 * To run a mutation, you first call `useAdminDeleteSubstituteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteSubstituteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteSubstituteMutation, { data, loading, error }] = useAdminDeleteSubstituteMutation({
 *   variables: {
 *      substituteId: // value for 'substituteId'
 *   },
 * });
 */
export function useAdminDeleteSubstituteMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteSubstituteMutation, AdminDeleteSubstituteMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteSubstituteMutation, AdminDeleteSubstituteMutationVariables>(
    AdminDeleteSubstituteDocument,
    options,
  )
}
export type AdminDeleteSubstituteMutationHookResult = ReturnType<typeof useAdminDeleteSubstituteMutation>
export type AdminDeleteSubstituteMutationResult = Apollo.MutationResult<AdminDeleteSubstituteMutation>
export type AdminDeleteSubstituteMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteSubstituteMutation,
  AdminDeleteSubstituteMutationVariables
>
export const AdminUpdateSubstituteDocument = gql`
  mutation adminUpdateSubstitute($substituteId: String!, $input: AdminUpdateSubstituteInput!) {
    updateSubstitute: adminUpdateSubstitute(substituteId: $substituteId, input: $input) {
      ...AdminSubstituteDetails
    }
  }
  ${AdminSubstituteDetailsFragmentDoc}
`
export type AdminUpdateSubstituteMutationFn = Apollo.MutationFunction<
  AdminUpdateSubstituteMutation,
  AdminUpdateSubstituteMutationVariables
>

/**
 * __useAdminUpdateSubstituteMutation__
 *
 * To run a mutation, you first call `useAdminUpdateSubstituteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateSubstituteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateSubstituteMutation, { data, loading, error }] = useAdminUpdateSubstituteMutation({
 *   variables: {
 *      substituteId: // value for 'substituteId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateSubstituteMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateSubstituteMutation, AdminUpdateSubstituteMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateSubstituteMutation, AdminUpdateSubstituteMutationVariables>(
    AdminUpdateSubstituteDocument,
    options,
  )
}
export type AdminUpdateSubstituteMutationHookResult = ReturnType<typeof useAdminUpdateSubstituteMutation>
export type AdminUpdateSubstituteMutationResult = Apollo.MutationResult<AdminUpdateSubstituteMutation>
export type AdminUpdateSubstituteMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateSubstituteMutation,
  AdminUpdateSubstituteMutationVariables
>
export const AdminSubstituteDocument = gql`
  query AdminSubstitute($substituteId: String!) {
    substitute: adminSubstitute(substituteId: $substituteId) {
      ...AdminSubstituteDetails
    }
  }
  ${AdminSubstituteDetailsFragmentDoc}
`

/**
 * __useAdminSubstituteQuery__
 *
 * To run a query within a React component, call `useAdminSubstituteQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminSubstituteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminSubstituteQuery({
 *   variables: {
 *      substituteId: // value for 'substituteId'
 *   },
 * });
 */
export function useAdminSubstituteQuery(
  baseOptions: Apollo.QueryHookOptions<AdminSubstituteQuery, AdminSubstituteQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminSubstituteQuery, AdminSubstituteQueryVariables>(AdminSubstituteDocument, options)
}
export function useAdminSubstituteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminSubstituteQuery, AdminSubstituteQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminSubstituteQuery, AdminSubstituteQueryVariables>(AdminSubstituteDocument, options)
}
export type AdminSubstituteQueryHookResult = ReturnType<typeof useAdminSubstituteQuery>
export type AdminSubstituteLazyQueryHookResult = ReturnType<typeof useAdminSubstituteLazyQuery>
export type AdminSubstituteQueryResult = Apollo.QueryResult<AdminSubstituteQuery, AdminSubstituteQueryVariables>
export const AdminSubstitutesDocument = gql`
  query AdminSubstitutes($input: AdminListSubstituteInput) {
    substitutes: adminSubstitutes(input: $input) {
      ...AdminSubstituteDetails
    }
    counters: adminCountSubstitutes(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminSubstituteDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminSubstitutesQuery__
 *
 * To run a query within a React component, call `useAdminSubstitutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminSubstitutesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminSubstitutesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminSubstitutesQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminSubstitutesQuery, AdminSubstitutesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminSubstitutesQuery, AdminSubstitutesQueryVariables>(AdminSubstitutesDocument, options)
}
export function useAdminSubstitutesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminSubstitutesQuery, AdminSubstitutesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminSubstitutesQuery, AdminSubstitutesQueryVariables>(AdminSubstitutesDocument, options)
}
export type AdminSubstitutesQueryHookResult = ReturnType<typeof useAdminSubstitutesQuery>
export type AdminSubstitutesLazyQueryHookResult = ReturnType<typeof useAdminSubstitutesLazyQuery>
export type AdminSubstitutesQueryResult = Apollo.QueryResult<AdminSubstitutesQuery, AdminSubstitutesQueryVariables>
export const AdminSubstitutePaginationDocument = gql`
  query AdminSubstitutePagination($input: AdminListSubstituteInput) {
    counters: adminCountSubstitutes(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminSubstitutePaginationQuery__
 *
 * To run a query within a React component, call `useAdminSubstitutePaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminSubstitutePaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminSubstitutePaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminSubstitutePaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminSubstitutePaginationQuery, AdminSubstitutePaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminSubstitutePaginationQuery, AdminSubstitutePaginationQueryVariables>(
    AdminSubstitutePaginationDocument,
    options,
  )
}
export function useAdminSubstitutePaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminSubstitutePaginationQuery, AdminSubstitutePaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminSubstitutePaginationQuery, AdminSubstitutePaginationQueryVariables>(
    AdminSubstitutePaginationDocument,
    options,
  )
}
export type AdminSubstitutePaginationQueryHookResult = ReturnType<typeof useAdminSubstitutePaginationQuery>
export type AdminSubstitutePaginationLazyQueryHookResult = ReturnType<typeof useAdminSubstitutePaginationLazyQuery>
export type AdminSubstitutePaginationQueryResult = Apollo.QueryResult<
  AdminSubstitutePaginationQuery,
  AdminSubstitutePaginationQueryVariables
>
export const AdminCreateTerritoryDocument = gql`
  mutation adminCreateTerritory($input: AdminCreateTerritoryInput!) {
    createTerritory: adminCreateTerritory(input: $input) {
      ...AdminTerritoryDetails
    }
  }
  ${AdminTerritoryDetailsFragmentDoc}
`
export type AdminCreateTerritoryMutationFn = Apollo.MutationFunction<
  AdminCreateTerritoryMutation,
  AdminCreateTerritoryMutationVariables
>

/**
 * __useAdminCreateTerritoryMutation__
 *
 * To run a mutation, you first call `useAdminCreateTerritoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateTerritoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateTerritoryMutation, { data, loading, error }] = useAdminCreateTerritoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateTerritoryMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateTerritoryMutation, AdminCreateTerritoryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateTerritoryMutation, AdminCreateTerritoryMutationVariables>(
    AdminCreateTerritoryDocument,
    options,
  )
}
export type AdminCreateTerritoryMutationHookResult = ReturnType<typeof useAdminCreateTerritoryMutation>
export type AdminCreateTerritoryMutationResult = Apollo.MutationResult<AdminCreateTerritoryMutation>
export type AdminCreateTerritoryMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateTerritoryMutation,
  AdminCreateTerritoryMutationVariables
>
export const AdminDeleteTerritoryDocument = gql`
  mutation adminDeleteTerritory($territoryId: String!) {
    deleteTerritory: adminDeleteTerritory(territoryId: $territoryId) {
      id
    }
  }
`
export type AdminDeleteTerritoryMutationFn = Apollo.MutationFunction<
  AdminDeleteTerritoryMutation,
  AdminDeleteTerritoryMutationVariables
>

/**
 * __useAdminDeleteTerritoryMutation__
 *
 * To run a mutation, you first call `useAdminDeleteTerritoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteTerritoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteTerritoryMutation, { data, loading, error }] = useAdminDeleteTerritoryMutation({
 *   variables: {
 *      territoryId: // value for 'territoryId'
 *   },
 * });
 */
export function useAdminDeleteTerritoryMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteTerritoryMutation, AdminDeleteTerritoryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteTerritoryMutation, AdminDeleteTerritoryMutationVariables>(
    AdminDeleteTerritoryDocument,
    options,
  )
}
export type AdminDeleteTerritoryMutationHookResult = ReturnType<typeof useAdminDeleteTerritoryMutation>
export type AdminDeleteTerritoryMutationResult = Apollo.MutationResult<AdminDeleteTerritoryMutation>
export type AdminDeleteTerritoryMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteTerritoryMutation,
  AdminDeleteTerritoryMutationVariables
>
export const AdminUpdateTerritoryDocument = gql`
  mutation adminUpdateTerritory($territoryId: String!, $input: AdminUpdateTerritoryInput!) {
    updateTerritory: adminUpdateTerritory(territoryId: $territoryId, input: $input) {
      ...AdminTerritoryDetails
    }
  }
  ${AdminTerritoryDetailsFragmentDoc}
`
export type AdminUpdateTerritoryMutationFn = Apollo.MutationFunction<
  AdminUpdateTerritoryMutation,
  AdminUpdateTerritoryMutationVariables
>

/**
 * __useAdminUpdateTerritoryMutation__
 *
 * To run a mutation, you first call `useAdminUpdateTerritoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateTerritoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateTerritoryMutation, { data, loading, error }] = useAdminUpdateTerritoryMutation({
 *   variables: {
 *      territoryId: // value for 'territoryId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateTerritoryMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateTerritoryMutation, AdminUpdateTerritoryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateTerritoryMutation, AdminUpdateTerritoryMutationVariables>(
    AdminUpdateTerritoryDocument,
    options,
  )
}
export type AdminUpdateTerritoryMutationHookResult = ReturnType<typeof useAdminUpdateTerritoryMutation>
export type AdminUpdateTerritoryMutationResult = Apollo.MutationResult<AdminUpdateTerritoryMutation>
export type AdminUpdateTerritoryMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateTerritoryMutation,
  AdminUpdateTerritoryMutationVariables
>
export const AdminTerritoryDocument = gql`
  query AdminTerritory($territoryId: String!) {
    territory: adminTerritory(territoryId: $territoryId) {
      ...AdminTerritoryDetails
    }
  }
  ${AdminTerritoryDetailsFragmentDoc}
`

/**
 * __useAdminTerritoryQuery__
 *
 * To run a query within a React component, call `useAdminTerritoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminTerritoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminTerritoryQuery({
 *   variables: {
 *      territoryId: // value for 'territoryId'
 *   },
 * });
 */
export function useAdminTerritoryQuery(
  baseOptions: Apollo.QueryHookOptions<AdminTerritoryQuery, AdminTerritoryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminTerritoryQuery, AdminTerritoryQueryVariables>(AdminTerritoryDocument, options)
}
export function useAdminTerritoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminTerritoryQuery, AdminTerritoryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminTerritoryQuery, AdminTerritoryQueryVariables>(AdminTerritoryDocument, options)
}
export type AdminTerritoryQueryHookResult = ReturnType<typeof useAdminTerritoryQuery>
export type AdminTerritoryLazyQueryHookResult = ReturnType<typeof useAdminTerritoryLazyQuery>
export type AdminTerritoryQueryResult = Apollo.QueryResult<AdminTerritoryQuery, AdminTerritoryQueryVariables>
export const AdminTerritoriesDocument = gql`
  query AdminTerritories($input: AdminListTerritoryInput) {
    territories: adminTerritories(input: $input) {
      ...AdminTerritoryDetails
    }
    counters: adminCountTerritories(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminTerritoryDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminTerritoriesQuery__
 *
 * To run a query within a React component, call `useAdminTerritoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminTerritoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminTerritoriesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminTerritoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminTerritoriesQuery, AdminTerritoriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminTerritoriesQuery, AdminTerritoriesQueryVariables>(AdminTerritoriesDocument, options)
}
export function useAdminTerritoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminTerritoriesQuery, AdminTerritoriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminTerritoriesQuery, AdminTerritoriesQueryVariables>(AdminTerritoriesDocument, options)
}
export type AdminTerritoriesQueryHookResult = ReturnType<typeof useAdminTerritoriesQuery>
export type AdminTerritoriesLazyQueryHookResult = ReturnType<typeof useAdminTerritoriesLazyQuery>
export type AdminTerritoriesQueryResult = Apollo.QueryResult<AdminTerritoriesQuery, AdminTerritoriesQueryVariables>
export const AdminTerritoryPaginationDocument = gql`
  query AdminTerritoryPagination($input: AdminListTerritoryInput) {
    counters: adminCountTerritories(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminTerritoryPaginationQuery__
 *
 * To run a query within a React component, call `useAdminTerritoryPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminTerritoryPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminTerritoryPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminTerritoryPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminTerritoryPaginationQuery, AdminTerritoryPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminTerritoryPaginationQuery, AdminTerritoryPaginationQueryVariables>(
    AdminTerritoryPaginationDocument,
    options,
  )
}
export function useAdminTerritoryPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminTerritoryPaginationQuery, AdminTerritoryPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminTerritoryPaginationQuery, AdminTerritoryPaginationQueryVariables>(
    AdminTerritoryPaginationDocument,
    options,
  )
}
export type AdminTerritoryPaginationQueryHookResult = ReturnType<typeof useAdminTerritoryPaginationQuery>
export type AdminTerritoryPaginationLazyQueryHookResult = ReturnType<typeof useAdminTerritoryPaginationLazyQuery>
export type AdminTerritoryPaginationQueryResult = Apollo.QueryResult<
  AdminTerritoryPaginationQuery,
  AdminTerritoryPaginationQueryVariables
>
export const AdminCreateTestimonialDocument = gql`
  mutation adminCreateTestimonial($input: AdminCreateTestimonialInput!) {
    createTestimonial: adminCreateTestimonial(input: $input) {
      ...AdminTestimonialDetails
    }
  }
  ${AdminTestimonialDetailsFragmentDoc}
`
export type AdminCreateTestimonialMutationFn = Apollo.MutationFunction<
  AdminCreateTestimonialMutation,
  AdminCreateTestimonialMutationVariables
>

/**
 * __useAdminCreateTestimonialMutation__
 *
 * To run a mutation, you first call `useAdminCreateTestimonialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateTestimonialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateTestimonialMutation, { data, loading, error }] = useAdminCreateTestimonialMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateTestimonialMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateTestimonialMutation, AdminCreateTestimonialMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateTestimonialMutation, AdminCreateTestimonialMutationVariables>(
    AdminCreateTestimonialDocument,
    options,
  )
}
export type AdminCreateTestimonialMutationHookResult = ReturnType<typeof useAdminCreateTestimonialMutation>
export type AdminCreateTestimonialMutationResult = Apollo.MutationResult<AdminCreateTestimonialMutation>
export type AdminCreateTestimonialMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateTestimonialMutation,
  AdminCreateTestimonialMutationVariables
>
export const AdminDeleteTestimonialDocument = gql`
  mutation adminDeleteTestimonial($testimonialId: String!) {
    deleteTestimonial: adminDeleteTestimonial(testimonialId: $testimonialId) {
      id
    }
  }
`
export type AdminDeleteTestimonialMutationFn = Apollo.MutationFunction<
  AdminDeleteTestimonialMutation,
  AdminDeleteTestimonialMutationVariables
>

/**
 * __useAdminDeleteTestimonialMutation__
 *
 * To run a mutation, you first call `useAdminDeleteTestimonialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteTestimonialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteTestimonialMutation, { data, loading, error }] = useAdminDeleteTestimonialMutation({
 *   variables: {
 *      testimonialId: // value for 'testimonialId'
 *   },
 * });
 */
export function useAdminDeleteTestimonialMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteTestimonialMutation, AdminDeleteTestimonialMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteTestimonialMutation, AdminDeleteTestimonialMutationVariables>(
    AdminDeleteTestimonialDocument,
    options,
  )
}
export type AdminDeleteTestimonialMutationHookResult = ReturnType<typeof useAdminDeleteTestimonialMutation>
export type AdminDeleteTestimonialMutationResult = Apollo.MutationResult<AdminDeleteTestimonialMutation>
export type AdminDeleteTestimonialMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteTestimonialMutation,
  AdminDeleteTestimonialMutationVariables
>
export const AdminUpdateTestimonialDocument = gql`
  mutation adminUpdateTestimonial($testimonialId: String!, $input: AdminUpdateTestimonialInput!) {
    updateTestimonial: adminUpdateTestimonial(testimonialId: $testimonialId, input: $input) {
      ...AdminTestimonialDetails
    }
  }
  ${AdminTestimonialDetailsFragmentDoc}
`
export type AdminUpdateTestimonialMutationFn = Apollo.MutationFunction<
  AdminUpdateTestimonialMutation,
  AdminUpdateTestimonialMutationVariables
>

/**
 * __useAdminUpdateTestimonialMutation__
 *
 * To run a mutation, you first call `useAdminUpdateTestimonialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateTestimonialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateTestimonialMutation, { data, loading, error }] = useAdminUpdateTestimonialMutation({
 *   variables: {
 *      testimonialId: // value for 'testimonialId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateTestimonialMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateTestimonialMutation, AdminUpdateTestimonialMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateTestimonialMutation, AdminUpdateTestimonialMutationVariables>(
    AdminUpdateTestimonialDocument,
    options,
  )
}
export type AdminUpdateTestimonialMutationHookResult = ReturnType<typeof useAdminUpdateTestimonialMutation>
export type AdminUpdateTestimonialMutationResult = Apollo.MutationResult<AdminUpdateTestimonialMutation>
export type AdminUpdateTestimonialMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateTestimonialMutation,
  AdminUpdateTestimonialMutationVariables
>
export const AdminTestimonialDocument = gql`
  query AdminTestimonial($testimonialId: String!) {
    testimonial: adminTestimonial(testimonialId: $testimonialId) {
      ...AdminTestimonialDetails
    }
  }
  ${AdminTestimonialDetailsFragmentDoc}
`

/**
 * __useAdminTestimonialQuery__
 *
 * To run a query within a React component, call `useAdminTestimonialQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminTestimonialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminTestimonialQuery({
 *   variables: {
 *      testimonialId: // value for 'testimonialId'
 *   },
 * });
 */
export function useAdminTestimonialQuery(
  baseOptions: Apollo.QueryHookOptions<AdminTestimonialQuery, AdminTestimonialQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminTestimonialQuery, AdminTestimonialQueryVariables>(AdminTestimonialDocument, options)
}
export function useAdminTestimonialLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminTestimonialQuery, AdminTestimonialQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminTestimonialQuery, AdminTestimonialQueryVariables>(AdminTestimonialDocument, options)
}
export type AdminTestimonialQueryHookResult = ReturnType<typeof useAdminTestimonialQuery>
export type AdminTestimonialLazyQueryHookResult = ReturnType<typeof useAdminTestimonialLazyQuery>
export type AdminTestimonialQueryResult = Apollo.QueryResult<AdminTestimonialQuery, AdminTestimonialQueryVariables>
export const AdminTestimonialsDocument = gql`
  query AdminTestimonials($input: AdminListTestimonialInput) {
    testimonials: adminTestimonials(input: $input) {
      ...AdminTestimonialDetails
    }
    counters: adminCountTestimonials(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminTestimonialDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminTestimonialsQuery__
 *
 * To run a query within a React component, call `useAdminTestimonialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminTestimonialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminTestimonialsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminTestimonialsQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminTestimonialsQuery, AdminTestimonialsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminTestimonialsQuery, AdminTestimonialsQueryVariables>(AdminTestimonialsDocument, options)
}
export function useAdminTestimonialsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminTestimonialsQuery, AdminTestimonialsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminTestimonialsQuery, AdminTestimonialsQueryVariables>(
    AdminTestimonialsDocument,
    options,
  )
}
export type AdminTestimonialsQueryHookResult = ReturnType<typeof useAdminTestimonialsQuery>
export type AdminTestimonialsLazyQueryHookResult = ReturnType<typeof useAdminTestimonialsLazyQuery>
export type AdminTestimonialsQueryResult = Apollo.QueryResult<AdminTestimonialsQuery, AdminTestimonialsQueryVariables>
export const AdminTestimonialPaginationDocument = gql`
  query AdminTestimonialPagination($input: AdminListTestimonialInput) {
    counters: adminCountTestimonials(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminTestimonialPaginationQuery__
 *
 * To run a query within a React component, call `useAdminTestimonialPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminTestimonialPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminTestimonialPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminTestimonialPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminTestimonialPaginationQuery, AdminTestimonialPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminTestimonialPaginationQuery, AdminTestimonialPaginationQueryVariables>(
    AdminTestimonialPaginationDocument,
    options,
  )
}
export function useAdminTestimonialPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminTestimonialPaginationQuery, AdminTestimonialPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminTestimonialPaginationQuery, AdminTestimonialPaginationQueryVariables>(
    AdminTestimonialPaginationDocument,
    options,
  )
}
export type AdminTestimonialPaginationQueryHookResult = ReturnType<typeof useAdminTestimonialPaginationQuery>
export type AdminTestimonialPaginationLazyQueryHookResult = ReturnType<typeof useAdminTestimonialPaginationLazyQuery>
export type AdminTestimonialPaginationQueryResult = Apollo.QueryResult<
  AdminTestimonialPaginationQuery,
  AdminTestimonialPaginationQueryVariables
>
export const AdminCreateTransactionDocument = gql`
  mutation adminCreateTransaction($input: AdminCreateTransactionInput!) {
    createTransaction: adminCreateTransaction(input: $input) {
      ...AdminTransactionDetails
    }
  }
  ${AdminTransactionDetailsFragmentDoc}
`
export type AdminCreateTransactionMutationFn = Apollo.MutationFunction<
  AdminCreateTransactionMutation,
  AdminCreateTransactionMutationVariables
>

/**
 * __useAdminCreateTransactionMutation__
 *
 * To run a mutation, you first call `useAdminCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateTransactionMutation, { data, loading, error }] = useAdminCreateTransactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateTransactionMutation, AdminCreateTransactionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateTransactionMutation, AdminCreateTransactionMutationVariables>(
    AdminCreateTransactionDocument,
    options,
  )
}
export type AdminCreateTransactionMutationHookResult = ReturnType<typeof useAdminCreateTransactionMutation>
export type AdminCreateTransactionMutationResult = Apollo.MutationResult<AdminCreateTransactionMutation>
export type AdminCreateTransactionMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateTransactionMutation,
  AdminCreateTransactionMutationVariables
>
export const AdminDeleteTransactionDocument = gql`
  mutation adminDeleteTransaction($transactionId: String!) {
    deleteTransaction: adminDeleteTransaction(transactionId: $transactionId) {
      id
    }
  }
`
export type AdminDeleteTransactionMutationFn = Apollo.MutationFunction<
  AdminDeleteTransactionMutation,
  AdminDeleteTransactionMutationVariables
>

/**
 * __useAdminDeleteTransactionMutation__
 *
 * To run a mutation, you first call `useAdminDeleteTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteTransactionMutation, { data, loading, error }] = useAdminDeleteTransactionMutation({
 *   variables: {
 *      transactionId: // value for 'transactionId'
 *   },
 * });
 */
export function useAdminDeleteTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteTransactionMutation, AdminDeleteTransactionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteTransactionMutation, AdminDeleteTransactionMutationVariables>(
    AdminDeleteTransactionDocument,
    options,
  )
}
export type AdminDeleteTransactionMutationHookResult = ReturnType<typeof useAdminDeleteTransactionMutation>
export type AdminDeleteTransactionMutationResult = Apollo.MutationResult<AdminDeleteTransactionMutation>
export type AdminDeleteTransactionMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteTransactionMutation,
  AdminDeleteTransactionMutationVariables
>
export const AdminUpdateTransactionDocument = gql`
  mutation adminUpdateTransaction($transactionId: String!, $input: AdminUpdateTransactionInput!) {
    updateTransaction: adminUpdateTransaction(transactionId: $transactionId, input: $input) {
      ...AdminTransactionDetails
    }
  }
  ${AdminTransactionDetailsFragmentDoc}
`
export type AdminUpdateTransactionMutationFn = Apollo.MutationFunction<
  AdminUpdateTransactionMutation,
  AdminUpdateTransactionMutationVariables
>

/**
 * __useAdminUpdateTransactionMutation__
 *
 * To run a mutation, you first call `useAdminUpdateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateTransactionMutation, { data, loading, error }] = useAdminUpdateTransactionMutation({
 *   variables: {
 *      transactionId: // value for 'transactionId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateTransactionMutation, AdminUpdateTransactionMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateTransactionMutation, AdminUpdateTransactionMutationVariables>(
    AdminUpdateTransactionDocument,
    options,
  )
}
export type AdminUpdateTransactionMutationHookResult = ReturnType<typeof useAdminUpdateTransactionMutation>
export type AdminUpdateTransactionMutationResult = Apollo.MutationResult<AdminUpdateTransactionMutation>
export type AdminUpdateTransactionMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateTransactionMutation,
  AdminUpdateTransactionMutationVariables
>
export const AdminTransactionDocument = gql`
  query AdminTransaction($transactionId: String!) {
    transaction: adminTransaction(transactionId: $transactionId) {
      ...AdminTransactionDetails
    }
  }
  ${AdminTransactionDetailsFragmentDoc}
`

/**
 * __useAdminTransactionQuery__
 *
 * To run a query within a React component, call `useAdminTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminTransactionQuery({
 *   variables: {
 *      transactionId: // value for 'transactionId'
 *   },
 * });
 */
export function useAdminTransactionQuery(
  baseOptions: Apollo.QueryHookOptions<AdminTransactionQuery, AdminTransactionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminTransactionQuery, AdminTransactionQueryVariables>(AdminTransactionDocument, options)
}
export function useAdminTransactionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminTransactionQuery, AdminTransactionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminTransactionQuery, AdminTransactionQueryVariables>(AdminTransactionDocument, options)
}
export type AdminTransactionQueryHookResult = ReturnType<typeof useAdminTransactionQuery>
export type AdminTransactionLazyQueryHookResult = ReturnType<typeof useAdminTransactionLazyQuery>
export type AdminTransactionQueryResult = Apollo.QueryResult<AdminTransactionQuery, AdminTransactionQueryVariables>
export const AdminTransactionsDocument = gql`
  query AdminTransactions($input: AdminListTransactionInput) {
    transactions: adminTransactions(input: $input) {
      ...AdminTransactionDetails
    }
    counters: adminCountTransactions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminTransactionDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminTransactionsQuery__
 *
 * To run a query within a React component, call `useAdminTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminTransactionsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminTransactionsQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminTransactionsQuery, AdminTransactionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminTransactionsQuery, AdminTransactionsQueryVariables>(AdminTransactionsDocument, options)
}
export function useAdminTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminTransactionsQuery, AdminTransactionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminTransactionsQuery, AdminTransactionsQueryVariables>(
    AdminTransactionsDocument,
    options,
  )
}
export type AdminTransactionsQueryHookResult = ReturnType<typeof useAdminTransactionsQuery>
export type AdminTransactionsLazyQueryHookResult = ReturnType<typeof useAdminTransactionsLazyQuery>
export type AdminTransactionsQueryResult = Apollo.QueryResult<AdminTransactionsQuery, AdminTransactionsQueryVariables>
export const AdminTransactionPaginationDocument = gql`
  query AdminTransactionPagination($input: AdminListTransactionInput) {
    counters: adminCountTransactions(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminTransactionPaginationQuery__
 *
 * To run a query within a React component, call `useAdminTransactionPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminTransactionPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminTransactionPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminTransactionPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminTransactionPaginationQuery, AdminTransactionPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminTransactionPaginationQuery, AdminTransactionPaginationQueryVariables>(
    AdminTransactionPaginationDocument,
    options,
  )
}
export function useAdminTransactionPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminTransactionPaginationQuery, AdminTransactionPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminTransactionPaginationQuery, AdminTransactionPaginationQueryVariables>(
    AdminTransactionPaginationDocument,
    options,
  )
}
export type AdminTransactionPaginationQueryHookResult = ReturnType<typeof useAdminTransactionPaginationQuery>
export type AdminTransactionPaginationLazyQueryHookResult = ReturnType<typeof useAdminTransactionPaginationLazyQuery>
export type AdminTransactionPaginationQueryResult = Apollo.QueryResult<
  AdminTransactionPaginationQuery,
  AdminTransactionPaginationQueryVariables
>
export const AdminCreateUploadDocument = gql`
  mutation adminCreateUpload($input: AdminCreateUploadInput!) {
    createUpload: adminCreateUpload(input: $input) {
      ...AdminUploadDetails
    }
  }
  ${AdminUploadDetailsFragmentDoc}
`
export type AdminCreateUploadMutationFn = Apollo.MutationFunction<
  AdminCreateUploadMutation,
  AdminCreateUploadMutationVariables
>

/**
 * __useAdminCreateUploadMutation__
 *
 * To run a mutation, you first call `useAdminCreateUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateUploadMutation, { data, loading, error }] = useAdminCreateUploadMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateUploadMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateUploadMutation, AdminCreateUploadMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateUploadMutation, AdminCreateUploadMutationVariables>(
    AdminCreateUploadDocument,
    options,
  )
}
export type AdminCreateUploadMutationHookResult = ReturnType<typeof useAdminCreateUploadMutation>
export type AdminCreateUploadMutationResult = Apollo.MutationResult<AdminCreateUploadMutation>
export type AdminCreateUploadMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateUploadMutation,
  AdminCreateUploadMutationVariables
>
export const AdminDeleteUploadDocument = gql`
  mutation adminDeleteUpload($uploadId: String!) {
    deleteUpload: adminDeleteUpload(uploadId: $uploadId) {
      id
    }
  }
`
export type AdminDeleteUploadMutationFn = Apollo.MutationFunction<
  AdminDeleteUploadMutation,
  AdminDeleteUploadMutationVariables
>

/**
 * __useAdminDeleteUploadMutation__
 *
 * To run a mutation, you first call `useAdminDeleteUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteUploadMutation, { data, loading, error }] = useAdminDeleteUploadMutation({
 *   variables: {
 *      uploadId: // value for 'uploadId'
 *   },
 * });
 */
export function useAdminDeleteUploadMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteUploadMutation, AdminDeleteUploadMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteUploadMutation, AdminDeleteUploadMutationVariables>(
    AdminDeleteUploadDocument,
    options,
  )
}
export type AdminDeleteUploadMutationHookResult = ReturnType<typeof useAdminDeleteUploadMutation>
export type AdminDeleteUploadMutationResult = Apollo.MutationResult<AdminDeleteUploadMutation>
export type AdminDeleteUploadMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteUploadMutation,
  AdminDeleteUploadMutationVariables
>
export const AdminUpdateUploadDocument = gql`
  mutation adminUpdateUpload($uploadId: String!, $input: AdminUpdateUploadInput!) {
    updateUpload: adminUpdateUpload(uploadId: $uploadId, input: $input) {
      ...AdminUploadDetails
    }
  }
  ${AdminUploadDetailsFragmentDoc}
`
export type AdminUpdateUploadMutationFn = Apollo.MutationFunction<
  AdminUpdateUploadMutation,
  AdminUpdateUploadMutationVariables
>

/**
 * __useAdminUpdateUploadMutation__
 *
 * To run a mutation, you first call `useAdminUpdateUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateUploadMutation, { data, loading, error }] = useAdminUpdateUploadMutation({
 *   variables: {
 *      uploadId: // value for 'uploadId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateUploadMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateUploadMutation, AdminUpdateUploadMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateUploadMutation, AdminUpdateUploadMutationVariables>(
    AdminUpdateUploadDocument,
    options,
  )
}
export type AdminUpdateUploadMutationHookResult = ReturnType<typeof useAdminUpdateUploadMutation>
export type AdminUpdateUploadMutationResult = Apollo.MutationResult<AdminUpdateUploadMutation>
export type AdminUpdateUploadMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateUploadMutation,
  AdminUpdateUploadMutationVariables
>
export const AdminUploadDocument = gql`
  query AdminUpload($uploadId: String!) {
    upload: adminUpload(uploadId: $uploadId) {
      ...AdminUploadDetails
    }
  }
  ${AdminUploadDetailsFragmentDoc}
`

/**
 * __useAdminUploadQuery__
 *
 * To run a query within a React component, call `useAdminUploadQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminUploadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminUploadQuery({
 *   variables: {
 *      uploadId: // value for 'uploadId'
 *   },
 * });
 */
export function useAdminUploadQuery(baseOptions: Apollo.QueryHookOptions<AdminUploadQuery, AdminUploadQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminUploadQuery, AdminUploadQueryVariables>(AdminUploadDocument, options)
}
export function useAdminUploadLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminUploadQuery, AdminUploadQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminUploadQuery, AdminUploadQueryVariables>(AdminUploadDocument, options)
}
export type AdminUploadQueryHookResult = ReturnType<typeof useAdminUploadQuery>
export type AdminUploadLazyQueryHookResult = ReturnType<typeof useAdminUploadLazyQuery>
export type AdminUploadQueryResult = Apollo.QueryResult<AdminUploadQuery, AdminUploadQueryVariables>
export const AdminUploadsDocument = gql`
  query AdminUploads($input: AdminListUploadInput) {
    uploads: adminUploads(input: $input) {
      ...AdminUploadDetails
    }
    counters: adminCountUploads(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminUploadDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminUploadsQuery__
 *
 * To run a query within a React component, call `useAdminUploadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminUploadsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminUploadsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUploadsQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminUploadsQuery, AdminUploadsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminUploadsQuery, AdminUploadsQueryVariables>(AdminUploadsDocument, options)
}
export function useAdminUploadsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminUploadsQuery, AdminUploadsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminUploadsQuery, AdminUploadsQueryVariables>(AdminUploadsDocument, options)
}
export type AdminUploadsQueryHookResult = ReturnType<typeof useAdminUploadsQuery>
export type AdminUploadsLazyQueryHookResult = ReturnType<typeof useAdminUploadsLazyQuery>
export type AdminUploadsQueryResult = Apollo.QueryResult<AdminUploadsQuery, AdminUploadsQueryVariables>
export const AdminUploadPaginationDocument = gql`
  query AdminUploadPagination($input: AdminListUploadInput) {
    counters: adminCountUploads(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminUploadPaginationQuery__
 *
 * To run a query within a React component, call `useAdminUploadPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminUploadPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminUploadPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUploadPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminUploadPaginationQuery, AdminUploadPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminUploadPaginationQuery, AdminUploadPaginationQueryVariables>(
    AdminUploadPaginationDocument,
    options,
  )
}
export function useAdminUploadPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminUploadPaginationQuery, AdminUploadPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminUploadPaginationQuery, AdminUploadPaginationQueryVariables>(
    AdminUploadPaginationDocument,
    options,
  )
}
export type AdminUploadPaginationQueryHookResult = ReturnType<typeof useAdminUploadPaginationQuery>
export type AdminUploadPaginationLazyQueryHookResult = ReturnType<typeof useAdminUploadPaginationLazyQuery>
export type AdminUploadPaginationQueryResult = Apollo.QueryResult<
  AdminUploadPaginationQuery,
  AdminUploadPaginationQueryVariables
>
export const AdminCreateUserDocument = gql`
  mutation adminCreateUser($input: AdminCreateUserInput!) {
    createUser: adminCreateUser(input: $input) {
      ...AdminUserDetails
    }
  }
  ${AdminUserDetailsFragmentDoc}
`
export type AdminCreateUserMutationFn = Apollo.MutationFunction<
  AdminCreateUserMutation,
  AdminCreateUserMutationVariables
>

/**
 * __useAdminCreateUserMutation__
 *
 * To run a mutation, you first call `useAdminCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateUserMutation, { data, loading, error }] = useAdminCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminCreateUserMutation, AdminCreateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminCreateUserMutation, AdminCreateUserMutationVariables>(AdminCreateUserDocument, options)
}
export type AdminCreateUserMutationHookResult = ReturnType<typeof useAdminCreateUserMutation>
export type AdminCreateUserMutationResult = Apollo.MutationResult<AdminCreateUserMutation>
export type AdminCreateUserMutationOptions = Apollo.BaseMutationOptions<
  AdminCreateUserMutation,
  AdminCreateUserMutationVariables
>
export const AdminDeleteUserDocument = gql`
  mutation adminDeleteUser($userId: String!) {
    deleteUser: adminDeleteUser(userId: $userId) {
      id
    }
  }
`
export type AdminDeleteUserMutationFn = Apollo.MutationFunction<
  AdminDeleteUserMutation,
  AdminDeleteUserMutationVariables
>

/**
 * __useAdminDeleteUserMutation__
 *
 * To run a mutation, you first call `useAdminDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminDeleteUserMutation, { data, loading, error }] = useAdminDeleteUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAdminDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminDeleteUserMutation, AdminDeleteUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminDeleteUserMutation, AdminDeleteUserMutationVariables>(AdminDeleteUserDocument, options)
}
export type AdminDeleteUserMutationHookResult = ReturnType<typeof useAdminDeleteUserMutation>
export type AdminDeleteUserMutationResult = Apollo.MutationResult<AdminDeleteUserMutation>
export type AdminDeleteUserMutationOptions = Apollo.BaseMutationOptions<
  AdminDeleteUserMutation,
  AdminDeleteUserMutationVariables
>
export const AdminUpdateUserDocument = gql`
  mutation adminUpdateUser($userId: String!, $input: AdminUpdateUserInput!) {
    updateUser: adminUpdateUser(userId: $userId, input: $input) {
      ...AdminUserDetails
    }
  }
  ${AdminUserDetailsFragmentDoc}
`
export type AdminUpdateUserMutationFn = Apollo.MutationFunction<
  AdminUpdateUserMutation,
  AdminUpdateUserMutationVariables
>

/**
 * __useAdminUpdateUserMutation__
 *
 * To run a mutation, you first call `useAdminUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminUpdateUserMutation, { data, loading, error }] = useAdminUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<AdminUpdateUserMutation, AdminUpdateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AdminUpdateUserMutation, AdminUpdateUserMutationVariables>(AdminUpdateUserDocument, options)
}
export type AdminUpdateUserMutationHookResult = ReturnType<typeof useAdminUpdateUserMutation>
export type AdminUpdateUserMutationResult = Apollo.MutationResult<AdminUpdateUserMutation>
export type AdminUpdateUserMutationOptions = Apollo.BaseMutationOptions<
  AdminUpdateUserMutation,
  AdminUpdateUserMutationVariables
>
export const AdminUserDocument = gql`
  query AdminUser($userId: String!) {
    user: adminUser(userId: $userId) {
      ...AdminUserDetails
    }
  }
  ${AdminUserDetailsFragmentDoc}
`

/**
 * __useAdminUserQuery__
 *
 * To run a query within a React component, call `useAdminUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAdminUserQuery(baseOptions: Apollo.QueryHookOptions<AdminUserQuery, AdminUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminUserQuery, AdminUserQueryVariables>(AdminUserDocument, options)
}
export function useAdminUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminUserQuery, AdminUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminUserQuery, AdminUserQueryVariables>(AdminUserDocument, options)
}
export type AdminUserQueryHookResult = ReturnType<typeof useAdminUserQuery>
export type AdminUserLazyQueryHookResult = ReturnType<typeof useAdminUserLazyQuery>
export type AdminUserQueryResult = Apollo.QueryResult<AdminUserQuery, AdminUserQueryVariables>
export const AdminUsersDocument = gql`
  query AdminUsers($input: AdminListUserInput) {
    users: adminUsers(input: $input) {
      ...AdminUserDetails
    }
    counters: adminCountUsers(input: $input) {
      ...CorePagingDetails
    }
  }
  ${AdminUserDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminUsersQuery__
 *
 * To run a query within a React component, call `useAdminUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUsersQuery(baseOptions?: Apollo.QueryHookOptions<AdminUsersQuery, AdminUsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminUsersQuery, AdminUsersQueryVariables>(AdminUsersDocument, options)
}
export function useAdminUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminUsersQuery, AdminUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminUsersQuery, AdminUsersQueryVariables>(AdminUsersDocument, options)
}
export type AdminUsersQueryHookResult = ReturnType<typeof useAdminUsersQuery>
export type AdminUsersLazyQueryHookResult = ReturnType<typeof useAdminUsersLazyQuery>
export type AdminUsersQueryResult = Apollo.QueryResult<AdminUsersQuery, AdminUsersQueryVariables>
export const AdminUserPaginationDocument = gql`
  query AdminUserPagination($input: AdminListUserInput) {
    counters: adminCountUsers(input: $input) {
      ...CorePagingDetails
    }
  }
  ${CorePagingDetailsFragmentDoc}
`

/**
 * __useAdminUserPaginationQuery__
 *
 * To run a query within a React component, call `useAdminUserPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminUserPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminUserPaginationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminUserPaginationQuery(
  baseOptions?: Apollo.QueryHookOptions<AdminUserPaginationQuery, AdminUserPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AdminUserPaginationQuery, AdminUserPaginationQueryVariables>(
    AdminUserPaginationDocument,
    options,
  )
}
export function useAdminUserPaginationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AdminUserPaginationQuery, AdminUserPaginationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AdminUserPaginationQuery, AdminUserPaginationQueryVariables>(
    AdminUserPaginationDocument,
    options,
  )
}
export type AdminUserPaginationQueryHookResult = ReturnType<typeof useAdminUserPaginationQuery>
export type AdminUserPaginationLazyQueryHookResult = ReturnType<typeof useAdminUserPaginationLazyQuery>
export type AdminUserPaginationQueryResult = Apollo.QueryResult<
  AdminUserPaginationQuery,
  AdminUserPaginationQueryVariables
>
export const MeDocument = gql`
  query me {
    me {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options)
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...UserTokenDetails
    }
  }
  ${UserTokenDetailsFragmentDoc}
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...UserTokenDetails
    }
  }
  ${UserTokenDetailsFragmentDoc}
`
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($input: ForgotPasswordInput!) {
    forgotPassword(input: $input)
  }
`
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options)
}
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>
export const ResetPasswordDocument = gql`
  mutation ResetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      email
    }
  }
`
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options)
}
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`

/**
 * __useUptimeQuery__
 *
 * To run a query within a React component, call `useUptimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useUptimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUptimeQuery({
 *   variables: {
 *   },
 * });
 */
export function useUptimeQuery(baseOptions?: Apollo.QueryHookOptions<UptimeQuery, UptimeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UptimeQuery, UptimeQueryVariables>(UptimeDocument, options)
}
export function useUptimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UptimeQuery, UptimeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UptimeQuery, UptimeQueryVariables>(UptimeDocument, options)
}
export type UptimeQueryHookResult = ReturnType<typeof useUptimeQuery>
export type UptimeLazyQueryHookResult = ReturnType<typeof useUptimeLazyQuery>
export type UptimeQueryResult = Apollo.QueryResult<UptimeQuery, UptimeQueryVariables>
export const IntercomPubDocument = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`
export type IntercomPubMutationFn = Apollo.MutationFunction<IntercomPubMutation, IntercomPubMutationVariables>

/**
 * __useIntercomPubMutation__
 *
 * To run a mutation, you first call `useIntercomPubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIntercomPubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [intercomPubMutation, { data, loading, error }] = useIntercomPubMutation({
 *   variables: {
 *      type: // value for 'type'
 *      scope: // value for 'scope'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useIntercomPubMutation(
  baseOptions?: Apollo.MutationHookOptions<IntercomPubMutation, IntercomPubMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<IntercomPubMutation, IntercomPubMutationVariables>(IntercomPubDocument, options)
}
export type IntercomPubMutationHookResult = ReturnType<typeof useIntercomPubMutation>
export type IntercomPubMutationResult = Apollo.MutationResult<IntercomPubMutation>
export type IntercomPubMutationOptions = Apollo.BaseMutationOptions<IntercomPubMutation, IntercomPubMutationVariables>
export const IntercomSubDocument = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

/**
 * __useIntercomSubSubscription__
 *
 * To run a query within a React component, call `useIntercomSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useIntercomSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIntercomSubSubscription({
 *   variables: {
 *   },
 * });
 */
export function useIntercomSubSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<IntercomSubSubscription, IntercomSubSubscriptionVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<IntercomSubSubscription, IntercomSubSubscriptionVariables>(IntercomSubDocument, options)
}
export type IntercomSubSubscriptionHookResult = ReturnType<typeof useIntercomSubSubscription>
export type IntercomSubSubscriptionResult = Apollo.SubscriptionResult<IntercomSubSubscription>
