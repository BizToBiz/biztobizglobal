import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'
import { AuthLoginScreen } from './AuthLoginScreen'
import { AuthRegisterScreen } from './AuthRegisterScreen'
import { AppTheme } from '@biztobiz/native/global'
import { RootStackParamList } from '@biztobiz/native/shell/feature'
import { AuthForgotPasswordScreen } from './AuthForgotPasswordScreen'

const Stack = createStackNavigator<RootStackParamList>()

const navigatorOptions = { headerStyle: { backgroundColor: AppTheme.colors.background } }
const screenOptions = { headerShown: false, animationEnabled: false }

export const AuthStack: FC = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={navigatorOptions}>
    <Stack.Screen name="Login" component={AuthLoginScreen} options={screenOptions} />
    <Stack.Screen name="Register" component={AuthRegisterScreen} options={screenOptions} />
    <Stack.Screen name="ForgotPassword" component={AuthForgotPasswordScreen} options={screenOptions} />
  </Stack.Navigator>
)
