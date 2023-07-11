module.exports = {
  displayName: 'api-notification-feature',
  preset: '../../../../jest.preset.js',
  globals: {},
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/api/notification/feature',
  testMatch: ['<rootDir>/**/?(*.)+(e2e.spec).[jt]s?(x)'],
}
