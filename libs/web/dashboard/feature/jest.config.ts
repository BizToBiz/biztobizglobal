module.exports = {
  displayName: 'web-dashboard-feature',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { cwd: __dirname, configFile: './babel-jest.config.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/web/dashboard/feature',
  preset: '../../../../jest.preset.ts',
}
