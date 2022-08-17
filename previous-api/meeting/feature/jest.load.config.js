module.exports = {
  displayName: 'api-meeting-feature',
  preset: '../../../../jest.preset.js',
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/api/meeting/feature',
  testMatch: ['<rootDir>/**/?(*.)+(load.spec).[jt]s?(x)'],
}