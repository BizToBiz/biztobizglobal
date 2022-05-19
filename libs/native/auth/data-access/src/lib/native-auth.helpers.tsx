import * as Keychain from 'react-native-keychain'

export const clearCredentials = async () => {
  await Keychain.resetGenericPassword()
}

export const setCredentials = async (credentials: unknown) => {
  await Keychain.setGenericPassword('oauth', JSON.stringify(credentials))
}
