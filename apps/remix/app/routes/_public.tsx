import { Outlet } from '@remix-run/react'

export default function PublicLayout() {
  return (
    <>
      <header>header text</header>
      <Outlet />
    </>
  )
}
