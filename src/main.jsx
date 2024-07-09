import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CharsProvider } from './context/CharsContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CharsProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CharsProvider>
  </BrowserRouter>
)
