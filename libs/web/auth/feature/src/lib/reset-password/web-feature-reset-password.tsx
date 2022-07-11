import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import * as queryString from 'querystring'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'

import { WebAuthPage } from '@biztobiz/web/auth/ui'
import { WebUiFormField } from '@biztobiz/web-ui/form'
import { WebUiAlertProps } from '@biztobiz/web-ui/alert'

export function WebFeatureResetPassword() {
  const { resetPassword } = useContext(SharedAuthContext)

  const { search } = useLocation()
  const values = queryString.parse(search)
  const [alert, setAlert] = useState<WebUiAlertProps>()

  const resetPasswordFunction = async (input: { password: string; password2: string }) => {
    if (!values['?token']) {
      setAlert({
        alertType: 'warning',
        title: 'Incorrect token.  Please copy and paste the entire link into your browser.',
      })
      return
    } else if (input.password !== input.password2) {
      setAlert({ alertType: 'warning', title: 'The passwords you entered did not match. Please try again.' })
      return
    }
    const status = await resetPassword({ token: values?.['?token']?.toString(), password: input.password })

    if (status?.success) {
      setAlert({
        alertType: 'success',
        title: 'Success!',
        message: 'Your password has been reset. Please open the app to log in.',
      })
    } else {
      setAlert({
        alertType: 'warning',
        title: 'There has been a problem',
        message: status?.error,
        messageLinkText: 'Please re-enter your email to receive a new token to reset your password.',
        messageLink: '/forgot-password',
      })
    }
  }

  const fields: WebUiFormField[] = [
    WebUiFormField.password('password', { placeholder: 'Create new password', required: true }),
    WebUiFormField.password('password2', { placeholder: 'Confirm your password', required: true }),
  ]

  return (
    <WebAuthPage
      submit={(input) => resetPasswordFunction(input)}
      title="Choose a New Password"
      subtitle={
        <p className="mt-2 text-center text-sm text-gray-600">
          <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
            Return to Forgotten Password Page
          </Link>
        </p>
      }
      fields={fields}
      alert={alert}
      buttonText={'Reset Password'}
    />
  )
}
