import React from 'react'
import { render } from '@testing-library/react'

import { WebFeatureLogin } from './web-feature-login'

describe('WebFeatureLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebFeatureLogin />)
    expect(baseElement).toBeTruthy()
  })
})
