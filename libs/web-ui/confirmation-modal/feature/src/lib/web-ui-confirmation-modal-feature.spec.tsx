import { render } from '@testing-library/react'

import WebUiConfirmationModalFeature from './web-ui-confirmation-modal-feature'

describe('WebUiConfirmationModalFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUiConfirmationModalFeature />)
    expect(baseElement).toBeTruthy()
  })
})
