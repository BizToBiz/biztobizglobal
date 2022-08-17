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
  establishedDate?: InputMaybe<Scalars['DateTime']>
  facebook?: InputMaybe<Scalars['String']>
  latitude?: InputMaybe<Scalars['String']>
  longitude?: InputMaybe<Scalars['String']>
  meetingDay?: InputMaybe<DayOfWeek>
  meetingDetails?: InputMaybe<Scalars['String']>
  meetingTime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  regionId?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  status?: InputMaybe<ChapterStatus>
}

export type AdminCreateChapterMemberInput = {
  isMentor?: InputMaybe<Scalars['Boolean']>
  isTrainer?: InputMaybe<Scalars['Boolean']>
  role?: InputMaybe<ChapterMemberRole>
}

export type AdminCreateCompanyInput = {
  name: Scalars['String']
}

export type AdminCreateCompanyMemberInput = {
  location: Scalars['String']
}

export type AdminCreateIndustryInput = {
  name: Scalars['String']
}

export type AdminCreateMeetingInput = {
  date: Scalars['DateTime']
}

export type AdminCreateMeetingPresenceInput = {
  date: Scalars['String']
}

export type AdminCreateNotificationInput = {
  message: Scalars['String']
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

export type AdminCreateUploadInput = {
  originalFilename: Scalars['String']
}

export type AdminCreateUserInput = {
  developer?: InputMaybe<Scalars['Boolean']>
  firstName: Scalars['String']
  lastSeen?: InputMaybe<Scalars['DateTime']>
  onlineStatus?: InputMaybe<UserOnlineStatus>
  role: Role
  status?: InputMaybe<UserStatus>
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
  name?: InputMaybe<Scalars['String']>
}

export type AdminUpdateChapterInput = {
  avatarEmail?: InputMaybe<Scalars['String']>
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
  name?: InputMaybe<Scalars['String']>
  regionId?: InputMaybe<Scalars['String']>
  state?: InputMaybe<Scalars['String']>
  status?: InputMaybe<ChapterStatus>
}

export type AdminUpdateChapterMemberInput = {
  isMentor?: InputMaybe<Scalars['Boolean']>
  isTrainer?: InputMaybe<Scalars['Boolean']>
  role?: InputMaybe<ChapterMemberRole>
}

export type AdminUpdateCompanyInput = {
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

export type AdminUpdateUploadInput = {
  originalFilename?: InputMaybe<Scalars['String']>
}

export type AdminUpdateUserInput = {
  developer?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  emailConfirmed?: InputMaybe<Scalars['Boolean']>
  firstName?: InputMaybe<Scalars['String']>
  infusionsoftId?: InputMaybe<Scalars['Int']>
  lastSeen?: InputMaybe<Scalars['DateTime']>
  onlineStatus?: InputMaybe<UserOnlineStatus>
  role?: InputMaybe<Role>
  status?: InputMaybe<UserStatus>
  username?: InputMaybe<Scalars['String']>
}

export type AttendanceReminder = {
  __typename?: 'AttendanceReminder'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
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
  name?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  status?: Maybe<ChapterStatus>
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
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  meeting?: Maybe<Meeting>
  meetingAttendance?: Maybe<MeetingAttendance>
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
  adminCreateReferral?: Maybe<Referral>
  adminCreateRegion?: Maybe<Region>
  adminCreateSubstitute?: Maybe<Substitute>
  adminCreateSubstituteGroup?: Maybe<SubstituteGroup>
  adminCreateTerritory?: Maybe<Territory>
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
  adminDeleteReferral?: Maybe<Referral>
  adminDeleteRegion?: Maybe<Region>
  adminDeleteSubstitute?: Maybe<Substitute>
  adminDeleteSubstituteGroup?: Maybe<SubstituteGroup>
  adminDeleteTerritory?: Maybe<Territory>
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
  adminUpdateReferral?: Maybe<Referral>
  adminUpdateRegion?: Maybe<Region>
  adminUpdateSubstitute?: Maybe<Substitute>
  adminUpdateSubstituteGroup?: Maybe<SubstituteGroup>
  adminUpdateTerritory?: Maybe<Territory>
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
  leaderCreateReferral?: Maybe<Referral>
  leaderCreateRegion?: Maybe<Region>
  leaderCreateSubstitute?: Maybe<Substitute>
  leaderCreateSubstituteGroup?: Maybe<SubstituteGroup>
  leaderCreateTerritory?: Maybe<Territory>
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
  leaderDeleteReferral?: Maybe<Referral>
  leaderDeleteRegion?: Maybe<Region>
  leaderDeleteSubstitute?: Maybe<Substitute>
  leaderDeleteSubstituteGroup?: Maybe<SubstituteGroup>
  leaderDeleteTerritory?: Maybe<Territory>
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
  leaderUpdateReferral?: Maybe<Referral>
  leaderUpdateRegion?: Maybe<Region>
  leaderUpdateSubstitute?: Maybe<Substitute>
  leaderUpdateSubstituteGroup?: Maybe<SubstituteGroup>
  leaderUpdateTerritory?: Maybe<Territory>
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
  userCreateReferral?: Maybe<Referral>
  userCreateRegion?: Maybe<Region>
  userCreateSubstitute?: Maybe<Substitute>
  userCreateSubstituteGroup?: Maybe<SubstituteGroup>
  userCreateTerritory?: Maybe<Territory>
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
  userDeleteReferral?: Maybe<Referral>
  userDeleteRegion?: Maybe<Region>
  userDeleteSubstitute?: Maybe<Substitute>
  userDeleteSubstituteGroup?: Maybe<SubstituteGroup>
  userDeleteTerritory?: Maybe<Territory>
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
  userUpdateReferral?: Maybe<Referral>
  userUpdateRegion?: Maybe<Region>
  userUpdateSubstitute?: Maybe<Substitute>
  userUpdateSubstituteGroup?: Maybe<SubstituteGroup>
  userUpdateTerritory?: Maybe<Territory>
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
  adminCountReferrals?: Maybe<CorePaging>
  adminCountRegions?: Maybe<CorePaging>
  adminCountSubstituteGroups?: Maybe<CorePaging>
  adminCountSubstitutes?: Maybe<CorePaging>
  adminCountTerritories?: Maybe<CorePaging>
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
  leaderCountReferrals?: Maybe<CorePaging>
  leaderCountRegions?: Maybe<CorePaging>
  leaderCountSubstituteGroups?: Maybe<CorePaging>
  leaderCountSubstitutes?: Maybe<CorePaging>
  leaderCountTerritories?: Maybe<CorePaging>
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
  userCountReferrals?: Maybe<CorePaging>
  userCountRegions?: Maybe<CorePaging>
  userCountSubstituteGroups?: Maybe<CorePaging>
  userCountSubstitutes?: Maybe<CorePaging>
  userCountTerritories?: Maybe<CorePaging>
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
  Substitute?: Maybe<User>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  invited?: Maybe<Array<User>>
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
  updatedAt?: Maybe<Scalars['DateTime']>
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
  presence?: Maybe<MeetingPresence>
  promoter?: Maybe<Scalars['Int']>
  recognized?: Maybe<Scalars['Int']>
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
  thinker?: Maybe<Scalars['Int']>
  timeInIndustry?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
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

export type UserUpdateUploadInput = {
  originalFilename?: InputMaybe<Scalars['String']>
}

export type UserUpdateUserInput = {
  firstName?: InputMaybe<Scalars['String']>
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
