import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'
import { NativeDashboardFeature } from './native-dashboard-feature'
import { AppTheme } from '@biztobiz/native/global'

const Stack = createStackNavigator()

export const NativeDashboardStack: FC = () => (
  <Stack.Navigator
    initialRouteName="Dashboard"
    screenOptions={{ headerStyle: { backgroundColor: AppTheme.colors.background } }}
  >
    <Stack.Screen name="Home" component={NativeDashboardFeature} options={{ headerShown: false }} />
  </Stack.Navigator>
)
