import { WebShellFeature } from '@biztobiz/web/shell/feature'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WebShellFeature />
    </BrowserRouter>
  </React.StrictMode>,
)
