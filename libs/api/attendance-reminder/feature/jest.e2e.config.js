module.exports = {
  displayName: 'api-attendance-reminder-feature',
  preset: '../../../../jest.preset.js',
  globals: {},
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/api/attendance-reminder/feature',
  testMatch: ['<rootDir>/**/?(*.)+(e2e.spec).[jt]s?(x)'],
}
