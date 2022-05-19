import 'react-native-gesture-handler'
import 'react-native-safe-area-context'
import 'react-native-screens'
import { AppRegistry, LogBox } from 'react-native'
import { NativeShellFeature } from '@biztobiz/native/shell/feature'

AppRegistry.registerComponent('main', () => NativeShellFeature)

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
])
