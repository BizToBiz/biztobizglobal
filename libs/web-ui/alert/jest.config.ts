export default {
  displayName: 'web-ui-alert',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/web-ui/alert',
  preset: '../../../jest.preset.js',
}
