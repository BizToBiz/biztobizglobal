import { render } from '@testing-library/react'

import WebAdminDashboard from './web-admin-dashboard'

describe('WebAdminDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebAdminDashboard />)
    expect(baseElement).toBeTruthy()
  })
})
