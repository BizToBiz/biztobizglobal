import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Role, User } from '@biztobiz/shared/util-sdk'

export const identityAtom = atomWithStorage<User | null>('user', null)
export const isAuthenticatedAtom = atom((get) => !!get(identityAtom)?.id)
export const isAdminAtom = atom((get) => get(identityAtom)?.role === Role.Admin)
export const isRememberedAtom = atomWithStorage<User | null>('isRemembered', null)
