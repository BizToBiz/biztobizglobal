module.exports = {
  displayName: 'web-ui-form',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/web-ui/form',
  preset: '../../../jest.preset.ts',
}
