import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tracking from './BusTrackingPage/tracking'
import '../CSS/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Tracking />
  </StrictMode>,
)