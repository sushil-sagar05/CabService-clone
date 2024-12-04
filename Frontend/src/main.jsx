import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import CaptainConext from './context/CaptainContext.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainConext>
    <UserContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   </UserContext>
   </CaptainConext>
  </StrictMode>,
)
