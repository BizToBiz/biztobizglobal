import { NativeForm, NativeFormField } from '@biztobiz/native/ui-form'
import React, { ReactNode } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import tw from 'twrnc'
import { NativeUiAlert, NativeUiAlertProps } from '@biztobiz/native-ui/alert'

interface AuthPageProps {
  buttonLabel: string
  fields: NativeFormField[]
  submit: (input) => void
  title: string
  subtitle?: string | ReactNode
  children?: ReactNode
  alert?: NativeUiAlertProps
}

export function AuthPage(props: AuthPageProps) {
  return (
    <SafeAreaView style={tw`min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8`}>
      <View style={tw`sm:mx-auto sm:w-full sm:max-w-md`}>
        <Text style={tw`mt-6 text-center text-3xl font-extrabold text-gray-900`}>{props?.title}</Text>
        {typeof props?.subtitle === 'string' ? (
          <Text style={tw`mt-2 text-center text-sm text-gray-600`}>{props?.subtitle}</Text>
        ) : (
          props?.subtitle
        )}
      </View>

      <View style={tw`mt-8 sm:mx-auto sm:w-full sm:max-w-md`}>
        <View style={tw`bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10`}>
          {props?.alert ? <NativeUiAlert {...props.alert} /> : null}
          <NativeForm fields={props?.fields} submit={props?.submit} buttonLabel={props?.buttonLabel} />
          {props?.children}
        </View>
      </View>
    </SafeAreaView>
  )
}
