import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Signup from './pages/Signup'

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App