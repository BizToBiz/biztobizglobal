import { Fragment, useContext, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3BottomLeftIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AdminUsersDocument, User } from '@biztobiz/shared/util-sdk'
import { Link, useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { currentPathAtom, identityAtom, searchAtom, spyAtom } from '@biztobiz/web/global/data-access'
import { NavigationInterface } from '@biztobiz/shared/utils/feature'

import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'
import { WebUiUserSelect } from '@biztobiz/web-ui/user-select'

const userNavigation: { name: string; href: string }[] = [
  // { name: 'Your Profile', href: '#' },
  // { name: 'Settings', href: '#' },
  // { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export interface WebAdminDashboardFeatureProps {
  children: React.ReactNode
  user: User
  navigation: NavigationInterface[]
  logout: () => void
  spyOnUser: (userId: string) => void
}

export function WebUiAdminLayoutFeature(props: WebAdminDashboardFeatureProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [openSpy, setOpenSpy] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<User | null>(null)
  const [currentPath] = useAtom(currentPathAtom)
  const [spyUser] = useAtom(spyAtom)
  const [search, setSearch] = useAtom(searchAtom)
  const navigate = useNavigate()
  const { spyOnUser, restoreAdminUser } = useContext(SharedAuthContext)
  const [identity] = useAtom(identityAtom)
  async function setUpSpy() {
    if (selectedPerson?.id) {
      await spyOnUser(selectedPerson.id)
      setOpenSpy(false)
    } else {
      alert('Please select a person to spy on')
    }
  }

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-16 w-auto"
                    src={
                      'https://res.cloudinary.com/biz-to-biz-global-networking-inc/image/upload/v1676080797/full-logo_kk2f7h.png'
                    }
                    alt="Biz to Biz Logo"
                  />
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {props.navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                            'mr-4 flex-shrink-0 h-6 w-6',
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-1 bg-white overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-16 w-auto"
              src={
                'https://res.cloudinary.com/biz-to-biz-global-networking-inc/image/upload/v1676080797/full-logo_kk2f7h.png'
              }
              alt="Biz to Biz Logo"
            />
          </div>
          <div className="mt-3 flex-grow flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {props.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6',
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              {currentPath.showSearch ? (
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder={`Search ${currentPath?.name}`}
                      type="search"
                      name="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </form>
              ) : null}
            </div>

            <div className="ml-4 flex items-center md:ml-6">
              {/*Notification Bell*/}
              {/*<button*/}
              {/*  type="button"*/}
              {/*  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"*/}
              {/*>*/}
              {/*  <span className="sr-only">View notifications</span>*/}
              {/*  <BellIcon className="h-6 w-6" aria-hidden="true" />*/}
              {/*</button>*/}

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={identity?.avatarUrl ?? ''} alt="" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                    {spyUser?.id && (
                      <Menu.Item key="spy">
                        <button onClick={() => restoreAdminUser()} className="block px-4 py-2 text-sm text-gray-700">
                          Stop Emulating {identity?.firstName}
                        </button>
                      </Menu.Item>
                    )}
                    {!spyUser?.id && identity?.role === 'Admin' && (
                      <Menu.Item key="spy">
                        <button onClick={() => setOpenSpy(true)} className="block px-4 py-2 text-sm text-gray-700">
                          Spy On User
                        </button>
                      </Menu.Item>
                    )}
                    <Menu.Item key="logout">
                      <button onClick={props?.logout} className="block px-4 py-2 text-sm text-gray-700">
                        Log Out
                      </button>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-900">{currentPath.name}</h1>
                {currentPath.description ? (
                  <p className="mt-2 text-sm text-gray-700">{currentPath.description}</p>
                ) : null}
              </div>
              {currentPath.actionText && currentPath.actionLink ? (
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                  <button
                    type="button"
                    onClick={() => {
                      navigate(currentPath?.actionLink ?? '')
                    }}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                  >
                    {currentPath.actionText}
                  </button>
                </div>
              ) : null}
            </div>

            <div className="py-4">{props.children}</div>
          </div>
        </main>
      </div>

      {/*Spy On Popup*/}
      <Transition.Root show={openSpy} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenSpy}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Choose a User to Emulate
                      </Dialog.Title>
                      <div className="mt-2">
                        <WebUiUserSelect
                          document={AdminUsersDocument}
                          selectedPerson={selectedPerson}
                          setSelectedPerson={setSelectedPerson}
                          label="Choose a User to Emulate"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => setUpSpy()}
                    >
                      Emulate User
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
