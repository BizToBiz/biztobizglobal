import { useContext } from 'react'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'

export default function Members() {
  const { isAuthenticated } = useContext(SharedAuthContext)
  return <div>{isAuthenticated ? <p>Is Auth</p> : <p>no auth</p>}</div>
}
