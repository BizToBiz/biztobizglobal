import { NativeAuthContext } from '@biztobiz/native/auth/data-access'
import { AuthPage } from '@biztobiz/native/auth/ui'
import { NativeFormField } from '@biztobiz/native/ui-form'
import { Link, useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from './AuthStack'
import { Text } from 'react-native'
import tw from 'twrnc'

export function AuthRegisterScreen() {
  const { register } = useContext(NativeAuthContext)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const fields = [
    NativeFormField.email('email', { label: 'Email', required: true }),
    NativeFormField.password('password', { label: 'Password', required: true }),
  ]

  const submit = (input) => register(input)

  return (
    <AuthPage
      title="Create a New Account"
      subtitle={
        <Text style={tw`mt-2 text-center text-sm text-gray-600`}>
          Already a Member?{' '}
          <Link to="/Login" style={tw`font-medium text-indigo-600 hover:text-indigo-500`}>
            Log In Here
          </Link>
        </Text>
      }
      fields={fields}
      submit={submit}
      buttonLabel="Register"
    />
  )
}
