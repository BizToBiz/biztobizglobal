import { render } from '@testing-library/react'

import { WebUiDataTableFeature } from './web-ui-data-table-feature'

describe('WebUiDataTableFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUiDataTableFeature />)
    expect(baseElement).toBeTruthy()
  })
})
