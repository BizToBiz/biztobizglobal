export default {
  displayName: 'native-ui-layout',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/native-ui/layout',
  preset: '../../../jest.preset.js',
}
