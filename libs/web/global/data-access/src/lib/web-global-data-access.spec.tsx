import { render } from '@testing-library/react'

import WebGlobalDataAccess from './web-global-data-access'

describe('WebGlobalDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebGlobalDataAccess />)
    expect(baseElement).toBeTruthy()
  })
})
