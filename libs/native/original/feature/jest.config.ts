export default {
  displayName: 'native-original-feature',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/native/original/feature',
  preset: '../../../../jest.preset.js',
}
