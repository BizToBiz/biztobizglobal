module.exports = {
  displayName: 'native-dashboard-feature',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { cwd: __dirname, configFile: './babel-jest.config.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/native/dashboard/feature',
  preset: '../../../../jest.preset.ts',
}
