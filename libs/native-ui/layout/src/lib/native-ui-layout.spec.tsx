import { render } from '@testing-library/react'

import NativeUiLayout from './native-ui-layout'

describe('NativeUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NativeUiLayout />)
    expect(baseElement).toBeTruthy()
  })
})
