import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer, Theme } from '@react-navigation/native'
import { StatusBar, StatusBarStyle } from 'react-native'
import React from 'react'

/* eslint-disable-next-line */
export interface NativeUiLayoutProps {
  children: React.ReactNode
  theme?: Theme
  barStyle?: StatusBarStyle
}
// TODO: ADD LINKING: https://reactnavigation.org/docs/navigation-container/
// const config = {
//   screens: {
//     Dashboard: 'dashboard',
//     AuthStack: {
//       screens: {
//         Login: 'login',
//         Register: 'register',
//         ForgotPassword: 'forgot-password',
//         ResetPassword: 'reset-password',
//       },
//     },
//   },
// }
//
// TODO: Replace URL and shortlink with actual values
// const linking = {
//   prefixes: ['https://yoursite.com', 'yourshortlink://'],
//   config,
// }

export function NativeUiLayout(props: NativeUiLayoutProps) {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={props?.theme}>
        <StatusBar barStyle={props?.barStyle} />
        {props.children}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
