module.exports = {
  displayName: 'shared-auth-data-access',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/shared/auth/data-access',
  preset: '../../../../jest.preset.ts',
}
