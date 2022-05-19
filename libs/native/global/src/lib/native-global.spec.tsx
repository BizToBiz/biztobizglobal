import { render } from '@testing-library/react'

import NativeGlobal from './native-global'

describe('NativeGlobal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NativeGlobal />)
    expect(baseElement).toBeTruthy()
  })
})
