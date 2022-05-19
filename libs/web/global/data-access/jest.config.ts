module.exports = {
  displayName: 'web-global-data-access',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/web/global/data-access',
  preset: '../../../../jest.preset.ts',
}
