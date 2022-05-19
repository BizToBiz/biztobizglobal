import { useMeQuery, useUptimeQuery } from '@biztobiz/shared/util-sdk'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

export function NativeDashboardFeature() {
  const uptime = useUptimeQuery({ pollInterval: 1000 })
  const me = useMeQuery()

  return (
    <SafeAreaView style={tailwind('flex-1 justify-between')}>
      <View style={tailwind('flex-grow bg-green-200 text-lg items-center justify-center')}>
        <Text style={tailwind('my-3 text-green-800')}>React Native Dashboard</Text>
      </View>
      <View style={tailwind('flex-grow bg-pink-100 items-center justify-center')}>
        <Text style={tailwind('my-3 text-pink-800')}>Logged in as: {me?.data?.me?.username}</Text>
      </View>
      <View style={tailwind('flex-grow bg-indigo-100 items-center justify-center')}>
        <Text style={tailwind('my-3 text-indigo-800')}>Server Uptime: {uptime?.data?.uptime}</Text>
      </View>
    </SafeAreaView>
  )
}
