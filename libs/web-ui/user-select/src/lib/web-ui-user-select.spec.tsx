import { render } from '@testing-library/react'

import WebUiUserSelect from './web-ui-user-select'

describe('WebUiUserSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUiUserSelect />)
    expect(baseElement).toBeTruthy()
  })
})
