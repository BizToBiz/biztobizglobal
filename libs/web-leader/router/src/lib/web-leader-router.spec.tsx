import { render } from '@testing-library/react'

import WebLeaderRouter from './web-leader-router'

describe('WebLeaderRouter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLeaderRouter />)
    expect(baseElement).toBeTruthy()
  })
})
