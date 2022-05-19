import React from 'react'
import { render } from '@testing-library/react'

import { WebFeatureResetPassword } from './web-feature-reset-password'

describe('WebFeatureResetPassword', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebFeatureResetPassword />)
    expect(baseElement).toBeTruthy()
  })
})
