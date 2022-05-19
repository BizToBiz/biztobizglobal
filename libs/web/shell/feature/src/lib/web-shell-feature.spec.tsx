import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { WebShellFeature } from './web-shell-feature'

describe('WebShellFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <WebShellFeature />
      </BrowserRouter>,
    )
    expect(baseElement).toBeTruthy()
  })
})
