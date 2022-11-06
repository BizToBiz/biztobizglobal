import { useLayoutEffect } from "react";
import { RESET } from "jotai/utils";
import { useAtom } from "jotai";
import { currentPathAtom } from "@biztobiz/web/global/data-access";
import { Link } from "react-router-dom";

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
      <p>
        <Link to={'/leader/dashboard'}>Switch to the Leader's Dashboard</Link>
      </p>
    </div>
  )
}

export default WebAdminDashboard
