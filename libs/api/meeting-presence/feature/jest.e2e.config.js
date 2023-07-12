module.exports = {
  displayName: 'api-meeting-presence-feature',
  preset: '../../../../jest.preset.js',
  globals: {},
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/api/meeting-presence/feature',
  testMatch: ['<rootDir>/**/?(*.)+(e2e.spec).[jt]s?(x)'],
}
