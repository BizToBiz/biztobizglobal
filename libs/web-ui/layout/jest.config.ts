export default {
  displayName: 'web-ui-layout',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/web-ui/layout',
  preset: '../../../jest.preset.js',
}
