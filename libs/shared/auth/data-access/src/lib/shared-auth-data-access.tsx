import {
  ForgotPasswordInput,
  LoginInput,
  RegisterInput,
  ResetPasswordInput,
  useForgotPasswordMutation,
  useLoginMutation,
  useLogoutMutation,
  User,
  useRegisterMutation,
  useResetPasswordMutation,
} from '@biztobiz/shared/util-sdk'
import React, { createContext } from 'react'

import { useAtom } from 'jotai'
import { RESET } from 'jotai/utils'

export interface SharedAuthContextProps {
  login: (input: LoginInput) => Promise<{ user: User | null; error: string | null }>
  logout: () => void
  register: (input: RegisterInput) => Promise<{ user: User | null; error: string | null }>
  forgotPassword: (input: ForgotPasswordInput) => Promise<{ success: boolean; error: string }>
  resetPassword: (input: ResetPasswordInput) => Promise<{ success: boolean; error: string }>
}

const SharedAuthContext = createContext<SharedAuthContextProps>({
  login: (_: LoginInput) => Promise.resolve({ user: null, error: '' }),
  logout: () => null,
  register: (_: RegisterInput) => Promise.resolve({ user: null, error: '' }),
  forgotPassword: (_: ForgotPasswordInput) => Promise.resolve({ success: false, error: '' }),
  resetPassword: (_: ResetPasswordInput) => Promise.resolve({ success: false, error: '' }),
})

const { Provider } = SharedAuthContext

interface SharedAuthProviderProps {
  children: React.ReactNode
  identityAtom: any
  isRememberedAtom: any
}

function SharedAuthProvider({ identityAtom, isRememberedAtom, children }: SharedAuthProviderProps) {
  const [, setIdentity] = useAtom(identityAtom)
  const [, setIsRemembered] = useAtom(isRememberedAtom)
  const [loginMutation] = useLoginMutation()
  const [logoutMutation] = useLogoutMutation()
  const [registerMutation] = useRegisterMutation()
  const [forgotPasswordMutation] = useForgotPasswordMutation()
  const [resetPasswordMutation] = useResetPasswordMutation()

  async function login(input: LoginInput) {
    try {
      const res = await loginMutation({ variables: { input } })
      if (res?.data?.login?.user) {
        const user = res.data.login.user
        setIdentity(user)
        if (input?.remember) {
          setIsRemembered(user)
        } else {
          setIsRemembered(RESET)
        }
        return { user: user, error: null }
      } else {
        return { user: null, error: 'Unable to retrieve user.' }
      }
    } catch (e: any) {
      console.log(e.message)
      return { user: null, error: e.message }
    }
  }

  async function logout() {
    try {
      await logoutMutation()
      setIdentity(RESET)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  async function register(input: RegisterInput) {
    try {
      const res = await registerMutation({ variables: { input } })
      if (res?.data?.register?.user) {
        const user = res.data.register.user
        setIdentity(user)
        return { user: user, error: null }
      } else {
        return { user: null, error: 'Unable to retrieve registered user.' }
      }
    } catch (e: any) {
      console.log(e.message)
      return { user: null, error: e.message }
    }
  }

  async function forgotPassword(input: ForgotPasswordInput) {
    try {
      await forgotPasswordMutation({ variables: { input } })
      return { success: true, error: null }
    } catch (e: any) {
      console.log(e.message)
      return { success: false, error: e.message }
    }
  }

  async function resetPassword(input: ResetPasswordInput) {
    try {
      await resetPasswordMutation({ variables: { input } })
      return { success: true, error: null }
    } catch (e: any) {
      console.log(e.message)
      return { success: false, error: e.message }
    }
  }

  return (
    <Provider
      value={{
        login,
        logout,
        register,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </Provider>
  )
}

export { SharedAuthContext, SharedAuthProvider }
