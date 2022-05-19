import { AuthPage } from '@biztobiz/native/auth/ui'
import { NativeFormField } from '@biztobiz/native/ui-form'
import { Link, useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { LoginInput } from '@biztobiz/shared/util-sdk'
import { WebUiAlertProps } from '@biztobiz/web-ui/alert'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text } from 'react-native'
import tw from 'twrnc'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'
import { RootStackParamList } from '@biztobiz/native/shell/feature'

export function AuthLoginScreen() {
  const { login } = useContext(SharedAuthContext)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const [alert, setAlert] = useState<WebUiAlertProps>()

  const fields = [
    NativeFormField.email('email', { label: 'Email', required: true }),
    NativeFormField.password('password', { label: 'Password', required: true }),
  ]

  const processLogin = async (input: LoginInput) => {
    const loginInfo = await login(input)
    console.log('loginInfo', loginInfo)
    if (loginInfo?.user?.id) {
      navigation.navigate('Dashboard')
    } else if (loginInfo?.error) {
      setAlert({ alertType: 'warning', title: loginInfo?.error })
    } else {
      setAlert({ alertType: 'warning', title: 'Something went wrong' })
    }
  }

  return (
    <AuthPage
      title="Sign In to Your Account"
      subtitle={
        <Text style={tw`mt-2 text-center text-sm text-gray-600`}>
          No Account?{' '}
          <Link to="/Register" style={tw`font-medium text-indigo-600 hover:text-indigo-500`}>
            Register Here
          </Link>
        </Text>
      }
      fields={fields}
      submit={processLogin}
      buttonLabel="Log in"
      alert={alert}
    >
      <Text style={tw`mt-2 text-center text-sm text-gray-600`}>
        <Link to="/ForgotPassword" style={tw`font-medium text-indigo-600 hover:text-indigo-500`}>
          Forgot Your Password?
        </Link>
      </Text>
    </AuthPage>
  )
}
