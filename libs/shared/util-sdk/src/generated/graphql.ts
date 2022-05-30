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

export type AdminCreateChapterInput = {
  name: Scalars['String']
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

export type AdminListChapterInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListChapterMemberInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListCompanyInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListMeetingInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListNotificationInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListPowerHourInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListReferralInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListRegionInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListSubstituteGroupInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListTerritoryInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListTestimonialInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListTransactionInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminListUploadInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type AdminUpdateChapterInput = {
  name?: InputMaybe<Scalars['String']>
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
  avatarUrl?: InputMaybe<Scalars['String']>
  bio?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Role>
  username?: InputMaybe<Scalars['String']>
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
  fromDate?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  thruDate?: Maybe<Scalars['DateTime']>
}

export type CorePaging = {
  __typename?: 'CorePaging'
  count?: Maybe<Scalars['Float']>
  limit?: Maybe<Scalars['Float']>
  page?: Maybe<Scalars['Float']>
  skip?: Maybe<Scalars['Float']>
  total?: Maybe<Scalars['Float']>
}

export type CorePagingInput = {
  limit?: InputMaybe<Scalars['Float']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
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
  adminCreateChapter?: Maybe<Chapter>
  adminCreateChapterMember?: Maybe<ChapterMember>
  adminCreateCompany?: Maybe<Company>
  adminCreateMeeting?: Maybe<Meeting>
  adminCreateNotification?: Maybe<Notification>
  adminCreatePowerHour?: Maybe<PowerHour>
  adminCreateReferral?: Maybe<Referral>
  adminCreateRegion?: Maybe<Region>
  adminCreateSubstituteGroup?: Maybe<SubstituteGroup>
  adminCreateTerritory?: Maybe<Territory>
  adminCreateTestimonial?: Maybe<Testimonial>
  adminCreateTransaction?: Maybe<Transaction>
  adminCreateUpload?: Maybe<Upload>
  adminCreateUser?: Maybe<User>
  adminDeleteChapter?: Maybe<Chapter>
  adminDeleteChapterMember?: Maybe<ChapterMember>
  adminDeleteCompany?: Maybe<Company>
  adminDeleteMeeting?: Maybe<Meeting>
  adminDeleteNotification?: Maybe<Notification>
  adminDeletePowerHour?: Maybe<PowerHour>
  adminDeleteReferral?: Maybe<Referral>
  adminDeleteRegion?: Maybe<Region>
  adminDeleteSubstituteGroup?: Maybe<SubstituteGroup>
  adminDeleteTerritory?: Maybe<Territory>
  adminDeleteTestimonial?: Maybe<Testimonial>
  adminDeleteTransaction?: Maybe<Transaction>
  adminDeleteUpload?: Maybe<Upload>
  adminDeleteUser?: Maybe<User>
  adminSetUserPassword?: Maybe<User>
  adminUpdateChapter?: Maybe<Chapter>
  adminUpdateChapterMember?: Maybe<ChapterMember>
  adminUpdateCompany?: Maybe<Company>
  adminUpdateMeeting?: Maybe<Meeting>
  adminUpdateNotification?: Maybe<Notification>
  adminUpdatePowerHour?: Maybe<PowerHour>
  adminUpdateReferral?: Maybe<Referral>
  adminUpdateRegion?: Maybe<Region>
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
  userCreateChapter?: Maybe<Chapter>
  userCreateChapterMember?: Maybe<ChapterMember>
  userCreateCompany?: Maybe<Company>
  userCreateMeeting?: Maybe<Meeting>
  userCreateNotification?: Maybe<Notification>
  userCreatePowerHour?: Maybe<PowerHour>
  userCreateReferral?: Maybe<Referral>
  userCreateRegion?: Maybe<Region>
  userCreateSubstituteGroup?: Maybe<SubstituteGroup>
  userCreateTerritory?: Maybe<Territory>
  userCreateTestimonial?: Maybe<Testimonial>
  userCreateTransaction?: Maybe<Transaction>
  userCreateUpload?: Maybe<Upload>
  userDeleteChapter?: Maybe<Chapter>
  userDeleteChapterMember?: Maybe<ChapterMember>
  userDeleteCompany?: Maybe<Company>
  userDeleteMeeting?: Maybe<Meeting>
  userDeleteNotification?: Maybe<Notification>
  userDeletePowerHour?: Maybe<PowerHour>
  userDeleteReferral?: Maybe<Referral>
  userDeleteRegion?: Maybe<Region>
  userDeleteSubstituteGroup?: Maybe<SubstituteGroup>
  userDeleteTerritory?: Maybe<Territory>
  userDeleteTestimonial?: Maybe<Testimonial>
  userDeleteTransaction?: Maybe<Transaction>
  userDeleteUpload?: Maybe<Upload>
  userUpdateChapter?: Maybe<Chapter>
  userUpdateChapterMember?: Maybe<ChapterMember>
  userUpdateCompany?: Maybe<Company>
  userUpdateMeeting?: Maybe<Meeting>
  userUpdateNotification?: Maybe<Notification>
  userUpdatePowerHour?: Maybe<PowerHour>
  userUpdateReferral?: Maybe<Referral>
  userUpdateRegion?: Maybe<Region>
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
  adminChapter?: Maybe<Chapter>
  adminChapterMember?: Maybe<ChapterMember>
  adminChapterMembers?: Maybe<Array<ChapterMember>>
  adminChapters?: Maybe<Array<Chapter>>
  adminCompany?: Maybe<Company>
  adminCompanys?: Maybe<Array<Company>>
  adminCountChapterMembers?: Maybe<CorePaging>
  adminCountChapters?: Maybe<CorePaging>
  adminCountCompanys?: Maybe<CorePaging>
  adminCountMeetings?: Maybe<CorePaging>
  adminCountNotifications?: Maybe<CorePaging>
  adminCountPowerHours?: Maybe<CorePaging>
  adminCountReferrals?: Maybe<CorePaging>
  adminCountRegions?: Maybe<CorePaging>
  adminCountSubstituteGroups?: Maybe<CorePaging>
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
  adminSubstituteGroup?: Maybe<SubstituteGroup>
  adminSubstituteGroups?: Maybe<Array<SubstituteGroup>>
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
  userChapter?: Maybe<Chapter>
  userChapterMember?: Maybe<ChapterMember>
  userChapterMembers?: Maybe<Array<ChapterMember>>
  userChapters?: Maybe<Array<Chapter>>
  userCompany?: Maybe<Company>
  userCompanys?: Maybe<Array<Company>>
  userCountChapterMembers?: Maybe<CorePaging>
  userCountChapters?: Maybe<CorePaging>
  userCountCompanys?: Maybe<CorePaging>
  userCountMeetings?: Maybe<CorePaging>
  userCountNotifications?: Maybe<CorePaging>
  userCountPowerHours?: Maybe<CorePaging>
  userCountReferrals?: Maybe<CorePaging>
  userCountRegions?: Maybe<CorePaging>
  userCountSubstituteGroups?: Maybe<CorePaging>
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
  userSubstituteGroup?: Maybe<SubstituteGroup>
  userSubstituteGroups?: Maybe<Array<SubstituteGroup>>
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

export type QueryAdminCompanyArgs = {
  companyId: Scalars['String']
}

export type QueryAdminCompanysArgs = {
  input?: InputMaybe<AdminListCompanyInput>
}

export type QueryAdminCountChapterMembersArgs = {
  input?: InputMaybe<AdminListChapterMemberInput>
}

export type QueryAdminCountChaptersArgs = {
  input?: InputMaybe<AdminListChapterInput>
}

export type QueryAdminCountCompanysArgs = {
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
  paging?: InputMaybe<CorePagingInput>
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

export type QueryAdminSubstituteGroupArgs = {
  substituteGroupId: Scalars['String']
}

export type QueryAdminSubstituteGroupsArgs = {
  input?: InputMaybe<AdminListSubstituteGroupInput>
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
  paging?: InputMaybe<CorePagingInput>
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

export type QueryUserCompanyArgs = {
  companyId: Scalars['String']
}

export type QueryUserCompanysArgs = {
  input?: InputMaybe<UserListCompanyInput>
}

export type QueryUserCountChapterMembersArgs = {
  input?: InputMaybe<UserListChapterMemberInput>
}

export type QueryUserCountChaptersArgs = {
  input?: InputMaybe<UserListChapterInput>
}

export type QueryUserCountCompanysArgs = {
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

export type QueryUserSubstituteGroupArgs = {
  substituteGroupId: Scalars['String']
}

export type QueryUserSubstituteGroupsArgs = {
  input?: InputMaybe<UserListSubstituteGroupInput>
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
  chapter?: Maybe<Chapter>
  chapterTitle?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  comments?: Maybe<Scalars['String']>
  companies?: Maybe<Array<Maybe<Company>>>
  company?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  developer?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
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
  notifyByEmail?: Maybe<Scalars['Boolean']>
  notifyByMobile?: Maybe<Scalars['Boolean']>
  notifyBySMS?: Maybe<Scalars['Boolean']>
  notifyByWeb?: Maybe<Scalars['Boolean']>
  numberOfEmployees?: Maybe<Scalars['Int']>
  organizer?: Maybe<Scalars['Int']>
  otherBusinesses?: Maybe<Scalars['String']>
  otherLocations?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  postcode?: Maybe<Scalars['String']>
  promoter?: Maybe<Scalars['Int']>
  recognized?: Maybe<Scalars['Int']>
  regionManaged?: Maybe<Region>
  renewalDate?: Maybe<Scalars['DateTime']>
  role?: Maybe<Role>
  salesAgentName?: Maybe<Scalars['String']>
  showGravatar?: Maybe<Scalars['Boolean']>
  state?: Maybe<Scalars['String']>
  status?: Maybe<UserStatus>
  strategizer?: Maybe<Scalars['Int']>
  substitute?: Maybe<Scalars['Boolean']>
  tagline?: Maybe<Scalars['String']>
  terminatedByName?: Maybe<Scalars['String']>
  terminationComments?: Maybe<Scalars['String']>
  terminationDate?: Maybe<Scalars['DateTime']>
  terminationReason?: Maybe<Scalars['String']>
  territoryManaged?: Maybe<Territory>
  thinker?: Maybe<Scalars['Int']>
  timeInIndustry?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  transferDate?: Maybe<Scalars['DateTime']>
  twitter?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  vet?: Maybe<Scalars['Boolean']>
  website?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
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

export type UserListChapterInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListChapterMemberInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListCompanyInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListMeetingInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListNotificationInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListPowerHourInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListReferralInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListRegionInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListSubstituteGroupInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListTerritoryInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListTestimonialInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListTransactionInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
}

export type UserListUploadInput = {
  limit?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<Scalars['String']>
  orderDirection?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  skip?: InputMaybe<Scalars['Float']>
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
