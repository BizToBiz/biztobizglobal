import { render } from '@testing-library/react'

import WebLeaderDashboard from './web-leader-dashboard'

describe('WebLeaderDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLeaderDashboard />)
    expect(baseElement).toBeTruthy()
  })
})
