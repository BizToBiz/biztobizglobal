module.exports = {
  displayName: 'native-ui-alert',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/native-ui/alert',
  preset: '../../../jest.preset.ts',
}
