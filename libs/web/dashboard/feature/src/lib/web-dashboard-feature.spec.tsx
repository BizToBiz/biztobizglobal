import React from 'react'
import { render } from '@testing-library/react'

import { WebDashboardFeature } from './web-dashboard-feature'

describe('WebDashboardFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebDashboardFeature />)
    expect(baseElement).toBeTruthy()
  })
})
