import { render } from '@testing-library/react'

import WebUiAdminLayoutFeature from './web-ui-admin-layout-feature'

describe('WebUiAdminLayoutFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUiAdminLayoutFeature />)
    expect(baseElement).toBeTruthy()
  })
})
