import { createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const storageAsync = createJSONStorage<any>(() => AsyncStorage)
export const storage = { ...storageAsync, delayInit: true }
