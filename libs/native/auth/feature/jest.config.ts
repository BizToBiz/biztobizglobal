export default {
  displayName: 'native-auth-feature',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { cwd: __dirname, configFile: './babel-jest.config.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/native/auth/feature',
  preset: '../../../../jest.preset.js',
}
