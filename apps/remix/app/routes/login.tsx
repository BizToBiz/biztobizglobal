import React, { ReactNode, useContext } from 'react'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'

import { useAtom } from 'jotai'
import { isRememberedAtom } from '@biztobiz/web/global/data-access'
import { LoginInput, Role } from '@biztobiz/shared/util-sdk'
import { WebUiFormField } from '@biztobiz/web-ui/form'
import { WebAuthPage } from '@biztobiz/web/auth/ui'
import { Link, useNavigate } from '@remix-run/react'

export default function Login() {
  const { login, formError, setFormError } = useContext(SharedAuthContext)
  const navigate = useNavigate()
  const [isRemembered] = useAtom(isRememberedAtom)

  const processLogin = async (input: LoginInput) => {
    const loginInfo = await login(input)
    navigate('/leader/dashboard')
    if (loginInfo?.user?.role === Role.Admin) {
      navigate('/admin/dashboard')
    } else if (loginInfo?.user?.isLeader === true) {
      navigate('/leader/dashboard')
    } else if (loginInfo?.user?.id) {
      navigate('/members/dashboard')
    } else if (loginInfo?.error) {
      console.error('defo got error', loginInfo.error)
      setFormError({ alertType: 'warning', title: loginInfo.error })
    } else {
      setFormError({ alertType: 'warning', title: 'Something went wrong' })
    }
  }

  const fields: WebUiFormField[] = [
    WebUiFormField.email('email', {
      label: 'Email',
      required: true,
      defaultValue: isRemembered ? isRemembered.email : null,
    }),
    WebUiFormField.password('password', { label: 'Password', required: true }),
    WebUiFormField.checkbox('remember', {
      label: 'Remember me',
      defaultChecked: !!isRemembered,
      customWrapper: (children: ReactNode) => {
        return (
          <div key={'remember'} className="flex items-center justify-between">
            {children}

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </Link>
            </div>
          </div>
        )
      },
    }),
  ]

  return (
    <WebAuthPage
      submit={(input) => processLogin(input)}
      title="Sign In to Your Account"
      subtitle={
        <p className="mt-2 text-center text-sm text-gray-600">
          No Account?{' '}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            Register Here
          </Link>
        </p>
      }
      fields={fields}
      error={formError}
      buttonText={'Sign In'}
    />
  )
}
