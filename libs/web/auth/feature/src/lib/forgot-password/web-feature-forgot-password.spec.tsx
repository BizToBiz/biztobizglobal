import React from 'react'
import { render } from '@testing-library/react'

import { WebFeatureForgotPassword } from './web-feature-forgot-password'

describe('WebFeatureLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebFeatureForgotPassword />)
    expect(baseElement).toBeTruthy()
  })
})
