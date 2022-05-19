import React, { useContext, useState } from 'react'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'
import { WebUiFormField } from '@biztobiz/web-ui/form'
import { ForgotPasswordInput } from '@biztobiz/shared/util-sdk'
import { WebAuthPage } from '@biztobiz/web/auth/ui'
import { Link } from 'react-router-dom'
import { WebUiAlertProps } from '@biztobiz/web-ui/alert'

export function WebFeatureForgotPassword() {
  const { forgotPassword } = useContext(SharedAuthContext)
  const [alert, setAlert] = useState<WebUiAlertProps>()

  const forgotPasswordFunction = async (input: ForgotPasswordInput) => {
    const complete = await forgotPassword(input)
    if (complete?.success) {
      setAlert({
        alertType: 'success',
        title: 'Password reset email sent',
        message: 'Please check your email and follow the instructions to reset your password.',
      })
    } else {
      setAlert({
        alertType: 'warning',
        title: 'There was an error finding your account',
        message: 'Please check that your email is correct.',
      })
    }
  }
  const fields: WebUiFormField[] = [WebUiFormField.email('email', { label: 'Email', required: true })]

  return (
    <WebAuthPage
      submit={(input) => forgotPasswordFunction(input)}
      title="Forgot Your Password?"
      subtitle={
        <p className="mt-2 text-center text-sm text-gray-600">
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Back to Login
          </Link>
        </p>
      }
      fields={fields}
      alert={alert}
      buttonText={'Request Password Reset Token'}
    />
  )
}
