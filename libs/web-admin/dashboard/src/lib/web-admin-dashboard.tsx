import { useLayoutEffect } from 'react'
import { RESET } from 'jotai/utils'
import { useAtom } from 'jotai'
import { currentPathAtom } from '@biztobiz/web/global/data-access'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WebAdminDashboardProps {}

export function WebAdminDashboard(props: WebAdminDashboardProps) {
  const [, setCurrentPath] = useAtom(currentPathAtom)

  const pathData = {
    path: '/admin/dashboard',
    name: 'Admin Dashboard',
    description: 'The home base for Admins',
    showSearch: false,
  }

  useLayoutEffect(() => {
    setCurrentPath(pathData)
    return () => {
      setCurrentPath(RESET)
    }
  }, [])
  return (
    <div>
      <h1>Welcome to WebAdminDashboard!</h1>
    </div>
  )
}

export default WebAdminDashboard
