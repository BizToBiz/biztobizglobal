import { UiButton } from '@biztobiz/native/ui-button'
import { useMeQuery } from '@biztobiz/shared/util-sdk'
import React, { useContext } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'

export function NativeProfileScreen() {
  const { logout } = useContext(SharedAuthContext)
  const { data: meData } = useMeQuery()

  return (
    <SafeAreaView style={tailwind('flex-1 justify-between')}>
      <View style={tailwind('py-16 bg-green-200 text-lg items-center justify-center')}>
        <Image
          source={{ uri: meData?.me?.avatarUrl }}
          height={1}
          width={1}
          style={tailwind('rounded-full w-32 h-32 mb-12')}
        />
        <Text style={tailwind('text-green-800 text-xl')}>{meData?.me?.username}</Text>
      </View>

      <View style={tailwind('flex-grow bg-indigo-100 justify-end pb-8 px-8')}>
        <UiButton onPress={() => logout()} label="Log out" />
      </View>
    </SafeAreaView>
  )
}
