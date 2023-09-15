import { useState } from 'react'

import './App.css'
import Header from './layout/user/header/header'
import Navbar from './layout/user/navbar/Navbar'
import Footer from './layout/user/footer/Footer'
import Product from './pages/user/product/Product'
import Slider from './layout/user/slider/Slider'

import Sevices from './pages/user/sevices/Sevices'
import Seach from './pages/user/seach/Seach'
import Description from './pages/user/description/Description'
import Cart from './pages/user/cart/Cart'

function App() {


  return (
    <>
      <Header/>
      <Navbar/>
      <Slider/>
      <Product/>
      <Sevices/>

      <Seach/>
      <Footer/>

      <Description/>
      <Cart/>
    </>
  )
}

export default App
