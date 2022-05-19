import { render } from '@testing-library/react'

import SharedAuthDataAccess from './shared-auth-data-access'

describe('SharedAuthDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedAuthDataAccess />)
    expect(baseElement).toBeTruthy()
  })
})
