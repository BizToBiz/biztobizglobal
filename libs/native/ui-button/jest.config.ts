export default {
  displayName: 'native-ui-button',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { cwd: __dirname, configFile: './babel-jest.config.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/native/ui-button',
  preset: '../../../jest.preset.js',
}
