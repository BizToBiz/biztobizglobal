import { render } from '@testing-library/react'

import SharedUtilsFeature from './shared-utils-feature'

describe('SharedUtilsFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUtilsFeature />)
    expect(baseElement).toBeTruthy()
  })
})
