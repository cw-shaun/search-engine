import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardGrid from './components/cardgrid.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CardGrid /> */}
    <App />
  </StrictMode>,
)
