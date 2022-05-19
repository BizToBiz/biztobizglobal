import React from 'react'
import { render } from '@testing-library/react'

import { NativeForm } from './native-form'

describe('NativeUiForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NativeForm fields={[]} submit={console.log} />)
    expect(baseElement).toBeTruthy()
  })
})
