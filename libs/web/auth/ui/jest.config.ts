export default {
  displayName: 'web-auth-ui',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { cwd: __dirname, configFile: './babel-jest.config.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/web/auth/ui',
  preset: '../../../../jest.preset.js',
}
