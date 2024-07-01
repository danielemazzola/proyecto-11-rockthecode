import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Biography from './pages/biography/Biography'
import NotFound from './pages/not-found/NotFound'
import { CharsProvider } from './context/Context'

const App = () => {
  return (
    <BrowserRouter>
      <CharsProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index='/home' element={<Home />} />
            <Route path='/biography/:character' element={<Biography />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </CharsProvider>
    </BrowserRouter>
  )
}

export default App
