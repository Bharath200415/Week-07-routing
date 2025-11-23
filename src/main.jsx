import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { App2 } from './UseRef.jsx'
import { CounterApp } from './CounterWithContextAPI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <App /> */}
      <CounterApp/>
  </StrictMode>

)
