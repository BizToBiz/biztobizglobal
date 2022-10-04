import { useAtom } from 'jotai'
import { currentPathAtom } from '@biztobiz/web/global/data-access'
import { useLayoutEffect } from 'react'
import { RESET } from 'jotai/utils'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WebLeaderDashboardProps {}

export function WebLeaderDashboard(props: WebLeaderDashboardProps) {
  const [, setCurrentPath] = useAtom(currentPathAtom)

  const pathData = {
    path: '/leader/dashboard',
    name: 'Leader Dashboard',
    description: 'The home base for Leaders',
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
      <h1>Welcome to WebLeaderDashboard!</h1>
    </div>
  )
}

export default WebLeaderDashboard
