import { render } from '@testing-library/react'

import WebLeaderTransactionReferralReport from './web-leader-transaction-referral-report'

describe('WebLeaderTransactionReferralReport', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebLeaderTransactionReferralReport />)
    expect(baseElement).toBeTruthy()
  })
})
