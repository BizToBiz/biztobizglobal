import React from 'react'
import { render } from '@testing-library/react'

import { WebAboutFeature } from './web-about-feature'

describe('WebAboutFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebAboutFeature />)
    expect(baseElement).toBeTruthy()
  })
})
