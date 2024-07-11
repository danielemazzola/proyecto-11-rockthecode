import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CharsProvider } from './context/CharsContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { GameProvider } from './context/GameContext.jsx'
import ScrollToTop from './helper/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <CharsProvider>
        <ThemeProvider>
          <GameProvider>
            <App />
          </GameProvider>
        </ThemeProvider>
      </CharsProvider>
    </BrowserRouter>
  </StrictMode>
)
