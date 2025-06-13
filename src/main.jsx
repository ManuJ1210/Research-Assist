import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import Toppage from './components/TopofthePage/Toppage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider>
      <BrowserRouter>
        <App />
           <Toppage />
      </BrowserRouter>
    </HelmetProvider>
    </StrictMode>
)
