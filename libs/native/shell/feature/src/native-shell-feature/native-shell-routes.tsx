import { AuthStack } from '@biztobiz/native/auth/feature'
import { NativeDashboardStack } from '@biztobiz/native/dashboard/feature'
import { NativeProfileStack } from '@biztobiz/native/profile/feature'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text } from 'react-native'
import { useAtom } from 'jotai'
import { isAuthenticatedAtom } from '@biztobiz/native/global'

export type RootStackParamList = {
  Dashboard: undefined
  Profile: undefined
  Login: undefined
  Register: undefined
  ForgotPassword: undefined
  ResetPassword: undefined
}

const Tab = createBottomTabNavigator<RootStackParamList>()

const simpleIcon =
  (symbol) =>
  ({ color, size }) =>
    <Text style={{ color: color, fontSize: size }}>{symbol}</Text>

const UserStack = () => (
  <Tab.Navigator initialRouteName="Dashboard" screenOptions={{}}>
    <Tab.Screen name="Dashboard" component={NativeDashboardStack} options={{ tabBarIcon: simpleIcon('S') }} />
    <Tab.Screen name="Profile" component={NativeProfileStack} options={{ tabBarIcon: simpleIcon('P') }} />
  </Tab.Navigator>
)

export function NativeShellRoutes() {
  const [isAuthenticated] = useAtom(isAuthenticatedAtom)
  return isAuthenticated ? <UserStack /> : <AuthStack />
}
