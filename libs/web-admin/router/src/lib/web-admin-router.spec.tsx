import { render } from '@testing-library/react'

import WebAdminRouter from './web-admin-router'

describe('WebAdminRouter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebAdminRouter />)
    expect(baseElement).toBeTruthy()
  })
})
