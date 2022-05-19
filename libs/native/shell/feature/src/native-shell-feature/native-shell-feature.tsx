import { ApolloProvider } from '@apollo/client'
import { SharedAuthProvider } from '@biztobiz/shared/auth/data-access'
import { createApolloClient } from '@biztobiz/shared/util-apollo'
import React from 'react'
import { NativeUiLayout } from '@biztobiz/native-ui/layout'
import { barStyle, identityAtom, isRememberedAtom, theme } from '@biztobiz/native/global'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NativeShellRoutes } from './native-shell-routes'

export const NativeShellFeature = () => {
  const client = createApolloClient('http://localhost:3000/graphql')
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ApolloProvider client={client}>
        <SharedAuthProvider identityAtom={identityAtom} isRememberedAtom={isRememberedAtom}>
          <NativeUiLayout theme={theme} barStyle={barStyle}>
            {/*<NativeOriginalFeature />*/}
            <NativeShellRoutes />
          </NativeUiLayout>
        </SharedAuthProvider>
      </ApolloProvider>
    </GestureHandlerRootView>
  )
}
