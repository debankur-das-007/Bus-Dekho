import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Drivers from './DriversPage/Drivers'
import '../CSS/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Drivers />
  </StrictMode>,
)