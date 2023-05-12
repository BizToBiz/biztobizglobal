import { render } from '@testing-library/react'

import WebUiComboBox from './web-ui-combo-box'

describe('WebUiComboBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUiComboBox />)
    expect(baseElement).toBeTruthy()
  })
})
