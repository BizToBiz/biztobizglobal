import { render } from '@testing-library/react'

import { WebAdminDashboardFeature } from './web-admin-dashboard-feature'

describe('WebAdminDashboardFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebAdminDashboardFeature />)
    expect(baseElement).toBeTruthy()
  })
})
