import { render } from '@testing-library/react'

import NativeOriginalFeature from './native-original-feature'

describe('NativeOriginalFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NativeOriginalFeature />)
    expect(baseElement).toBeTruthy()
  })
})
