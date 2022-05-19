import { AuthPage } from '@biztobiz/native/auth/ui'
import { Link } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { ForgotPasswordInput } from '@biztobiz/shared/util-sdk'
import { WebUiAlertProps } from '@biztobiz/web-ui/alert'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'
import { NativeFormField } from '@biztobiz/native/ui-form'
import { Text } from 'react-native'
import tw from 'twrnc'

export function AuthForgotPasswordScreen() {
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
  const fields: NativeFormField[] = [NativeFormField.email('email', { label: 'Email', required: true })]

  return (
    <AuthPage
      submit={(input) => forgotPasswordFunction(input)}
      title="Forgot Your Password?"
      subtitle={
        <Text style={tw`mt-2 text-center text-sm text-gray-600`}>
          <Link to="/Login" style={tw`font-medium text-indigo-600 hover:text-indigo-500`}>
            Back to Login
          </Link>
        </Text>
      }
      fields={fields}
      alert={alert}
      buttonLabel={'Request Password Reset Token'}
    />
  )
}
