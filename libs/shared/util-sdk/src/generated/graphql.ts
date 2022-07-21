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
  name: Scalars['String']
}

export type AdminCreateChapterInput = {
  avatarEmail?: InputMaybe<Scalars['String']>
  avatarUrl?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  establishedDate?: InputMaybe<Scalars['String']>
  facebook?: InputMaybe<Scalars['String']>
  latitude?: InputMaybe<Scalars['String']>
  longitude?: InputMaybe<Scalars['String']>
  meetingDay?: InputMaybe<DayOfWeek>
  meetingDetails?: InputMaybe<Scalars['String']>
  meetingTime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  status?: InputMaybe<ChapterStatus>
}

export type AdminCreateChapterMemberInput = {
  name: Scalars['String']
}

export type AdminCreateCompanyInput = {
  name: Scalars['String']
}

export type AdminCreateMeetingInput = {
  name: Scalars['String']
}

export type AdminCreateNotificationInput = {
  name: Scalars['String']
}

export type AdminCreatePowerHourInput = {
  name: Scalars['String']
}

export type AdminCreateReferralInput = {
  name: Scalars['String']
}

export type AdminCreateRegionInput = {
  name: Scalars['String']
}

export type AdminCreateSubstituteGroupInput = {
  name: Scalars['String']
}

export type AdminCreateSubstituteInput = {
  name: Scalars['String']
}

export type AdminCreateTerritoryInput = {
  name: Scalars['String']
}

export type AdminCreateTestimonialInput = {
  name: Scalars['String']
}

export type AdminCreateTransactionInput = {
  name: Scalars['String']
}

export type AdminCreateUploadInput = {
  name: Scalars['String']
}

export type AdminCreateUserInput = {
  email: Scalars['String']
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  role: Role
  username?: InputMaybe<Scalars['String']>
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
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListChapterMemberInput = {
  name?: InputMaybe<Scalars['String']>
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

export type AdminListMeetingInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListNotificationInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListPowerHourInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListReferralInput = {
  name?: InputMaybe<Scalars['String']>
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
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListTransactionInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminListUploadInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type AdminUpdateAttendanceReminderInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateChapterInput = {
  avatarEmail?: InputMaybe<Scalars['String']>
  avatarUrl?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  establishedDate?: InputMaybe<Scalars['String']>
  facebook?: InputMaybe<Scalars['String']>
  latitude?: InputMaybe<Scalars['String']>
  longitude?: InputMaybe<Scalars['String']>
  meetingDay?: InputMaybe<DayOfWeek>
  meetingDetails?: InputMaybe<Scalars['String']>
  meetingTime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  status?: InputMaybe<ChapterStatus>
}

export type AdminUpdateChapterMemberInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateCompanyInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateMeetingInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateNotificationInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdatePowerHourInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateReferralInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateRegionInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateSubstituteGroupInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateSubstituteInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateTerritoryInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateTestimonialInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateTransactionInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateUploadInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateUserInput = {
  address?: InputMaybe<Scalars['String']>
  address2?: InputMaybe<Scalars['String']>
  applicationDate?: InputMaybe<Scalars['DateTime']>
  avatarUrl?: InputMaybe<Scalars['String']>
  bio?: InputMaybe<Scalars['String']>
  cell?: InputMaybe<Scalars['String']>
  chapterTitle?: InputMaybe<Scalars['String']>
  city?: InputMaybe<Scalars['String']>
  comments?: InputMaybe<Scalars['String']>
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
  promoter?: InputMaybe<Scalars['Int']>
  recognized?: InputMaybe<Scalars['Int']>
  renewalDate?: InputMaybe<Scalars['DateTime']>
  role?: InputMaybe<Role>
  salesAgentName?: InputMaybe<Scalars['String']>
  showGravatar?: InputMaybe<Scalars['Boolean']>
  state?: InputMaybe<Scalars['String']>
  status?: InputMaybe<UserStatus>
  strategizer?: InputMaybe<Scalars['Int']>
  substitute?: InputMaybe<Scalars['Boolean']>
  tagline?: InputMaybe<Scalars['String']>
  terminatedByName?: InputMaybe<Scalars['String']>
  terminationComments?: InputMaybe<Scalars['String']>
  terminationDate?: InputMaybe<Scalars['DateTime']>
  terminationReason?: InputMaybe<Scalars['String']>
  thinker?: InputMaybe<Scalars['Int']>
  timeInIndustry?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
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
  sentBy?: Maybe<User>
  sentTo?: Maybe<User>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type Chapter = {
  __typename?: 'Chapter'
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
  members: Array<ChapterMember>
  name?: Maybe<Scalars['String']>
  region?: Maybe<Region>
  state?: Maybe<Scalars['String']>
  status?: Maybe<ChapterStatus>
  substituteGroup?: Maybe<SubstituteGroup>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ChapterMember = {
  __typename?: 'ChapterMember'
  chapter?: Maybe<Chapter>
  id?: Maybe<Scalars['String']>
  isMentor?: Maybe<Scalars['Boolean']>
  isTrainer?: Maybe<Scalars['Boolean']>
  member?: Maybe<User>
  role?: Maybe<ChapterMemberRole>
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
  fromDate?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  member?: Maybe<User>
  role?: Maybe<Scalars['String']>
  thruDate?: Maybe<Scalars['DateTime']>
}

export type CorePaging = {
  __typename?: 'CorePaging'
  count?: Maybe<Scalars['Float']>
  page?: Maybe<Scalars['Float']>
  skip?: Maybe<Scalars['Float']>
  take?: Maybe<Scalars['Float']>
  total?: Maybe<Scalars['Float']>
}

export type CorePagingInput = {
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
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
  createdAt?: Maybe<Scalars['DateTime']>
  date?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  isVisitorDay?: Maybe<Scalars['Boolean']>
  presence?: Maybe<Array<MeetingPresence>>
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
  member?: Maybe<User>
  updatedAt?: Maybe<Scalars['DateTime']>
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
  adminCreateMeeting?: Maybe<Meeting>
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
  adminDeleteMeeting?: Maybe<Meeting>
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
  adminSetUserPassword?: Maybe<User>
  adminUpdateAttendanceReminder?: Maybe<AttendanceReminder>
  adminUpdateChapter?: Maybe<Chapter>
  adminUpdateChapterMember?: Maybe<ChapterMember>
  adminUpdateCompany?: Maybe<Company>
  adminUpdateMeeting?: Maybe<Meeting>
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
  login?: Maybe<UserToken>
  logout?: Maybe<Scalars['Boolean']>
  register?: Maybe<UserToken>
  resetPassword?: Maybe<User>
  userCreateAttendanceReminder?: Maybe<AttendanceReminder>
  userCreateChapter?: Maybe<Chapter>
  userCreateChapterMember?: Maybe<ChapterMember>
  userCreateCompany?: Maybe<Company>
  userCreateMeeting?: Maybe<Meeting>
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
  userDeleteAttendanceReminder?: Maybe<AttendanceReminder>
  userDeleteChapter?: Maybe<Chapter>
  userDeleteChapterMember?: Maybe<ChapterMember>
  userDeleteCompany?: Maybe<Company>
  userDeleteMeeting?: Maybe<Meeting>
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
  userUpdateAttendanceReminder?: Maybe<AttendanceReminder>
  userUpdateChapter?: Maybe<Chapter>
  userUpdateChapterMember?: Maybe<ChapterMember>
  userUpdateCompany?: Maybe<Company>
  userUpdateMeeting?: Maybe<Meeting>
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

export type MutationAdminCreateMeetingArgs = {
  input: AdminCreateMeetingInput
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

export type MutationAdminDeleteMeetingArgs = {
  meetingId: Scalars['String']
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

export type MutationAdminSetUserPasswordArgs = {
  password: Scalars['String']
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

export type MutationAdminUpdateMeetingArgs = {
  input: AdminUpdateMeetingInput
  meetingId: Scalars['String']
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

export type MutationUserCreateMeetingArgs = {
  input: UserCreateMeetingInput
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

export type MutationUserDeleteMeetingArgs = {
  meetingId: Scalars['String']
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

export type MutationUserUpdateMeetingArgs = {
  input: UserUpdateMeetingInput
  meetingId: Scalars['String']
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
  adminCountAttendanceReminders?: Maybe<CorePaging>
  adminCountChapterMembers?: Maybe<CorePaging>
  adminCountChapters?: Maybe<CorePaging>
  adminCountCompanies?: Maybe<CorePaging>
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
  adminMeeting?: Maybe<Meeting>
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
  me?: Maybe<User>
  reportReferralsFromChapter: Scalars['Int']
  reportReferralsFromUser: Scalars['Int']
  reportReferralsToChapter: Scalars['Int']
  reportReferralsToUser: Scalars['Int']
  reportReferralsTotal: Scalars['Int']
  reportTransactionsTotalChapter: Scalars['Float']
  reportTransactionsTotalUser: Scalars['Float']
  uptime?: Maybe<Scalars['Float']>
  userAttendanceReminder?: Maybe<AttendanceReminder>
  userAttendanceReminders?: Maybe<Array<AttendanceReminder>>
  userChapter?: Maybe<Chapter>
  userChapterMember?: Maybe<ChapterMember>
  userChapterMembers?: Maybe<Array<ChapterMember>>
  userChapters?: Maybe<Array<Chapter>>
  userCompanies?: Maybe<Array<Company>>
  userCompany?: Maybe<Company>
  userCountAttendanceReminders?: Maybe<CorePaging>
  userCountChapterMembers?: Maybe<CorePaging>
  userCountChapters?: Maybe<CorePaging>
  userCountCompanies?: Maybe<CorePaging>
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
  userMeeting?: Maybe<Meeting>
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
  input?: InputMaybe<CorePagingInput>
}

export type QueryAdminMeetingArgs = {
  meetingId: Scalars['String']
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
  input?: InputMaybe<CorePagingInput>
}

export type QueryReportReferralsFromChapterArgs = {
  chapterId: Scalars['String']
}

export type QueryReportReferralsToChapterArgs = {
  chapterId: Scalars['String']
}

export type QueryReportTransactionsTotalChapterArgs = {
  chapterId: Scalars['String']
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

export type QueryUserMeetingArgs = {
  meetingId: Scalars['String']
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
  sentBy?: Maybe<User>
  to?: Maybe<User>
  toChapter?: Maybe<Chapter>
  toIndustry?: Maybe<Scalars['String']>
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
  Substitute?: Maybe<User>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  invited?: Maybe<User>
  meeting?: Maybe<Meeting>
  sentBy?: Maybe<User>
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
}

export type Upload = {
  __typename?: 'Upload'
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
  name: Scalars['String']
}

export type UserCreateCompanyInput = {
  name: Scalars['String']
}

export type UserCreateMeetingInput = {
  name: Scalars['String']
}

export type UserCreateNotificationInput = {
  name: Scalars['String']
}

export type UserCreatePowerHourInput = {
  name: Scalars['String']
}

export type UserCreateReferralInput = {
  name: Scalars['String']
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
  name: Scalars['String']
}

export type UserCreateTransactionInput = {
  name: Scalars['String']
}

export type UserCreateUploadInput = {
  name: Scalars['String']
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
  name?: InputMaybe<Scalars['String']>
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

export type UserListMeetingInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListNotificationInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListPowerHourInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListReferralInput = {
  name?: InputMaybe<Scalars['String']>
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
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListTransactionInput = {
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
  take?: InputMaybe<Scalars['Float']>
}

export type UserListUploadInput = {
  name?: InputMaybe<Scalars['String']>
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
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateCompanyInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateMeetingInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateNotificationInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdatePowerHourInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateReferralInput = {
  name?: InputMaybe<Scalars['String']>
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
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateTransactionInput = {
  name?: InputMaybe<Scalars['String']>
}

export type UserUpdateUploadInput = {
  name?: InputMaybe<Scalars['String']>
}

export type AdminChapterDetailsFragment = {
  __typename?: 'Chapter'
  id?: string | null
  createdAt?: any | null
  updatedAt?: any | null
  name?: string | null
  description?: string | null
  status?: ChapterStatus | null
  state?: string | null
  establishedDate?: any | null
  avatarEmail?: string | null
  avatarUrl?: string | null
  latitude?: string | null
  longitude?: string | null
  city?: string | null
  meetingDay?: DayOfWeek | null
  meetingDetails?: string | null
  meetingTime?: string | null
  facebook?: string | null
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
    name?: string | null
    description?: string | null
    status?: ChapterStatus | null
    state?: string | null
    establishedDate?: any | null
    avatarEmail?: string | null
    avatarUrl?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    meetingDay?: DayOfWeek | null
    meetingDetails?: string | null
    meetingTime?: string | null
    facebook?: string | null
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
    name?: string | null
    description?: string | null
    status?: ChapterStatus | null
    state?: string | null
    establishedDate?: any | null
    avatarEmail?: string | null
    avatarUrl?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    meetingDay?: DayOfWeek | null
    meetingDetails?: string | null
    meetingTime?: string | null
    facebook?: string | null
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
    name?: string | null
    description?: string | null
    status?: ChapterStatus | null
    state?: string | null
    establishedDate?: any | null
    avatarEmail?: string | null
    avatarUrl?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    meetingDay?: DayOfWeek | null
    meetingDetails?: string | null
    meetingTime?: string | null
    facebook?: string | null
  } | null
}

export type AdminChaptersQueryVariables = Exact<{
  input: AdminListChapterInput
}>

export type AdminChaptersQuery = {
  __typename?: 'Query'
  chapters?: Array<{
    __typename?: 'Chapter'
    id?: string | null
    createdAt?: any | null
    updatedAt?: any | null
    name?: string | null
    description?: string | null
    status?: ChapterStatus | null
    state?: string | null
    establishedDate?: any | null
    avatarEmail?: string | null
    avatarUrl?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    meetingDay?: DayOfWeek | null
    meetingDetails?: string | null
    meetingTime?: string | null
    facebook?: string | null
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
  } | null
}

export type AdminUsersQueryVariables = Exact<{
  input: CorePagingInput
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

export const AdminChapterDetailsFragmentDoc = gql`
  fragment AdminChapterDetails on Chapter {
    id
    createdAt
    updatedAt
    name
    description
    status
    state
    establishedDate
    avatarEmail
    avatarUrl
    latitude
    longitude
    city
    state
    meetingDay
    meetingDetails
    meetingTime
    facebook
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
  query AdminChapters($input: AdminListChapterInput!) {
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
  baseOptions: Apollo.QueryHookOptions<AdminChaptersQuery, AdminChaptersQueryVariables>,
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
  query AdminUsers($input: CorePagingInput!) {
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
export function useAdminUsersQuery(baseOptions: Apollo.QueryHookOptions<AdminUsersQuery, AdminUsersQueryVariables>) {
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
