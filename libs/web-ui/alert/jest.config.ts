module.exports = {
  displayName: 'web-ui-alert',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/web-ui/alert',
  preset: '../../../jest.preset.ts',
}
