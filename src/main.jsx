import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { App2 } from './UseRef.jsx'
import { CounterApp } from './CounterWithContextAPI.jsx'
import { RecoiledApp } from './JotaiCounter.jsx'

createRoot(document.getElementById('root')).render(
  <>
      {/* <App /> */}
      {/* <CounterApp/> */}
      <RecoiledApp/>
      
  </>

)
