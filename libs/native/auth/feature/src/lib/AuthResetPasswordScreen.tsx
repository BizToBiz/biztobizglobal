import { AuthPage } from '@biztobiz/native/auth/ui'
import { Link, useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { WebUiAlertProps } from '@biztobiz/web-ui/alert'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'
import tw from 'twrnc'
import { Text } from 'react-native'
import { NativeFormField } from '@biztobiz/native/ui-form'

export function AuthForgotPasswordScreen() {
  const { resetPassword } = useContext(SharedAuthContext)
  const navigation = useNavigation()

  // TODO: Fix with real params
  // const params = navigation.getRootState().routes[3].params as { token: string }
  const params = { token: '123' }
  const [alert, setAlert] = useState<WebUiAlertProps>()

  const resetPasswordFunction = async (input: { password: string; password2: string }) => {
    if (!params.token) {
      setAlert({
        alertType: 'warning',
        title: 'Incorrect token.  Please copy and paste the entire link into your browser.',
      })
      return
    } else if (input.password !== input.password2) {
      setAlert({ alertType: 'warning', title: 'The passwords you entered did not match. Please try again.' })
      return
    }
    const status = await resetPassword({ token: params.token, password: input.password })

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

  const fields: NativeFormField[] = [
    NativeFormField.password('password', { label: 'Create new password', required: true }),
    NativeFormField.password('password2', { label: 'Confirm your password', required: true }),
  ]

  return (
    <AuthPage
      submit={(input) => resetPasswordFunction(input)}
      title="Choose a New Password"
      subtitle={
        <Text style={tw`mt-2 text-center text-sm text-gray-600`}>
          <Link to="/ForgotPassword" style={tw`font-medium text-indigo-600 hover:text-indigo-500`}>
            Return to Forgotten Password Page
          </Link>
        </Text>
      }
      fields={fields}
      alert={alert}
      buttonLabel={'Reset Password'}
    />
  )
}
