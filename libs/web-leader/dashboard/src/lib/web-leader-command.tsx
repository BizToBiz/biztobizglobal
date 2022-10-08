import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { CashIcon, ChartBarIcon, InboxInIcon } from '@heroicons/react/outline'
import { useHotkeys } from 'react-hotkeys-hook'
import { useNavigate } from 'react-router-dom'

const reports = [{ id: 1, name: 'Transaction & Referral Report', url: '/leader/transactions-and-referrals' }]

const quickActions = [
  { name: 'Add new Referral...', icon: InboxInIcon, shortcut: 'R', url: '/leader/referral/new' },
  { name: 'Add new Transaction...', icon: CashIcon, shortcut: 'T', url: '/leader/transaction/new' },
]

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function WebLeaderCommand() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
  useHotkeys('ctrl+t', () => navigate('/leader/transaction/new'))
  useHotkeys('ctrl+r', () => navigate('/leader/referral/new'))

  return (
    <div className="overflow-hidden bg-white shadow-2xl sm:rounded-lg">
      <Combobox value={''} onChange={(item: any) => (window.location = item.url)}>
        <Combobox.Options static className="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto">
          <li className="p-2">
            <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-500">Reports</h2>
            <ul className="text-sm text-gray-700">
              {reports.map((report) => (
                <Combobox.Option
                  key={report.id}
                  value={report}
                  className={({ active }) =>
                    classNames(
                      'flex cursor-default select-none items-center rounded-md px-3 py-2',
                      active && 'bg-blue-600 text-white',
                    )
                  }
                >
                  {({ active }) => (
                    <>
                      <ChartBarIcon
                        className={classNames('h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-400')}
                        aria-hidden="true"
                      />
                      <span className="ml-3 flex-auto truncate">{report.name}</span>
                      {active && <span className="ml-3 flex-none text-blue-100">Jump to...</span>}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </ul>
          </li>

          <li className="p-2">
            <h2 className="sr-only">Quick actions</h2>
            <ul className="text-sm text-gray-700">
              {quickActions.map((action) => (
                <Combobox.Option
                  key={action.shortcut}
                  value={action}
                  className={({ active }) =>
                    classNames(
                      'flex cursor-default select-none items-center rounded-md px-3 py-2',
                      active && 'bg-blue-600 text-white',
                    )
                  }
                >
                  {({ active }) => (
                    <>
                      <action.icon
                        className={classNames('h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-400')}
                        aria-hidden="true"
                      />
                      <span className="ml-3 flex-auto truncate">{action.name}</span>
                      <span
                        className={classNames(
                          'ml-3 flex-none text-xs font-semibold',
                          active ? 'text-blue-100' : 'text-gray-400',
                        )}
                      >
                        <kbd className="font-sans">Ctrl + </kbd>
                        <kbd className="font-sans">{action.shortcut}</kbd>
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))}
            </ul>
          </li>
        </Combobox.Options>
      </Combobox>
    </div>
  )
}
