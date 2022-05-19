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
import { identityAtom, isRememberedAtom } from '@biztobiz/native/global'

export interface NativeAuthContextProps {
  login: (input: LoginInput) => Promise<{ user: User; error: string }>
  logout: () => void
  register: (input: RegisterInput) => Promise<{ user: User; error: string }>
  forgotPassword: (input: ForgotPasswordInput) => Promise<{ success: boolean; error: string }>
  resetPassword: (input: ResetPasswordInput) => Promise<{ success: boolean; error: string }>
}

const NativeAuthContext = createContext<NativeAuthContextProps>({
  login: (_: LoginInput) => null,
  logout: () => null,
  register: (_: RegisterInput) => null,
  forgotPassword: (_: ForgotPasswordInput) => null,
  resetPassword: (_: ResetPasswordInput) => null,
})

const { Provider } = NativeAuthContext

function NativeAuthProvider({ children }) {
  const [, setIdentity] = useAtom(identityAtom)
  const [, setIsRemembered] = useAtom(isRememberedAtom)
  const [loginMutation] = useLoginMutation()
  const [logoutMutation] = useLogoutMutation()
  const [registerMutation] = useRegisterMutation()
  const [forgotPasswordMutation] = useForgotPasswordMutation()
  const [resetPasswordMutation] = useResetPasswordMutation()

  function login(input: LoginInput) {
    return loginMutation({ variables: { input } })
      .then(({ data }) => {
        setIdentity(data?.login?.user ?? RESET)
        if (input?.remember) {
          setIsRemembered(data?.login?.user)
        } else {
          setIsRemembered(RESET)
        }
        return { user: data?.login?.user, error: null }
      })
      .catch((e) => {
        console.error(e.message)
        return { user: null, error: e.message }
      })
  }

  function logout() {
    logoutMutation()
      .then(() => {
        setIdentity(RESET)
      })
      .catch((e) => {
        console.error(e.message)
      })
  }

  function register(input: RegisterInput) {
    return registerMutation({ variables: { input } })
      .then(({ data }) => {
        setIdentity(data?.register?.user ?? RESET)
        return { user: data?.register?.user, error: null }
      })
      .catch((e) => {
        console.error(e.message)
        return { user: null, error: e.message }
      })
  }

  function forgotPassword(input: ForgotPasswordInput) {
    return forgotPasswordMutation({ variables: { input } })
      .then(() => {
        return { success: true, error: null }
      })
      .catch((e) => {
        console.error(e.message)
        return { success: false, error: e.message }
      })
  }

  function resetPassword(input: ResetPasswordInput) {
    return resetPasswordMutation({ variables: { input } })
      .then(() => {
        return { success: true, error: null }
      })
      .catch((e) => {
        console.error(e.message)
        return { success: false, error: e.message }
      })
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

export { NativeAuthContext, NativeAuthProvider }
