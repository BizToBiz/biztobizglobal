import { render } from '@testing-library/react'

import NativeUiAlert from './native-ui-alert'

describe('NativeUiAlert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NativeUiAlert />)
    expect(baseElement).toBeTruthy()
  })
})
