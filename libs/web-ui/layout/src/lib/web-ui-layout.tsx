import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'
import { useAtom } from 'jotai'
import { isAuthenticatedAtom } from '@biztobiz/web/global/data-access'

interface WebUiLayoutProps {
  children: React.ReactNode
  avatarUrl: string
}
export function WebUiLayout(props: WebUiLayoutProps) {
  const { logout } = useContext(SharedAuthContext)
  const [isAuthenticated] = useAtom(isAuthenticatedAtom)
  const navigate = useNavigate()

  return (
    <div>
      <nav className="p-3 bg-indigo-800 text-indigo-100 ">
        <div className="flex justify-between">
          <div className="flex space-x-3 items-center">
            <div className="bg-indigo-700 rounded px-2 py-1">
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="bg-indigo-700 rounded px-2 py-1">
              <Link to="/about">About</Link>
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            {isAuthenticated ? (
              <>
                <img src={props.avatarUrl} alt="User Avatar" className="h-8 w-8 rounded-full" />
                <div className="bg-indigo-700 rounded px-2 py-1">
                  <button onClick={logout}>Log out</button>
                </div>
              </>
            ) : (
              <div className="bg-indigo-700 rounded px-2 py-1">
                <button onClick={() => navigate('/login')}>Log in</button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div>{props.children}</div>
    </div>
  )
}
