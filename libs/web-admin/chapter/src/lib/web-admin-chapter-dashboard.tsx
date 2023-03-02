import { BuildingOfficeIcon, CalendarIcon, UsersIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { classNames } from '@biztobiz/shared/utils/feature'
import { WebAdminChapterUpdate } from './web-admin-chapter-update'
import { useParams } from 'react-router-dom'
import { WebAdminMeetingList } from '@biztobiz/web-admin/meeting'
import { WebAdminChapterMemberList } from '@biztobiz/web-admin/chapter-member'

const tabs = [
  { name: 'Details', slug: 'details', icon: BuildingOfficeIcon },
  { name: 'Meetings', slug: 'meetings', icon: CalendarIcon },
  { name: 'Members', slug: 'members', icon: UsersIcon },
]
export function WebAdminChapterDashboard() {
  const params = useParams()
  const chapterId = params?.['id'] ?? null
  const [selectedTab, setSelectedTab] = useState('details')
  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab) => tab.slug === selectedTab).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  onClick={() => setSelectedTab(tab.slug)}
                  className={classNames(
                    tab.slug === selectedTab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium',
                  )}
                  aria-current={tab.slug === selectedTab ? 'page' : undefined}
                >
                  <tab.icon
                    className={classNames(
                      tab.slug === selectedTab ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                      '-ml-0.5 mr-2 h-5 w-5',
                    )}
                    aria-hidden="true"
                  />
                  <span>{tab.name}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="mt-8">
        {selectedTab === 'details' && <WebAdminChapterUpdate chapterId={chapterId} />}
        {selectedTab === 'meetings' && <WebAdminMeetingList chapterId={chapterId} />}
        {selectedTab === 'members' && <WebAdminChapterMemberList chapterId={chapterId} />}
      </div>
    </>
  )
}
