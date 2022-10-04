import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'
import { NativeProfileScreen } from './native-profile-screen'
import { AppTheme } from '@biztobiz/native/global'

const Stack = createStackNavigator()

export const NativeProfileStack: FC = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{ headerStyle: { backgroundColor: AppTheme.colors.background } }}
  >
    <Stack.Screen name="Home" component={NativeProfileScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
)
