import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import UsersState from './Components/UsersState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersState>
  </StrictMode>,
)
