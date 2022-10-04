import { render } from '@testing-library/react'

import { WebUiForm } from './web-ui-form'

describe('WebUiForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUiForm fields={[]} submit={() => null} />)
    expect(baseElement).toBeTruthy()
  })
})
