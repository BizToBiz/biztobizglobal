import { useAtom } from "jotai";
import { currentPathAtom } from "@biztobiz/web/global/data-access";
import { useLayoutEffect } from "react";
import { RESET } from "jotai/utils";
import WebLeaderCommand from "./web-leader-command";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WebLeaderDashboardProps {}

export function WebLeaderDashboard(props: WebLeaderDashboardProps) {
  const [, setCurrentPath] = useAtom(currentPathAtom)

  const pathData = {
    path: '/leader/dashboard',
    name: 'Tools & Reports for Leaders',
    description: 'Manage your network effectively',
    showSearch: false,
  }

  useLayoutEffect(() => {
    setCurrentPath(pathData)
    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return <WebLeaderCommand />
}

export default WebLeaderDashboard
