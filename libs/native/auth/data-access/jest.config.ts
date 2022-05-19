module.exports = {
  displayName: 'native-auth-data-access',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { cwd: __dirname, configFile: './babel-jest.config.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/native/auth/data-access',
  preset: '../../../../jest.preset.ts',
}
