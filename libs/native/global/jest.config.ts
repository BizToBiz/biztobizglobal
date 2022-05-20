export default {
  displayName: 'native-global',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/native/global',
  preset: '../../../jest.preset.js',
}
