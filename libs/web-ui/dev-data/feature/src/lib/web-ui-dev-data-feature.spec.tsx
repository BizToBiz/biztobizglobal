import { render } from '@testing-library/react'

import { WebUiDevDataFeature } from './web-ui-dev-data-feature'

describe('WebUiDevDataFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUiDevDataFeature />)
    expect(baseElement).toBeTruthy()
  })
})
