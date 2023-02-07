import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Role, User } from '@biztobiz/shared/util-sdk'

interface path {
  path: string
  name: string
  description?: string
  showSearch?: boolean
  actionText?: string
  actionLink?: string
}

// Authentication Atoms
export const identityAtom = atomWithStorage<User | null>('user', null)
export const isAuthenticatedAtom = atom((get) => !!get(identityAtom)?.id)
export const isAdminAtom = atom((get) => get(identityAtom)?.role === Role.Admin)
export const isDevAtom = atom((get) => get(identityAtom)?.developer === true)
export const isLeaderAtom = atom((get) => get(identityAtom)?.isLeader === true)
export const isRememberedAtom = atomWithStorage<User | null>('isRemembered', null)
export const spyAtom = atomWithStorage<User | null>('user', null)

// Navigation Atoms
export const currentPathAtom = atomWithStorage<path>('currentPath', {
  path: '/',
  name: '',
  description: '',
  showSearch: false,
  actionText: '',
  actionLink: '',
})

// Admin Search Atoms
export const searchAtom = atom<string>('')
