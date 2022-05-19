module.exports = {
  displayName: 'native-ui-layout',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/native-ui/layout',
  preset: '../../../jest.preset.ts',
}
