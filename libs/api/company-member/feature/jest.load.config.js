module.exports = {
  displayName: 'api-company-member-feature',
  preset: '../../../../jest.preset.js',
  globals: {},
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/api/company-member/feature',
  testMatch: ['<rootDir>/**/?(*.)+(load.spec).[jt]s?(x)'],
}
