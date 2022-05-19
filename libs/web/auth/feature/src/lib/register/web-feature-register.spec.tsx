import React from 'react'
import { render } from '@testing-library/react'

import { WebFeatureRegister } from './web-feature-register'

describe('WebFeatureRegister', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebFeatureRegister />)
    expect(baseElement).toBeTruthy()
  })
})
