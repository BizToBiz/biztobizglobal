module.exports = {
  displayName: 'api-chapter-member-feature',
  preset: '../../../../jest.preset.js',
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/api/chapter-member/feature',
  testMatch: ['<rootDir>/**/?(*.)+(e2e.spec).[jt]s?(x)'],
}
