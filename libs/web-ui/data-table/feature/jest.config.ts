/* eslint-disable */
export default {
  displayName: 'web-ui-data-table-feature',
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/web-ui/data-table/feature',
}
