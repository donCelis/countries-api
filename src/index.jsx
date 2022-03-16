import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css'

import { AppProvider } from './context'
import App from './routes'

render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
  document.getElementById('app')
)
