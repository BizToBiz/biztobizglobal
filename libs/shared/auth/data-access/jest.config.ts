export default {
  displayName: 'shared-auth-data-access',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/shared/auth/data-access',
  preset: '../../../../jest.preset.js',
}
