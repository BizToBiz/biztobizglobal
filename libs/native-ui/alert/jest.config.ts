export default {
  displayName: 'native-ui-alert',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/native-ui/alert',
  preset: '../../../jest.preset.js',
}
