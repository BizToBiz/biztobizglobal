import React from 'react'
import { render } from '@testing-library/react'

import { WebAuthPage } from './web-auth-page'

describe('WebAuthPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebAuthPage buttons={[]} fields={[]} submit={() => {}} />)
    expect(baseElement).toBeTruthy()
  })
})
