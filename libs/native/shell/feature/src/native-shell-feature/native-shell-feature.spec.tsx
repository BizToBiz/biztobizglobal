import { render } from '@testing-library/react-native'
import React from 'react'
import 'react-native'

import { NativeShellFeature } from './native-shell-feature'

it('renders correctly', () => {
  const { getByTestId } = render(<NativeShellFeature />)
  expect(getByTestId('heading')).toContain('Welcome')
})
