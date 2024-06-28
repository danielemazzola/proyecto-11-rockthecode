import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Biography from './pages/biography/Biography'
import Transformations from './pages/transformations/Transformations'
import NotFound from './pages/not-found/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index='/home' element={<Home />} />
          <Route path='/biography/:character' element={<Biography />} />
          <Route
            path='transformations/:character'
            element={<Transformations />}
          />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
