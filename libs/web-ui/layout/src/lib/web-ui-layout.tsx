import React, { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'
import { useAtom } from 'jotai'
import { isAuthenticatedAtom } from '@biztobiz/web/global/data-access'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { User } from '@biztobiz/shared/util-sdk'
import logo from './logo.png'
import fullLogo from './full-logo.png'

interface WebUiLayoutProps {
  children: React.ReactNode
  user: User
  logout: () => void
}

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Chapters', href: '#', current: false },
  { name: 'Members', href: '#', current: false },
  { name: 'Biz University', href: '#', current: false },
]
const userNavigation = [
  { name: 'My Account', href: '#' },
  { name: 'Admin Dashboard', href: 'admin/dashboard' },
  { name: 'My Chapter', href: '#' },
  { name: 'Change Password', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function WebUiLayout(props: WebUiLayoutProps) {
  const { logout } = useContext(SharedAuthContext)
  const [isAuthenticated] = useAtom(isAuthenticatedAtom)
  const navigate = useNavigate()

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white border-b border-gray-200">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center mr-6">
                      <img className="block lg:hidden h-16 w-auto" src={logo} alt="Biz to Biz Global Network" />
                      <img className="hidden lg:block h-16 w-auto" src={fullLogo} alt="Biz to Biz Global Network" />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'border-blue-700 text-gray-900'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    {props?.user?.avatarUrl ? (
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={props.user.avatarUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
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
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700',
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : null}
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-blue-50 border-blue-700 text-blue-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={props.user.avatarUrl || ''} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {props.user.firstName} {props.user.lastName}
                      </div>
                      <div className="text-sm font-medium text-gray-500">{props.user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{props.children}</div>
          </main>
        </div>
      </div>
    </>
  )
}

//
// <div>
//   <nav className="p-3 bg-blue-800 text-blue-100 ">
//     <div className="flex justify-between">
//       <div className="flex space-x-3 items-center">
//         <div className="bg-blue-700 rounded px-2 py-1">
//           <Link to="/dashboard">Dashboard</Link>
//         </div>
//         <div className="bg-blue-700 rounded px-2 py-1">
//           <Link to="/about">About</Link>
//         </div>
//       </div>
//       <div className="flex space-x-3 items-center">
//         {isAuthenticated ? (
//           <>
//             <img src={props.avatarUrl} alt="User Avatar" className="h-8 w-8 rounded-full" />
//             <div className="bg-blue-700 rounded px-2 py-1">
//               <button onClick={logout}>Log out</button>
//             </div>
//           </>
//         ) : (
//           <div className="bg-blue-700 rounded px-2 py-1">
//             <button onClick={() => navigate('/login')}>Log in</button>
//           </div>
//         )}
//       </div>
//     </div>
//   </nav>
//   <div>{props.children}</div>
// </div>
