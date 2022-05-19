import { atomWithStorage } from 'jotai/utils'
import { Appearance } from 'react-native'
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'
import { storage } from '@biztobiz/native/utils'
import { Role, User } from '@biztobiz/shared/util-sdk'
import { atom } from 'jotai'

export const AppTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
  },
}

const colorScheme = Appearance.getColorScheme()
const darkMode = colorScheme === 'dark'
export const theme = darkMode ? AppTheme : DefaultTheme
export const barStyle = darkMode ? 'light-content' : 'dark-content'

export const identityAtom = atomWithStorage<User | null>('user', null, storage)
export const isAuthenticatedAtom = atom((get) => !!get(identityAtom)?.id)
export const isAdminAtom = atom((get) => get(identityAtom)?.role === Role.Admin)
export const isRememberedAtom = atomWithStorage<User | null>('isRemembered', null, storage)
