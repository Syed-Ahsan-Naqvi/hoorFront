import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Category from "./components/Category/Category.jsx"
import SingleProduct from "./components/SingleProduct/SingleProduct.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Newsletter from "./components/Footer/Newsletter/Newsletter.jsx"
import AppContext from "./utils/context.js"


function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/product/:id' element={<SingleProduct />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  )
}

export default App