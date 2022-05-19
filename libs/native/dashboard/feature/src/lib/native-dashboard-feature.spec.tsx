import React from 'react'
import { render } from '@testing-library/react'

import { NativeDashboardFeature } from './native-dashboard-feature'

describe('NativeDashboardFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NativeDashboardFeature />)
    expect(baseElement).toBeTruthy()
  })
})
