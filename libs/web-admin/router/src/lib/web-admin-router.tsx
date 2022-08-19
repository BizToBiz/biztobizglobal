import { useAtom } from 'jotai'
import { currentPathAtom, isAdminAtom } from '@biztobiz/web/global/data-access'
import { Navigate, Route, Routes } from 'react-router-dom'
import React from 'react'
import { User } from '@biztobiz/shared/util-sdk'
import { WebAdminDashboard } from '@biztobiz/web-admin/dashboard'
import { HomeIcon } from '@heroicons/react/outline'
import { WebUiAdminLayoutFeature } from '@biztobiz/web-ui/admin-layout/feature'

import { WebAdminUserCreate, WebAdminUserList, WebAdminUserUpdate } from '@biztobiz/web-admin/user'
import {
  WebAdminAttendanceReminderCreate,
  WebAdminAttendanceReminderList,
  WebAdminAttendanceReminderUpdate,
} from '@biztobiz/web-admin/attendance-reminder'
import { WebAdminChapterCreate, WebAdminChapterList, WebAdminChapterUpdate } from '@biztobiz/web-admin/chapter'
import {
  WebAdminChapterMemberCreate,
  WebAdminChapterMemberList,
  WebAdminChapterMemberUpdate,
} from '@biztobiz/web-admin/chapter-member'
import { WebAdminCompanyCreate, WebAdminCompanyList, WebAdminCompanyUpdate } from '@biztobiz/web-admin/company'
import {
  WebAdminCompanyMemberCreate,
  WebAdminCompanyMemberList,
  WebAdminCompanyMemberUpdate,
} from '@biztobiz/web-admin/company-member'
import { WebAdminIndustryCreate, WebAdminIndustryList, WebAdminIndustryUpdate } from '@biztobiz/web-admin/industry'
import { WebAdminMeetingCreate, WebAdminMeetingList, WebAdminMeetingUpdate } from '@biztobiz/web-admin/meeting'
import {
  WebAdminMeetingPresenceCreate,
  WebAdminMeetingPresenceList,
  WebAdminMeetingPresenceUpdate,
} from '@biztobiz/web-admin/meeting-presence'
import {
  WebAdminNotificationCreate,
  WebAdminNotificationList,
  WebAdminNotificationUpdate,
} from '@biztobiz/web-admin/notification'
import { WebAdminPowerHourCreate, WebAdminPowerHourList, WebAdminPowerHourUpdate } from '@biztobiz/web-admin/power-hour'
import { WebAdminReferralCreate, WebAdminReferralList, WebAdminReferralUpdate } from '@biztobiz/web-admin/referral'
import { WebAdminRegionCreate, WebAdminRegionList, WebAdminRegionUpdate } from '@biztobiz/web-admin/region'
import {
  WebAdminSubstituteCreate,
  WebAdminSubstituteList,
  WebAdminSubstituteUpdate,
} from '@biztobiz/web-admin/substitute'
import {
  WebAdminSubstituteGroupCreate,
  WebAdminSubstituteGroupList,
  WebAdminSubstituteGroupUpdate,
} from '@biztobiz/web-admin/substitute-group'
import { WebAdminTerritoryCreate, WebAdminTerritoryList, WebAdminTerritoryUpdate } from '@biztobiz/web-admin/territory'
import {
  WebAdminTestimonialCreate,
  WebAdminTestimonialList,
  WebAdminTestimonialUpdate,
} from '@biztobiz/web-admin/testimonial'
import {
  WebAdminTransactionCreate,
  WebAdminTransactionList,
  WebAdminTransactionUpdate,
} from '@biztobiz/web-admin/transaction'
import { WebAdminUploadCreate, WebAdminUploadList, WebAdminUploadUpdate } from '@biztobiz/web-admin/upload'

// Add New Imports Here

export interface WebAdminRouterProps {
  user: User
}

export function WebAdminRouter(props: WebAdminRouterProps) {
  const [isAdmin] = useAtom(isAdminAtom)
  const [currentPath] = useAtom(currentPathAtom)

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/dashboard'),
    },
    {
      name: 'Users',
      href: '/admin/users',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/users'),
    },
    {
      name: 'AttendanceReminders',
      href: '/admin/attendance-reminders',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/attendance-reminders'),
    },
    {
      name: 'Chapters',
      href: '/admin/chapters',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/chapters'),
    },
    {
      name: 'ChapterMembers',
      href: '/admin/chapter-members',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/chapter-members'),
    },
    {
      name: 'Companies',
      href: '/admin/companies',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/companies'),
    },
    {
      name: 'CompanyMembers',
      href: '/admin/company-members',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/company-members'),
    },
    {
      name: 'Industries',
      href: '/admin/industries',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/industries'),
    },
    {
      name: 'Meetings',
      href: '/admin/meetings',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/meetings'),
    },
    {
      name: 'MeetingPresences',
      href: '/admin/meeting-presences',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/meeting-presences'),
    },
    {
      name: 'Notifications',
      href: '/admin/notifications',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/notifications'),
    },
    {
      name: 'PowerHours',
      href: '/admin/power-hours',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/power-hours'),
    },
    {
      name: 'Referrals',
      href: '/admin/referrals',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/referrals'),
    },
    {
      name: 'Regions',
      href: '/admin/regions',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/regions'),
    },
    {
      name: 'Substitutes',
      href: '/admin/substitutes',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/substitutes'),
    },
    {
      name: 'SubstituteGroups',
      href: '/admin/substitute-groups',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/substitute-groups'),
    },
    {
      name: 'Territories',
      href: '/admin/territories',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/territories'),
    },
    {
      name: 'Testimonials',
      href: '/admin/testimonials',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/testimonials'),
    },
    {
      name: 'Transactions',
      href: '/admin/transactions',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/transactions'),
    },
    {
      name: 'Uploads',
      href: '/admin/uploads',
      icon: HomeIcon,
      current: currentPath.path.includes('/admin/uploads'),
    },
    // Add New Nav Objects Here
  ]

  return isAdmin ? (
    <WebUiAdminLayoutFeature user={props.user} navigation={navigation}>
      <Routes>
        <Route path="dashboard" element={<WebAdminDashboard />} />
        <Route path="users" element={<WebAdminUserList />} />
        <Route path="user">
          <Route path="new" element={<WebAdminUserCreate />} />
          <Route path=":id" element={<WebAdminUserUpdate />} />
        </Route>
        <Route path="attendance-reminders" element={<WebAdminAttendanceReminderList />} />
        <Route path="attendance-reminder">
          <Route path="new" element={<WebAdminAttendanceReminderCreate />} />
          <Route path=":id" element={<WebAdminAttendanceReminderUpdate />} />
        </Route>
        <Route path="chapters" element={<WebAdminChapterList />} />
        <Route path="chapter">
          <Route path="new" element={<WebAdminChapterCreate />} />
          <Route path=":id" element={<WebAdminChapterUpdate />} />
        </Route>
        <Route path="chapter-members" element={<WebAdminChapterMemberList />} />
        <Route path="chapterMember">
          <Route path="new" element={<WebAdminChapterMemberCreate />} />
          <Route path=":id" element={<WebAdminChapterMemberUpdate />} />
        </Route>
        <Route path="companies" element={<WebAdminCompanyList />} />
        <Route path="company">
          <Route path="new" element={<WebAdminCompanyCreate />} />
          <Route path=":id" element={<WebAdminCompanyUpdate />} />
        </Route>
        <Route path="company-members" element={<WebAdminCompanyMemberList />} />
        <Route path="companyMember">
          <Route path="new" element={<WebAdminCompanyMemberCreate />} />
          <Route path=":id" element={<WebAdminCompanyMemberUpdate />} />
        </Route>
        <Route path="industries" element={<WebAdminIndustryList />} />
        <Route path="industry">
          <Route path="new" element={<WebAdminIndustryCreate />} />
          <Route path=":id" element={<WebAdminIndustryUpdate />} />
        </Route>
        <Route path="meetings" element={<WebAdminMeetingList />} />
        <Route path="meeting">
          <Route path="new" element={<WebAdminMeetingCreate />} />
          <Route path=":id" element={<WebAdminMeetingUpdate />} />
        </Route>
        <Route path="meeting-presences" element={<WebAdminMeetingPresenceList />} />
        <Route path="meetingPresence">
          <Route path="new" element={<WebAdminMeetingPresenceCreate />} />
          <Route path=":id" element={<WebAdminMeetingPresenceUpdate />} />
        </Route>
        <Route path="notifications" element={<WebAdminNotificationList />} />
        <Route path="notification">
          <Route path="new" element={<WebAdminNotificationCreate />} />
          <Route path=":id" element={<WebAdminNotificationUpdate />} />
        </Route>
        <Route path="power-hours" element={<WebAdminPowerHourList />} />
        <Route path="powerHour">
          <Route path="new" element={<WebAdminPowerHourCreate />} />
          <Route path=":id" element={<WebAdminPowerHourUpdate />} />
        </Route>
        <Route path="referrals" element={<WebAdminReferralList />} />
        <Route path="referral">
          <Route path="new" element={<WebAdminReferralCreate />} />
          <Route path=":id" element={<WebAdminReferralUpdate />} />
        </Route>
        <Route path="regions" element={<WebAdminRegionList />} />
        <Route path="region">
          <Route path="new" element={<WebAdminRegionCreate />} />
          <Route path=":id" element={<WebAdminRegionUpdate />} />
        </Route>
        <Route path="substitutes" element={<WebAdminSubstituteList />} />
        <Route path="substitute">
          <Route path="new" element={<WebAdminSubstituteCreate />} />
          <Route path=":id" element={<WebAdminSubstituteUpdate />} />
        </Route>
        <Route path="substitute-groups" element={<WebAdminSubstituteGroupList />} />
        <Route path="substituteGroup">
          <Route path="new" element={<WebAdminSubstituteGroupCreate />} />
          <Route path=":id" element={<WebAdminSubstituteGroupUpdate />} />
        </Route>
        <Route path="territories" element={<WebAdminTerritoryList />} />
        <Route path="territory">
          <Route path="new" element={<WebAdminTerritoryCreate />} />
          <Route path=":id" element={<WebAdminTerritoryUpdate />} />
        </Route>
        <Route path="testimonials" element={<WebAdminTestimonialList />} />
        <Route path="testimonial">
          <Route path="new" element={<WebAdminTestimonialCreate />} />
          <Route path=":id" element={<WebAdminTestimonialUpdate />} />
        </Route>
        <Route path="transactions" element={<WebAdminTransactionList />} />
        <Route path="transaction">
          <Route path="new" element={<WebAdminTransactionCreate />} />
          <Route path=":id" element={<WebAdminTransactionUpdate />} />
        </Route>
        <Route path="uploads" element={<WebAdminUploadList />} />
        <Route path="upload">
          <Route path="new" element={<WebAdminUploadCreate />} />
          <Route path=":id" element={<WebAdminUploadUpdate />} />
        </Route>
        {/*Add New Routes Here*/}
      </Routes>
    </WebUiAdminLayoutFeature>
  ) : (
    <Navigate to="/login" />
  )
}

export default WebAdminRouter
